namespace SpriteKind {
    export const fridge = SpriteKind.create()
}
function placeFridge () {
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
let fridge4: Sprite = null
let fridge3: Sprite = null
let fridge2: Sprite = null
let fridge1: Sprite = null
namespace fridge {
    //% block
    export function zone3_fridge(){
        placeFridge()
    }
}
