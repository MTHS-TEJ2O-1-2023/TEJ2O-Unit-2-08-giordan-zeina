/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Giordan Zeina
 * Created on: OCT 2023
 * This program when the user clicks the "A" button, the Micro:bit powers on a single RGB LED on a breadboard and scrolls through the colors it can produce
*/

basic.clearScreen()
pins.digitalWritePin(DigitalPin.P13,0)
pins.digitalWritePin(DigitalPin.P14,0)
pins.digitalWritePin(DigitalPin.P15,0)
basic.showIcon(IconNames.Happy)
basic.clearScreen()

input.onButtonPressed(Button.A, function() {
  basic.showString("Red")
  pins.digitalWritePin(DigitalPin.P13,1)
  basic.pause(1000)
  basic.showString("Blue")
  pins.digitalWritePin(DigitalPin.P13,0)
  pins.digitalWritePin(DigitalPin.P14,1)
  basic.pause(1000)
  basic.showString("Green")
  pins.digitalWritePin(DigitalPin.P14,1)
  pins.digitalWritePin(DigitalPin.P15,1)
  basic.pause(1000)
  basic.showString("Magenta")
  pins.digitalWritePin(DigitalPin.P13, 0)
  pins.digitalWritePin(DigitalPin.P13,1)
  basic.pause(1000)
  basic.showString("Yellow")
  pins.digitalWritePin(DigitalPin.P13,0)
  pins.digitalWritePin(DigitalPin.P15,1)
  basic.pause(1000)
  basic.showString("Cyan")
  pins.digitalWritePin(DigitalPin.P14,1)
  basic.pause(1000)
  basic.showString("White")
  pins.digitalWritePin(DigitalPin.P13,1)
})