const spawnLocation = () => {

    let rows = width / tileSize
    let cols = heigh / tileSize

    let xPos, yPos

    xPos = Math.floor(Math.random() * rows) * tileSize
    yPos = Math.floor(Math.random() * cols) * tileSize

    return { x: xPos, y: yPos }

}