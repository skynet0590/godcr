package commands

import (
	"context"
	"fmt"
	"github.com/raedahgroup/godcr/cli/termio/terminalprompt"
	"strconv"
	"strings"

	"github.com/raedahgroup/godcr/app/walletcore"
	"github.com/raedahgroup/godcr/cli/termio"
)

// HistoryCommand enables the user view their transaction history.
type HistoryCommand struct {
	commanderStub
}

// Run runs the `history` command.
func (h HistoryCommand) Run(ctx context.Context, wallet walletcore.Wallet) error {
	var startBlockHeight int32 = -1
	var displayedTxHashes []string
	columns := []string{
		"#",
		"Date",
		"Amount (DCR)",
		"Direction",
		"Hash",
		"Type",
	}

	// show transactions in pages, using infinite loop
	// after displaying transactions for each page,
	// ask user if to show next page, previous page, tx details or exit the loop
	for {
		transactions, endBlockHeight, err := wallet.TransactionHistory(ctx, startBlockHeight, walletcore.TransactionHistoryCountPerPage)
		if err != nil {
			return err
		}

		// next start block should be the block immediately preceding the current end block
		startBlockHeight = endBlockHeight - 1

		lastTxRowNumber := len(displayedTxHashes) + 1

		pageTxRows := make([][]interface{}, len(transactions))
		for i, tx := range transactions {
			displayedTxHashes = append(displayedTxHashes, tx.Hash)

			pageTxRows[i] = []interface{}{
				lastTxRowNumber + i,
				tx.FormattedTime,
				tx.Direction,
				tx.Amount,
				tx.Type,
			}
		}
		termio.PrintTabularResult(termio.StdoutWriter, columns, pageTxRows)

		// ask user what to do next
		prompt := fmt.Sprintf("Showing transactions %d-%d, enter # for details, show (m)ore, or (q)uit",
			lastTxRowNumber, lastTxRowNumber+len(transactions))
		validateUserInput := func(userInput string) error {
			if strings.EqualFold(userInput, "m") || strings.EqualFold(userInput, "q") {
				return nil
			}

			// check if user input is a valid tx #
			txRowNumber, err := strconv.ParseUint(userInput, 10, 32)
			if err != nil || txRowNumber < 1 || int(txRowNumber) > len(pageTxRows) {
				return fmt.Errorf("invalid response, try again")
			}

			return nil
		}
		userChoice, err := terminalprompt.RequestInput(prompt, validateUserInput)
		if err != nil {
			return fmt.Errorf("error reading response: %s", err.Error())
		}

		if strings.EqualFold(userChoice, "q") {
			break
		} else if strings.EqualFold(userChoice, "m") {
			continue
		}

		// if the code execution continues to this point, it means user's response was neither "q" or "m"
		// must therefore be a tx # to view tx details
		txRowNumber, _ := strconv.ParseUint(userChoice, 10, 32)
		txHash := displayedTxHashes[txRowNumber-1]

		showTransactionCommandArgs := ShowTransactionCommandArgs{txHash}
		showTxDetails := ShowTransactionCommand{
			Args:     showTransactionCommandArgs,
			Detailed: true,
		}
		return showTxDetails.Run(ctx, wallet)
	}

	return nil
}
