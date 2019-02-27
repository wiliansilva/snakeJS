
const Snake = function (currentPixelIndex, sizeInPixels) {
    this.currentPixelIndex = currentPixelIndex
    this.sizeInPixels = sizeInPixels;
    this.path = [34,35,36];
    this.currentDirection = 'right';
    this.setPosition();
};

Snake.prototype = (function() {
    'use strict';
    const structure = new Structure(10,10);
    const setPosition = function() {
        const fistPixel = this.path.shift()
        this.path.push(this.currentPixelIndex)
        for (let pixel of this.path) {
            structure.structureArray[pixel].value = 1;
        }
        structure.structureArray[fistPixel].value = 0;
    };
    
   const move = function(newPositionIndex)  {  
        if (pixelsArray[newPositionIndex].value || pixelsArray[newPositionIndex].islimit ) {
            return;
        }  
        this.currentPixelIndex = newPositionIndex;
        this.setDataPosition();
        renderGame();
    }

    const toLeft = function() { 
        this.direction = 'left';
        const newPositionIndex = snake.currentPixelIndex - 1;
        move(newPositionIndex);
    }

    const toRight = function() {
        this.direction = 'right';
        const newPositionIndex = snake.currentPixelIndex + 1;
        move(newPositionIndex);
    }

    const toDown = function() {
        this.direction = 'down';
        const newPositionIndex = snake.currentPixelIndex + fireWidth;
        move(newPositionIndex);
    }

    const toUp = function() {
        this.direction = 'up';
        const newPositionIndex = snake.currentPixelIndex - fireWidth; 
        move(newPositionIndex);
    }

    return {
        setPosition:setPosition,
        toLeft: toLeft,
        toRight: toRight,
        toUp: toUp,
        toDown: toDown
    }
}());