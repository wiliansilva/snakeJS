const Structure = function(numberRows, numberColumns) {
    this.structureArray = [];
    this.numberRows = numberRows;
    this.numberColumns = numberColumns;

    this.createDataStructure();
    this.setLimits();
}

Structure.prototype = (function() {
	'use strict';
    const createDataStructure = function() {
        const numberOfCells = this.numberRows * this.numberColumns;
        for (let i = 0; i < numberOfCells; i++) {
            this.structureArray[i] = {
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
            if (thisObj.structureArray[pixelIndex]) {
                thisObj.structureArray[pixelIndex].islimit = true;
            }
        },
        top: function(thisObj, row) {
            const pixelIndex =  row;
            if (thisObj.structureArray[pixelIndex]) {
                thisObj.structureArray[pixelIndex].islimit = true;
            }
        },
        left: function(thisObj, row) {
            const pixelIndex =  row * thisObj.numberRows;
            if (thisObj.structureArray[pixelIndex]) {
                thisObj.structureArray[pixelIndex].islimit = true;
            }
        },
        right: function(thisObj, row) {
            const firstPixel =  row * thisObj.numberRows;        
            const pixelIndex =  firstPixel + (thisObj.numberRows - 1);
            if (thisObj.structureArray[pixelIndex]) {
                thisObj.structureArray[pixelIndex].islimit = true;
            }
        }
    };

    const setLimits = function() {   
        for (let row = 0; row <= this.numberRows; row++) { 
            limits.top(this, row);
            limits.bottom(this, row);
            limits.right(this, row);
            limits.left(this, row);
        }
    };

    const setPosition = function(currentPixelIndex,path) {
        const fistCell = path.shift()
        this.structureArray[fistCell].value = 0;
        path.push(currentPixelIndex)
        for (let cell of path) {
            this.structureArray[cell].value = 1;
        }
    };

	return {
        createDataStructure:createDataStructure,
        setLimits:setLimits,
        setPosition:setPosition
	};
 
}());