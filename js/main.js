
// 'use strict';
const pixelsArray = [];
const fireWidth = 10;
const fireHeight = 10;

var snake = null;
const { log } = console;
function start() {
    setEvents()
    createDataStrecture();
    snake = new Snake(5, 3);
    renderGame();
}

function setEvents() {
    window.addEventListener('keydown',getKeyPressed)
}

function createDataStrecture() {
    const numberOfPixels = fireWidth * fireHeight;
    for (let i = 0; i < numberOfPixels; i++) {
        pixelsArray[i] = {
            value: 0,
            islimit: false
        }
    }
    createTopLimit();
    createLeftLimit();
    createRightLimit();
    createBottomLimit();
}

function Snake() {
    this.currentPixelIndex = 37
    this.sizeInPixels = 3;
    this.path = [32,33,34,35,36]

    this.setDataPosition()
}

Snake.prototype.setDataPosition = function() {
    const fistPixel = this.path.shift()
    this.path.push(this.currentPixelIndex)
    for (let pixel of this.path) {
        pixelsArray[pixel].value = 1;
    }
    pixelsArray[fistPixel].value = 0;
};

Snake.prototype.move = function(newPositionIndex) {
    
    if (pixelsArray[newPositionIndex].islimit) {
        return
    }
    this.currentPixelIndex = newPositionIndex;
    this.setDataPosition();
    renderGame();
}

Snake.prototype.toLeft = function() {
    const newPositionIndex = snake.currentPixelIndex - 1;
    this.move(newPositionIndex);
}

Snake.prototype.toRight = function() {
    const newPositionIndex = snake.currentPixelIndex + 1;
    this.move(newPositionIndex);
}

Snake.prototype.toDown = function() {
    const newPositionIndex = snake.currentPixelIndex + fireWidth;
    this.move(newPositionIndex);
}

Snake.prototype.toUp = function() {
    const newPositionIndex = snake.currentPixelIndex - fireWidth; 
    this.move(newPositionIndex);
}

function getKeyPressed(keyPressed) { 
    if (keyPressed.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }

    switch (keyPressed.key) {
        case "ArrowDown":
            snake.toDown();
            break;
        case "ArrowUp":
            snake.toUp();
            break;
        case "ArrowLeft":
            snake.toLeft();
            break;
        case "ArrowRight":
            snake.toRight();
            break;
        default:
            return; 
    }
    event.preventDefault();
}

function renderGame() {
    const debug = true;
    let html = "<table>";
    for (let row = 0; row < fireHeight; row++) {
        html += "<tr>";
        for (let column = 0; column < fireWidth; column++) {
            const pixelIndex = column + (fireWidth * row);
            const fireIntensity = pixelsArray[pixelIndex].value
            if (!fireIntensity) {
                html += "<td>";
                html += `<div class="pixel-index">${pixelIndex}</div>`;
                html += fireIntensity;
                html += "</td>";
            } else {
                html += `<td class="pixel" style="background:#F00" ></td>`;
            }
        }
        html += "</tr>";
    }
    html += "</table>";

    document.querySelector('.fireCanvas').innerHTML = html;
}

function createBottomLimit() {
    for (let column = 0; column <= fireWidth; column++) {
        const overflowPixelIndex = fireWidth * fireHeight;
        const lastPixelOfFirstColumn = (overflowPixelIndex - fireWidth);
        const pixelIndex = lastPixelOfFirstColumn + column;
        if (pixelsArray[pixelIndex]) {
            pixelsArray[pixelIndex].islimit = true;
        }
    }
}

function createTopLimit() {
    for (let column = 0; column <= fireWidth; column++) {
        const pixelIndex =  column;
        if (pixelsArray[pixelIndex]) {
            pixelsArray[pixelIndex].islimit = true;
        }
    }
}

function createLeftLimit() {
    for (let row = 0; row <= fireWidth; row++) {
        const pixelIndex =  row * fireWidth;
        if (pixelsArray[pixelIndex]) {
            pixelsArray[pixelIndex].islimit = true;
        }
    }
}

function createRightLimit() {
    for (let row = 0; row <= fireWidth; row++) {
        const firstPixol =  row * fireWidth;        
        const pixelIndex =  firstPixol + (fireWidth - 1);
        if (pixelsArray[pixelIndex]) {
            pixelsArray[pixelIndex].islimit = true;
        }
    }
}


start();