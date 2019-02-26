var Strecture = function(numberRows, numberColumns) {
    this.pixelsArray = [];
    this.numberRows = numberRows;
    this.numberColumns = numberColumns;

    this.createDataPixel();
    this.createLimits();
}

Strecture.prototype = (function() {
	// 'use strict';
    const createDataPixel = function() {
        const numberOfPixels = this.numberRows * this.numberColumns;
        for (let i = 0; i < numberOfPixels; i++) {
            this.pixelsArray[i] = {
                value: 0,
                islimit: false
            }
        }
    };
    
    const limits = {
        bottom: function(thisObj, row) {
            const overflowPixelIndex = thisObj.numberRows * thisObj.numberColumns;
            const lastPixelOfFirstColumn = (overflowPixelIndex - thisObj.numberRows);
            const pixelIndex = lastPixelOfFirstColumn + row;
            if (thisObj.pixelsArray[pixelIndex]) {
                thisObj.pixelsArray[pixelIndex].islimit = true;
            }
        },
        top: function(thisObj, row) {
            const pixelIndex =  row;
            if (thisObj.pixelsArray[pixelIndex]) {
                thisObj.pixelsArray[pixelIndex].islimit = true;
            }
        },
        left: function(thisObj, row) {
            const pixelIndex =  row * thisObj.numberRows;
            if (thisObj.pixelsArray[pixelIndex]) {
                thisObj.pixelsArray[pixelIndex].islimit = true;
            }
        },
        right: function(thisObj, row) {
            const firstPixel =  row * thisObj.numberRows;        
            const pixelIndex =  firstPixel + (thisObj.numberRows - 1);
            if (thisObj.pixelsArray[pixelIndex]) {
                thisObj.pixelsArray[pixelIndex].islimit = true;
            }
        }
    };

    const createLimits = function() {   
        for (let row = 0; row <= this.numberRows; row++) { 
            this.limits.top(this, row);
            this.limits.bottom(this, row);
            this.limits.right(this, row);
            this.limits.left(this, row);
        }
    };

	return {
        createDataPixel:createDataPixel,
        createLimits:createLimits,
        limits:limits
	};
 
}());