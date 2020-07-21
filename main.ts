namespace SpriteKind {
    export const fridge = SpriteKind.create()
}
function placeFridgeZone3 () {
    fridge1 = sprites.create(img`
        . . d d d d d d d d d d d d d d
        . . d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d d d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 b b b b b b b b b b b b b b
        d b b b b b b b b b b b b b b b
        d b d d d d d d d d d d d d d d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge1, tiles.getTileLocation(19, 0))
    fridge2 = sprites.create(img`
        d d d d d d d d d d d d d d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d d d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        b b b b b b b b b b b b b b 1 d
        b b b b b b b b b b b b b b b d
        d d d d d d d d d d d d d d b d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge2, tiles.getTileLocation(20, 0))
    fridge3 = sprites.create(img`
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b d d d d d d d d d d d d d d
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge3, tiles.getTileLocation(19, 1))
    fridge4 = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        d d d d d d d d d d d d d d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        f f f f f f f f f f f f f f b f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge4, tiles.getTileLocation(20, 1))
}
function placeFridgeZone1 () {
    fridge1 = sprites.create(img`
        . . d d d d d d d d d d d d d d
        . . d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d d d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 b b b b b b b b b b b b b b
        d b b b b b b b b b b b b b b b
        d b d d d d d d d d d d d d d d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge1, tiles.getTileLocation(13, 0))
    fridge2 = sprites.create(img`
        d d d d d d d d d d d d d d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d d d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        b b b b b b b b b b b b b b 1 d
        b b b b b b b b b b b b b b b d
        d d d d d d d d d d d d d d b d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge2, tiles.getTileLocation(14, 0))
    fridge3 = sprites.create(img`
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b d d d d d d d d d d d d d d
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge3, tiles.getTileLocation(13, 1))
    fridge4 = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        d d d d d d d d d d d d d d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        f f f f f f f f f f f f f f b f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge4, tiles.getTileLocation(14, 1))
}
function placeFridgeZone2 () {
    fridge1 = sprites.create(img`
        . . d d d d d d d d d d d d d d
        . . d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d d d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 b b b b b b b b b b b b b b
        d b b b b b b b b b b b b b b b
        d b d d d d d d d d d d d d d d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge1, tiles.getTileLocation(16, 0))
    fridge2 = sprites.create(img`
        d d d d d d d d d d d d d d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d d d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        b b b b b b b b b b b b b b 1 d
        b b b b b b b b b b b b b b b d
        d d d d d d d d d d d d d d b d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge2, tiles.getTileLocation(17, 0))
    fridge3 = sprites.create(img`
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b d d d d d d d d d d d d d d
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge3, tiles.getTileLocation(16, 1))
    fridge4 = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        d d d d d d d d d d d d d d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        f f f f f f f f f f f f f f b f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge4, tiles.getTileLocation(17, 1))
}
function placeFridgeZone4() {
    fridge1 = sprites.create(img`
        . . d d d d d d d d d d d d d d
        . . d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d d d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 b b b b b b b b b b b b b b
        d b b b b b b b b b b b b b b b
        d b d d d d d d d d d d d d d d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge1, tiles.getTileLocation(19, 5))
    fridge2 = sprites.create(img`
        d d d d d d d d d d d d d d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d d d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        b b b b b b b b b b b b b b 1 d
        b b b b b b b b b b b b b b b d
        d d d d d d d d d d d d d d b d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge2, tiles.getTileLocation(20, 5))
    fridge3 = sprites.create(img`
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b d d d d d d d d d d d d d d
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge3, tiles.getTileLocation(19, 6))
    fridge4 = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        d d d d d d d d d d d d d d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        f f f f f f f f f f f f f f b f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge4, tiles.getTileLocation(20, 6))
} 
function placeFridgeZone5() {
    fridge1 = sprites.create(img`
        . . d d d d d d d d d d d d d d
        . . d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d d d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
        d 1 b b b b b b b b b b b b b b
        d b b b b b b b b b b b b b b b
        d b d d d d d d d d d d d d d d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge1, tiles.getTileLocation(19, 8))
    fridge2 = sprites.create(img`
        d d d d d d d d d d d d d d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d . .
        1 1 1 1 1 1 1 1 1 1 1 1 1 d d d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d
        b b b b b b b b b b b b b b 1 d
        b b b b b b b b b b b b b b b d
        d d d d d d d d d d d d d d b d
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge2, tiles.getTileLocation(20, 8))
    fridge3 = sprites.create(img`
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        d b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b d d d d d d d d d d d d d d
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b d 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b f 1 1 1 1 1 1 1 1 1 1 1 1 1
        f b b b b b b b b b b b b b b b
        f b f f f f f f f f f f f f f f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge3, tiles.getTileLocation(19, 9))
    fridge4 = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b d
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        d d d d d d d d d d d d d d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        1 1 1 1 1 1 1 1 1 1 1 1 1 d b f
        b b b b b b b b b b b b b b b f
        f f f f f f f f f f f f f f b f
        f f f f f f f f f f f f f f f f
    `, SpriteKind.fridge)
    tiles.placeOnTile(fridge4, tiles.getTileLocation(20, 9))
}
let fridge4: Sprite = null
let fridge3: Sprite = null
let fridge2: Sprite = null
let fridge1: Sprite = null
namespace fridge {
    //% block
    export function zone1_fridge(){
        placeFridgeZone1()
    }
    //% block
    export function zone2_fridge() {
        placeFridgeZone2()
    }
    //% block
    export function zone3_fridge() {
        placeFridgeZone3()
    }
    //% block
    export function zone4_fridge() {
        placeFridgeZone4()
    }
    //% block
    export function zone5_fridge() {
        placeFridgeZone5()
    }
}
