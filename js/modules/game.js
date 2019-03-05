
const Game = function () {
    this.structure = new Structure(10, 10);
    this.snake = new Snake(this.structure);
    this.render()
    
    this.extend(Game,Controls);
    Controls.call(this);
};

Game.prototype = (function() {
    'use strict';
   

    const render = function() {        
        const $table = document.querySelector('.fireCanvas');
        const htmlTable =  document.createElement('table');
        for (let row = 0; row < this.structure.numberColumns; row++) {
            const htmlTr =  document.createElement('tr');
            for (let column = 0; column < this.structure.numberRows; column++) {
                const pixelIndex = column + (this.structure.numberRows * row);
                const fireIntensity = this.structure.structureArray[pixelIndex].value;
                const htmlTd =  document.createElement('td');
                if (!fireIntensity) {
                    const htmlDiv =  document.createElement('div'); 
                    htmlDiv.setAttribute("class", "pixel-index");  
                    htmlDiv.appendChild(document.createTextNode(pixelIndex));  
                    htmlTd.appendChild(htmlDiv); 
                    htmlTd.appendChild(document.createTextNode(fireIntensity));      
                } else {
                    htmlTd.style.background = '#F00';
                }
                htmlTr.appendChild(htmlTd);     
            }
            htmlTable.appendChild(htmlTr);  
            
            this.bodyGame = htmlTable
        }

        $table.appendChild(htmlTable);
    }

    return {
        render:render
    }
}());

Game.prototype.extend = function(obj1, obj2) {
    return (function(object) {
        for (var property in object.prototype) {
            this.prototype[property] = object.prototype[property];
        }
        return this;
    }).apply(obj1, [obj2]);
};
