
const Snake = function (currentPixelIndex, sizeInPixels) {
    this.currentPixelIndex = currentPixelIndex
    this.sizeInPixels = sizeInPixels;
    this.path = [34,35,36];
    this.currentDirection = 'right';
    // this.setDataPosition();
};

Snake.prototype = function() {
    'use strict';

}