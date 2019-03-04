
const Game = function () {
    this.structure = new Structure(10, 10);
    this.snake = new Snake(this.structure);

    this.render()
};

Game.prototype = (function() {
    'use strict';
   

    const render = function() {
        const debug = true;
        let html = "<table>";
        for (let row = 0; row < this.structure.numberColumns; row++) {
            html += "<tr>";
            for (let column = 0; column < this.structure.numberRows; column++) {
                const pixelIndex = column + (this.structure.numberRows * row);
                const fireIntensity = this.structure.structureArray[pixelIndex].value
                if (!fireIntensity) {
                    html += "<td>";
                    html += `<div class="pixel-index">${pixelIndex}</div>`;
                    html += fireIntensity;
                    html += "</td>";
                } else {
                    html += `<td class="pixel" style="background:#F00" ></td>`;
                }
            }
            html += "</tr>";
        }
        html += "</table>";

        document.querySelector('.fireCanvas').innerHTML = html;
    }

    return {
        render:render
    }
}());

