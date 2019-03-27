
const Controls = function () {
    console.log(this)
    window.addEventListener("keydown",this.getKeyPressed.bind(this));
};

Controls.prototype = (function() {
   'use strict';
   const getKeyPressed = function(keyPressed) { 
        if (keyPressed.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        switch (keyPressed.key) {
            case "ArrowDown":
                if(this.snake.currentDirection === 'up') {
                    return;
                }
                this.snake.toDown(this.structure.numberRows);
                this.structure.setPosition(this.snake.currentPixelIndex, this.snake.path);
                this.render()
                break;
            case "ArrowUp":
                if(this.snake.currentDirection === 'down') {
                    return;
                }
                this.snake.toUp(this.structure.numberRows);
                this.structure.setPosition(this.snake.currentPixelIndex, this.snake.path);
                this.render()
                break;
            case "ArrowLeft":
                if(this.snake.currentDirection === 'right') {
                    return;
                }
                this.snake.toLeft(); 
                this.structure.setPosition(this.snake.currentPixelIndex, this.snake.path);
                this.render()
                break;
            case "ArrowRight":
                if(this.snake.currentDirection === 'left') {
                    return;
                }
                this.snake.toRight();
                this.structure.setPosition(this.snake.currentPixelIndex, this.snake.path);
                this.render()
                break;
            default:
                return; 
        }
        event.preventDefault();
    };

    return {
        getKeyPressed: getKeyPressed 
    }
}());