
const Snake = function () {
    this.currentPixelIndex = 37
    this.path = [34,35,36];
    this.currentDirection = 'right';
};

Snake.prototype = (function() {
   'use strict';
       
    const toLeft = function() { 
        this.currentDirection = 'left';
        const newPositionIndex = this.currentPixelIndex - 1;
        this.currentPixelIndex = newPositionIndex;
    }

    const toRight = function() {
        this.currentDirection = 'right';
        const newPositionIndex = this.currentPixelIndex + 1;
        this.currentPixelIndex = newPositionIndex;
    }

    const toDown = function(numberRows) {
        this.currentDirection = 'down';
        const newPositionIndex = this.currentPixelIndex + numberRows;
        this.currentPixelIndex = newPositionIndex;
    }

    const toUp = function(numberRows) {
        this.currentDirection = 'up';
        const newPositionIndex = this.currentPixelIndex - numberRows;
        this.currentPixelIndex = newPositionIndex;
    }

    return {
        toLeft: toLeft,
        toRight: toRight,
        toUp: toUp,
        toDown: toDown
    }
}());

