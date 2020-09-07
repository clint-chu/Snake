const { createContext } = require("react")
const { default: food } = require("./food")

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

        for (let i = tail.length - 1; i > 0; i--) {
            tail[i] = tail[i-1]
        }

        if (tail.length != 0) 
            tail[0] = { x: x, y: y }

        x += velX * tileSize
        y += velY * tileSize

    }

    const dir = (dirX, dirY) => {

        velX = dirX
        velY = dirY

    }

    const eat = () => {

        if (Math.abs(x - food.x) < tileSize && Math.abs(y - food.y) < tileSize) {
            tail.push({})
            return true
        }

    }

    const die = () => {

        for (let i = 0; i < tail.length; i++) {
            if (Math.abs(x - tail[i].x) < tileSize && Math.abs(y - tail[i].y) < tileSize) {
                return true
            }
        }

        return false
    }

    const border = () => {
        if (x + tileSize > width && velX != -1 || x < 0 && velX !=1) {
            x = width - x
        } else if (y + tileSize > height && velY != -1 ||  velY ~= 1 && y < 0) {
            y = height - y
        }
    }

}