input.onButtonPressed(Button.A, function () {
    radio.sendString("1")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
	
})
