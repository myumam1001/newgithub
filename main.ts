OLED12864_I2C.init(60)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.pause(500)
    OLED12864_I2C.showNumber(
    0,
    0,
    sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    ),
    1
    )
})
