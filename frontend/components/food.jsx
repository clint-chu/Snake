const Food = (pos, color) => {

    const x = pos.x
    const y = pos.y
    const color = color

    const draw = () => {

        ctx.beginPath()
        ctx.rect(x, y, tileSize, tileSize)
        ctx.fillStyle = color
        ctx.fill()
        ctx.strokeStyle = "black"
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.closePath()

    }
}

export default Food