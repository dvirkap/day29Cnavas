'use strict'


function init() {
    gCanvas = document.querySelector('#sarelDvir');
    gCdraw = gCanvas.getContext('2d');
}

var colorChoosen = document.querySelector('#fav-color')
colorChoosen.addEventListener("change",chooseFavColor, false)
// console.log(colorChoosen);




function chooseFavColor(ev) {
    // console.log(ev);
    var newColor = ev.target.value;
    gCdraw.strokeStyle = newColor;
    // console.log(gCdraw.strokeStyle);
}
    
function canvasClicked(ev) {
    // console.log(gCdraw.strokeStyle);  
    // console.log("work");
    gCdraw.addEventListener("change",)
    console.log(ev);
    gCdraw.stroke()
    gCdraw.fillRect(ev.offsetX, ev.offsetY, 100, 100);

    gCdraw
}
