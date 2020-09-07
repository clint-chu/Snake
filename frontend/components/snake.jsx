const { createContext } = require("react")

const Snake = (pos, color) => {

    x = pos.x
    y = pos.y

    tail = [{ x: pos.x - tileSize, y: pos.y }, { x: pos.x = tileSize * 2, y: pos.y }]
    velX = 1
    velY = 0
    color = color

    const draw = () => {
        
        ctx.beginPath()
        ctx.rect(x, y, tileSize, tileSize)
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.closePath()

        for (let i = 0; i < tail.length; i++) {

            ctx.beginPath()
            ctx.rect(tail[i].x, tail[i].y, tileSize, tileSize)
            ctx.filleStyle = color
            ctx.fill()
            ctx.strokeStyle ="black"
            ctx.lineWidth = 3
            ctx.stroke()
            ctx.closePath()

        }
    }

    const move = () => {
        
    }

}