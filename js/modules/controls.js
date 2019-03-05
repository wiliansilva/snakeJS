
const Controls = function () {
    console.log(this.bodyGame)
    
    this.bodyGame.addEventListener("keydown",this.getKeyPressed);
};

Controls.prototype = (function() {
   'use strict';
   const getKeyPressed = function(keyPressed) { 
        if (keyPressed.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }
        console.log(this)
        switch (keyPressed.key) {
            case "ArrowDown":
                if(this.snake.direction === 'up') {
                    return;
                }
                this.snake.toDown();
                break;
            case "ArrowUp":
                if(this.snake.direction === 'down') {
                    return;
                }
                this.snake.toUp();
                break;
            case "ArrowLeft":
                if(this.snake.direction === 'right') {
                    return;
                }
                this.snake.toLeft();
                break;
            case "ArrowRight":
                if(snake.direction === 'left') {
                    return;
                }
                this.snake.toRight();
                break;
            default:
                return; 
        }
        event.preventDefault();
    }

    return {
        getKeyPressed: getKeyPressed 
    }
}());

