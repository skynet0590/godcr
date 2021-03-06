package routes

import (
	"fmt"
	"log"
	"net/http"

	"github.com/decred/dcrd/dcrutil"
	"github.com/gorilla/websocket"
	"github.com/raedahgroup/godcr/app/walletcore"
	"github.com/raedahgroup/godcr/web/weblog"
)

var clients = make(map[*websocket.Conn]bool)
var wsBroadcast = make(chan Packet)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
}

type eventType string

const (
	updateConnectionInfo eventType = "updateConnInfo"
	updateBalance        eventType = "updateBalance"
	updateSyncProgress   eventType = "updateSyncProgress"
)

type Packet struct {
	Event   eventType   `json:"event"`
	Message interface{} `json:"message"`
}

func (routes *Routes) wsHandler(w http.ResponseWriter, r *http.Request) {
	ws, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Fatal(err)
	}

	clients[ws] = true
}

func (routes *Routes) waitToSendMessagesToClients() {
	if routes.ctx.Err() != nil {
		// user must have hit ctrl+c to shutdown the web server
		return
	}

	for {
		msg := <-wsBroadcast
		for client := range clients {
			err := client.WriteJSON(msg)
			if err != nil {
				weblog.LogError(fmt.Errorf("ws update error: %s", err.Error()))
				client.Close()
				delete(clients, client)
			}
		}
	}
}

func (routes *Routes) sendWsConnectionInfoUpdate() {
	if routes.ctx.Err() != nil {
		// user must have hit ctrl+c to shutdown the web server, will get error if attempt to get wallet connection info
		return
	}

	info, err := routes.walletMiddleware.WalletConnectionInfo()
	if err != nil {
		weblog.LogError(err)
	}

	wsBroadcast <- Packet{
		Event:   updateConnectionInfo,
		Message: info,
	}
}

func (routes *Routes) sendWsBalance() {
	if routes.ctx.Err() != nil {
		// user must have hit ctrl+c to shutdown the web server, will get error if attempt to get wallet balance
		return
	}

	accounts, err := routes.walletMiddleware.AccountsOverview(walletcore.DefaultRequiredConfirmations)
	if err != nil {
		weblog.LogError(fmt.Errorf("Error fetching account balance: %s", err.Error()))
		return
	}
	type accountInfo struct {
		Number uint32 `json:"number"`
		Info   string `json:"info"`
	}

	var accountInfos []accountInfo

	var totalBalance dcrutil.Amount
	for _, acc := range accounts {
		totalBalance += acc.Balance.Total
		accountInfos = append(accountInfos, accountInfo{Number: acc.Number, Info: acc.String()})
	}
	wsBroadcast <- Packet{
		Event:   updateBalance,
		Message: map[string]interface{}{"accounts": accountInfos, "total": totalBalance.String()},
	}
}

func (routes *Routes) sendWsSyncProgress() {
	syncInfo, err := routes.prepareSyncInfoMap()
	if err != nil {
		weblog.LogError(fmt.Errorf("error updating sync info via ws: %s", err.Error()))
		return
	}

	wsBroadcast <- Packet{
		Event:   updateSyncProgress,
		Message: syncInfo,
	}
}
