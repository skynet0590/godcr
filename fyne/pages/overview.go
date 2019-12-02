package pages

import (
	"fyne.io/fyne"
	"fyne.io/fyne/canvas"
	"fyne.io/fyne/layout"
	"fyne.io/fyne/widget"
	"github.com/raedahgroup/godcr/fyne/assets"
	"github.com/raedahgroup/godcr/fyne/widgets"
	"image/color"
)

const PageTitle = "Overview"

type Overview struct {
	transactionBox *widget.Box
}

// todo: display overview page (include sync progress UI elements)
// todo: register sync progress listener on overview page to update sync progress views
func overviewPageContent(app *AppInterface) fyne.CanvasObject {
		app.Window.Resize(fyne.NewSize(650, 650))
		return widget.NewHBox(widgets.NewHSpacer(18), container())
}

func container () fyne.CanvasObject {
	return widget.NewVBox(
		title(),
		balance(),
		widgets.NewVSpacer(50),
		pageBoxes(),
		)
}

func title () fyne.CanvasObject {
	titleWidget := widget.NewLabelWithStyle(PageTitle, fyne.TextAlignLeading, fyne.TextStyle{Bold: true, Italic: true})
	return widget.NewHBox(titleWidget)
}

func balance () fyne.CanvasObject {
	dcrBalance := widgets.NewLargeText("315.08", color.Black)
	dcrDecimals := widgets.NewSmallText("193725 DCR", color.Black)
	decimalsBox := fyne.NewContainerWithLayout(layout.NewVBoxLayout(), widgets.NewVSpacer(6),dcrDecimals)
	return widget.NewHBox(widgets.NewVSpacer(10), dcrBalance, decimalsBox)
}

func pageBoxes() (object fyne.CanvasObject) {
	return fyne.NewContainerWithLayout(layout.NewVBoxLayout(),
		blockStatusBox(),
		widgets.NewVSpacer(15),
		recentTransactionBox(),
		)
}

func recentTransactionBox () fyne.CanvasObject {
	table := &widgets.Table{}
	// add a maximum of 5 rows to the recent transaction box
	table.NewTable(transactionRowHeader(),
		newTransactionRow(assets.ReceiveIcon,"0.0000004 DCR", "0.0000004 DCR",
			"yourself", "confirmed", "08-11-2019"),
		newTransactionRow(assets.SendIcon,"0.0000004 DCR",
			"0.0000004 DCR", "yourself", "confirmed", "08-11-2019"),
		newTransactionRow(assets.ReceiveIcon,"0.0000004 DCR",
			"0.0000004 DCR", "yourself", "confirmed", "08-11-2019"),
		newTransactionRow(assets.SendIcon,"0.0000004 DCR",
			"0.0000004 DCR", "yourself", "confirmed", "08-11-2019"),
		newTransactionRow(assets.SendIcon,"0.0000004 DCR",
			"0.0000004 DCR", "yourself", "confirmed", "08-11-2019"),
	)

	return widget.NewVBox(
		table.Result,
		fyne.NewContainerWithLayout(layout.NewHBoxLayout(),
			layout.NewSpacer(),
			widgets.NewClickableBox(
				widget.NewHBox(widget.NewLabelWithStyle("see all", fyne.TextAlignCenter, fyne.TextStyle{Italic:true})),
				func(){
					// todo
				},
			),
			layout.NewSpacer(),
		),
	)
}

func blockStatusBox() fyne.CanvasObject {
	top := fyne.NewContainerWithLayout(layout.NewFixedGridLayout(fyne.NewSize(515, 24)),
				widget.NewHBox(
				widgets.NewSmallText("Syncing...", color.Black),
				layout.NewSpacer(),
				widget.NewButton("Cancel", func(){}),
				))
	progressBar := fyne.NewContainerWithLayout(layout.NewFixedGridLayout(fyne.NewSize(515, 20)),
			widget.NewProgressBar(),
			)
	timeLeft := widget.NewLabelWithStyle("6 min left", fyne.TextAlignLeading, fyne.TextStyle{Italic:true})
	connectedPeers := widget.NewLabelWithStyle("Connected peers count  6", fyne.TextAlignTrailing, fyne.TextStyle{Italic:true})
	syncSteps := widget.NewLabelWithStyle("Step 1/3", fyne.TextAlignTrailing, fyne.TextStyle{Italic:true})
	blockHeadersStatus := widget.NewLabelWithStyle("Fetching block headers  89%", fyne.TextAlignTrailing, fyne.TextStyle{Italic:true})
	syncDuration := fyne.NewContainerWithLayout(layout.NewBorderLayout(nil, nil, timeLeft, connectedPeers),
		timeLeft, connectedPeers)
	syncStatus := fyne.NewContainerWithLayout(layout.NewBorderLayout(nil, nil, syncSteps, blockHeadersStatus),
		syncSteps, blockHeadersStatus)

	bottom := fyne.NewContainerWithLayout(layout.NewGridLayout(2),
		walletSyncBox("Default", "waiting for other wallets", "6000 of 164864", "220 days behind"),
		walletSyncBox("Wallet 2", "Syncing", "100 of 164864", "320 days behind"),
		)

	return fyne.NewContainerWithLayout(layout.NewVBoxLayout(),
		widgets.NewVSpacer(5),
		top,
		progressBar,
		syncDuration,
		syncStatus,
		widgets.NewVSpacer(15),
		bottom,
		)
}

func walletSyncBox (name, status, headerFetched, progress string) fyne.CanvasObject {
	blackColor := color.Black
	nameText := widgets.NewTextWithSize(name, blackColor, 12)
	statusText := widgets.NewTextWithSize(status, blackColor, 10)
	headerFetchedTitleText := widgets.NewTextWithSize("Block header fetched", blackColor, 12)
	headerFetchedText := widgets.NewTextWithSize(headerFetched, blackColor, 10)
	progressTitleText := widgets.NewTextWithSize("Syncing progress", blackColor, 12)
	progressText := widgets.NewTextWithSize(progress, blackColor, 10)
	top := fyne.NewContainerWithLayout(layout.NewHBoxLayout(),
		widgets.NewHSpacer(2),
		nameText, layout.NewSpacer(),
		statusText,
		widgets.NewHSpacer(2))
	middle := fyne.NewContainerWithLayout(layout.NewHBoxLayout(),
		widgets.NewHSpacer(2),
		headerFetchedTitleText,
		layout.NewSpacer(),
		headerFetchedText,
		widgets.NewHSpacer(2),
		)
	bottom := fyne.NewContainerWithLayout(layout.NewHBoxLayout(),
		widgets.NewHSpacer(2),
		progressTitleText,
		layout.NewSpacer(),
		progressText,
		widgets.NewHSpacer(2),
		)
	background := canvas.NewRectangle(color.RGBA{0, 0, 0, 7})
	background.SetMinSize(fyne.NewSize(250, 70))
	walletSyncContent := fyne.NewContainerWithLayout(layout.NewFixedGridLayout(fyne.NewSize(250, 70)),
		fyne.NewContainerWithLayout(layout.NewVBoxLayout(), top, layout.NewSpacer(), middle, layout.NewSpacer(), bottom),
	)

	return fyne.NewContainerWithLayout(layout.NewFixedGridLayout(fyne.NewSize(250, 70)),
			fyne.NewContainerWithLayout(layout.NewBorderLayout(nil, nil, nil, nil,),
				background,
				walletSyncContent,
				),
	)
}

func newTransactionRow(transactionType, amount, fee, direction, status, date string) *widget.Box {
	icons, _ := assets.GetIcons(assets.ReceiveIcon, assets.SendIcon)
	icon := canvas.NewImageFromResource(icons[transactionType])
	// spacer := widgets.NewHSpacer(10)
	icon.SetMinSize(fyne.NewSize(5, 20))
	iconBox := widget.NewVBox(widgets.NewVSpacer(4), icon)
	amountLabel := widget.NewLabel(amount)
	feeLabel := widget.NewLabel(fee)
	dateLabel := widget.NewLabel(date)
	statusLabel := widget.NewLabel(status)
	directionLabel := widget.NewLabel(direction)
	column := widget.NewHBox(iconBox, amountLabel, feeLabel, directionLabel, statusLabel,  dateLabel)
	return column
}

func transactionRowHeader() *widget.Box {
	hash := widget.NewLabelWithStyle("#", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})
	amount := widget.NewLabelWithStyle("amount", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})
	fee := widget.NewLabelWithStyle("fee", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})
	direction := widget.NewLabelWithStyle("direction", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})
	status := widget.NewLabelWithStyle("status", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})
	date := widget.NewLabelWithStyle("date", fyne.TextAlignCenter, fyne.TextStyle{Bold: true})
	return widget.NewHBox(hash, amount, fee, direction, status, date)
}