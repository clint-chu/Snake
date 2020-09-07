import Food from "./components/food"

let width;
let height;
let tileSize;
let canvas;
let ctx;

// Initialize board and objects
const board = () => {

    tilesize = 20

    width =tileSize * Math.floow(window.innerWidth / tileSize)
    height = tileSize * Math.floow(window.innerHeight / tileSize)

    canvas = document.getElementById("game-area")
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext("2d")

    food = new Food(spawnLocation(), "red")

}