var Strecture = function(width, height) {
    this.pixelsArray = [];
    this.width = width;
    this.height = height;

    this.createDataPixel();
    this.createLimits();
}

Strecture.prototype = (function() {
	// 'use strict';
    const createDataPixel = function() {
        const numberOfPixels = this.width * this.height;
        for (let i = 0; i < numberOfPixels; i++) {
            this.pixelsArray[i] = {
                value: 0,
                islimit: false
            }
        }
    };
    
    const limits = {
        bottom: function(thisObj) {
            for (let column = 0; column <= thisObj.width; column++) {
                const overflowPixelIndex = thisObj.width * thisObj.height;
                const lastPixelOfFirstColumn = (overflowPixelIndex - thisObj.width);
                const pixelIndex = lastPixelOfFirstColumn + column;
                if (thisObj.pixelsArray[pixelIndex]) {
                    thisObj.pixelsArray[pixelIndex].islimit = true;
                }
            }
        },
        top: function(thisObj) {
            for (let column = 0; column <= thisObj.width; column++) {
                const pixelIndex =  column;
                if (thisObj.pixelsArray[pixelIndex]) {
                    thisObj.pixelsArray[pixelIndex].islimit = true;
                }
            }
        },
        left: function(thisObj) {
            for (let row = 0; row <= thisObj.width; row++) {
                const pixelIndex =  row * thisObj.width;
                if (thisObj.pixelsArray[pixelIndex]) {
                    thisObj.pixelsArray[pixelIndex].islimit = true;
                }
            }
        },
        right: function(thisObj) {
            for (let row = 0; row <= thisObj.width; row++) {
                const firstPixol =  row * thisObj.width;        
                const pixelIndex =  firstPixol + (thisObj.width - 1);
                if (thisObj.pixelsArray[pixelIndex]) {
                    thisObj.pixelsArray[pixelIndex].islimit = true;
                }
            }
        }
    };

    const createAreaLimits = function() {    
        this.limits.top(this);
        this.limits.bottom(this);
        this.limits.right(this);
        this.limits.left(this);
    };

	return {
        createDataPixel:createDataPixel,
        createLimits:createLimits,
        limits:limits
	};
 
}());