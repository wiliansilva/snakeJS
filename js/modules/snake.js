
const Snake = function (currentPixelIndex, sizeInPixels) {
    this.currentPixelIndex = currentPixelIndex
    this.sizeInPixels = sizeInPixels;
    this.path = [34,35,36];
    this.currentDirection = 'right';
    this.extend(Snake,Structure);
    this.setPosition();

};

Snake.prototype = (function() {
   'use strict';
   const move = function(newPositionIndex)  {  
        if (pixelsArray[newPositionIndex].value || pixelsArray[newPositionIndex].islimit ) {
            return;
        }  
        this.currentPixelIndex = newPositionIndex;
        this.setPosition();
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
        toLeft: toLeft,
        toRight: toRight,
        toUp: toUp,
        toDown: toDown
    }
}());

Snake.prototype.extend = function(obj1, obj2) {
    return (function(object) {
        for (var property in object.prototype) {
            this.prototype[property] = object.prototype[property];
        }
        return this;
    }).apply(obj1, [obj2]);
};