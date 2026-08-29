info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
    Namor.setPosition(148, 2)
})
let Namor: Sprite = null
scene.setBackgroundImage(assets.image`wakanda`)
let Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri, 100, 100)
Shuri.setStayInScreen(true)
Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.setPosition(148, 2)
info.startCountdown(30)
Namor.follow(Shuri, 50)
