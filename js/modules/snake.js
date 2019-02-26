
const Snake = function (currentPixelIndex, sizeInPixels) {
    this.currentPixelIndex = currentPixelIndex
    this.sizeInPixels = sizeInPixels;
    this.path = [34,35,36];
    this.currentDirection = 'right';
    // this.setDataPosition();
};

Snake.prototype = (function() {
    'use strict';
    const setPosition = function() {
        const fistPixel = this.path.shift()
        this.path.push(this.currentPixelIndex)
        for (let pixel of this.path) {
            pixelsArray[pixel].value = 1;
        }
        pixelsArray[fistPixel].value = 0;
    };

    return {
        setPosition:setPosition
    }
}());