radio.onReceivedValue(function (name, value) {
    led.unplot(4, 4)
})
basic.forever(function () {
    music.play(music.stringPlayable("G E A C G C E C ", 129), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # #
        # # # # #
        . # # # #
        . # # # .
        `)
    music.play(music.stringPlayable("C5 B A G F E G C5 ", 129), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # # .
        # . . . #
        # . . . #
        # . . . .
        # . . . #
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . # . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # . .
        # . # . .
        # . . . .
        # . . . .
        # # # . .
        `)
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        music.play(music.stringPlayable("C5 B A G F E B C5 ", 120), music.PlaybackMode.UntilDone)
    }
})
