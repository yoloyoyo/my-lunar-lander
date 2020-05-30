namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ay = gravity
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 f 9 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . d . 9 9 9 9 9 . d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d . . d d d . . d . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles23, function (sprite, location) {
    land(1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = 0 - thrust
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 f 9 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . d . 9 9 9 9 9 . d . . . 
. . . . d d 9 9 9 9 9 d d 4 . . 
. . . . d d 9 9 9 9 9 d d 2 4 . 
. . . . d d 9 9 9 9 9 d d 4 . . 
. . . . d . . d d d . . d . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles22, function (sprite, location) {
    land(1)
})
function land (multiplier: number) {
    if (mySprite.vy > 10) {
        game.over(false, effects.splatter)
    } else {
        info.setScore(multiplier * fuel)
        game.over(true, effects.smiles)
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = idle
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 f 9 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . d . 9 9 9 9 9 . d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d . . d d d . . d . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles21, function (sprite, location) {
    land(1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ax = thrust
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 f 9 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . d . 9 9 9 9 9 . d . . . 
. . . 4 d d 9 9 9 9 9 d d . . . 
. . 4 2 d d 9 9 9 9 9 d d . . . 
. . . 4 d d 9 9 9 9 9 d d . . . 
. . . . d . . d d d . . d . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.ax = idle
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 f 9 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . d . 9 9 9 9 9 . d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d . . d d d . . d . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    land(3)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.saplingPine, function (sprite, location) {
    land(6)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardWater, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay = gravity - thrust
    mySprite.setImage(img`
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 f 9 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . d . 9 9 9 9 9 . d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d . . d d d . . d . . . 
. . . . . . d d d d d . . . . . 
. . . . . . 5 4 2 4 5 . . . . . 
. . . . . . . 5 4 5 . . . . . . 
. . . . . . . . 5 . . . . . . . 
`)
})
let mySprite: Sprite = null
let fuel = 0
let gravity = 0
let idle = 0
let thrust = 0
thrust = 10
idle = 0
gravity = 4
fuel = 1000
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . 9 . . . . . . . 
. . . . . . . 9 9 9 . . . . . . 
. . . . . . 9 9 f 9 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 f f 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . . . 9 9 9 9 9 . . . . . 
. . . . d . 9 9 9 9 9 . d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d d 9 9 9 9 9 d d . . . 
. . . . d . . d d d . . d . . . 
. . . . . . d d d d d . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mySprite.ay = gravity
tiles.setTilemap(tiles.createTilemap(
            hex`1800100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000d0e000000000000000000000000000000000000000000000d0300000000000000090000000000000d020d00000000000d020d0000000000080203000000000d04040d0000000008020203000000000d0202020d00000d0204040d0d020d00080202020d000d020704020202020d02020606060404020a02020202020a0202070406060606060606060606060606060606060c0c0c0c0c0c0c0c060606060606`,
            img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.forestTiles26,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles24,sprites.builtin.forestTiles29,sprites.builtin.forestTiles25,sprites.builtin.forestTiles20,sprites.builtin.forestTiles21,sprites.castle.saplingPine,sprites.dungeon.hazardWater,sprites.builtin.forestTiles27,sprites.builtin.forestTiles28,sprites.dungeon.hazardLava0,sprites.dungeon.collectibleInsignia,sprites.dungeon.collectibleBlueCrystal],
            TileScale.Sixteen
        ))
scene.cameraFollowSprite(mySprite)
effects.starField.startScreenEffect()
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
game.onUpdate(function () {
    if (controller.left.isPressed() || (controller.right.isPressed() || controller.up.isPressed())) {
        fuel += -1
    }
    console.log(fuel)
})
