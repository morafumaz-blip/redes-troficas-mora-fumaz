controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    conejo = sprites.create(img`
        1 1 1 . . . . 1 1 1 . . . . 
        1 3 1 c . . c 1 3 1 . . . . 
        1 b 1 1 f f 1 1 b 1 . . . . 
        1 3 b 1 1 1 1 b 3 1 . . . . 
        1 b 3 1 1 1 1 3 b 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 f 1 1 1 1 f 1 1 . . . . 
        f 1 1 1 1 1 1 1 1 f . . . . 
        f f 1 1 f f 1 1 1 f f f . . 
        . f 1 1 1 1 1 1 1 c 1 1 f . 
        . f 1 1 1 1 1 1 1 c 1 1 f . 
        . f 1 1 1 1 1 1 1 1 f f . . 
        . f 1 f f f 1 f f 1 f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    conejo.setPosition(62, 42)
    conejo.ay = 50
    conejo.ax = 30
    conejo.setBounceOnWall(true)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    conejo = sprites.create(img`
        1 1 1 . . . . 1 1 1 . . . . 
        1 3 1 c . . c 1 3 1 . . . . 
        1 b 1 1 f f 1 1 b 1 . . . . 
        1 3 b 1 1 1 1 b 3 1 . . . . 
        1 b 3 1 1 1 1 3 b 1 . . . . 
        1 1 1 1 1 1 1 1 1 1 . . . . 
        1 1 f 1 1 1 1 f 1 1 . . . . 
        f 1 1 1 1 1 1 1 1 f . . . . 
        f f 1 1 f f 1 1 1 f f f . . 
        . f 1 1 1 1 1 1 1 c 1 1 f . 
        . f 1 1 1 1 1 1 1 c 1 1 f . 
        . f 1 1 1 1 1 1 1 1 f f . . 
        . f 1 f f f 1 f f 1 f . . . 
        . f f . . f f . . f f . . . 
        `, SpriteKind.Player)
    conejo.setPosition(132, 40)
    conejo.ay = 50
    conejo.ax = 30
    conejo.setBounceOnWall(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
let conejo: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
effects.clouds.startScreenEffect(1000)
let zorro = sprites.create(img`
    bbbb........bbbb.................
    c44bb......bb44b.................
    c444bb....bb444c.................
    c4b44bccccb44b4c.................
    c4bb44bccb44bb4c.................
    c43b44444444b34c.................
    c43344444444334c.................
    c44344444444344c.................
    c44444441144444c.................
    c444ff41114ff44c........bbbbbb...
    c444ff41111ff44c.......c444444bb.
    c44441111111444c......c44444444b.
    c4441111fff1144c.....c4441114444b
    c444c11fff1144bc.....c4411111444b
    c444cc111111c4bc.....c411dd11144b
    c44444bb33cc44bcc....cbddbbd1144c
    c444444b33c44444bbccccbbdbbb1144c
    c4444444bb4444444444444444bb1444c
    c444411114444444444444444444b444c
    c444111111444444444444444444444c.
    c44411111114444444444444444444cc.
    c44111111114444444444444444444c..
    c44111111111444444444444444444c..
    cb4111111111444444444444444444c..
    .f4111111111444444444444444444c..
    .ff111111111444444444444444444c..
    ..fb11111111444444444444444444c..
    ...fb1111114444444111111444444c..
    ...fbbb11114444441111111144444c..
    ....fbbfffb4444ccccccccccb4444c..
    ....fbbf..f444c.....fbbf.c4444c..
    ....fbbf..f444c.....fbbf.cc4444c.
    ....fbbf..f44c.......fbf..cc444c.
    ....fbbf..f44c.......fbbf..cc44c.
    ....fbbf..f44c.......fbbf...c44c.
    ....fbbf..f44c......fbbbf...c44c.
    ...fbbbf..f44c......ffff....cb4c.
    ...fbbf..f444c.............c444c.
    ...ffff..f44cc.............c444c.
    .........fffc..............cccc..
    `, SpriteKind.Enemy)
zorro.setPosition(26, 38)
controller.moveSprite(zorro, 100, 100)
conejo = sprites.create(img`
    1 1 1 . . . . 1 1 1 . . . . 
    1 3 1 c . . c 1 3 1 . . . . 
    1 b 1 1 f f 1 1 b 1 . . . . 
    1 3 b 1 1 1 1 b 3 1 . . . . 
    1 b 3 1 1 1 1 3 b 1 . . . . 
    1 1 1 1 1 1 1 1 1 1 . . . . 
    1 1 f 1 1 1 1 f 1 1 . . . . 
    f 1 1 1 1 1 1 1 1 f . . . . 
    f f 1 1 f f 1 1 1 f f f . . 
    . f 1 1 1 1 1 1 1 c 1 1 f . 
    . f 1 1 1 1 1 1 1 c 1 1 f . 
    . f 1 1 1 1 1 1 1 1 f f . . 
    . f 1 f f f 1 f f 1 f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
conejo.setPosition(14, 110)
conejo.ay = 50
conejo.ax = 30
conejo.setBounceOnWall(true)
