const snakeJS = snakeJS || {};
snakeJS.Scenario = (function() {
	'use strict';
 
	function create() {
        createDataStrecture();
    }

    function createDataStrecture() {
        const numberOfPixels = fireWidth * fireHeight;
        for (let i = 0; i < numberOfPixels; i++) {
            pixelsArray[i] = {
                value: 0,
                islimit: false
            }
        }
        createAreaLimits.top();
        createAreaLimits.bottom();
        createAreaLimits.right();
        createAreaLimits.left();
    }

    const createAreaLimits = {
        bottom: () => {
            for (let column = 0; column <= fireWidth; column++) {
                const overflowPixelIndex = fireWidth * fireHeight;
                const lastPixelOfFirstColumn = (overflowPixelIndex - fireWidth);
                const pixelIndex = lastPixelOfFirstColumn + column;
                if (pixelsArray[pixelIndex]) {
                    pixelsArray[pixelIndex].islimit = true;
                }
            }
        },
        top: () => {
            for (let column = 0; column <= fireWidth; column++) {
                const pixelIndex =  column;
                if (pixelsArray[pixelIndex]) {
                    pixelsArray[pixelIndex].islimit = true;
                }
            }
        },
        left: () => {
            for (let row = 0; row <= fireWidth; row++) {
                const pixelIndex =  row * fireWidth;
                if (pixelsArray[pixelIndex]) {
                    pixelsArray[pixelIndex].islimit = true;
                }
            }
        },
        right: () => {
            for (let row = 0; row <= fireWidth; row++) {
                const firstPixol =  row * fireWidth;        
                const pixelIndex =  firstPixol + (fireWidth - 1);
                if (pixelsArray[pixelIndex]) {
                    pixelsArray[pixelIndex].islimit = true;
                }
            }
        }
    }
 
	return {
		create:create
	};
 
}());