'use strict'
var isMouseDown = false;

function init() {
    gCanvas = document.querySelector('#sarelDvir');
    gCdraw = gCanvas.getContext('2d');
}

function canvasClicked(ev) {
    // console.log(gCdraw.strokeStyle);
    // console.log("work");
    isMouseDown = true;
    // console.log(ev);

}

function mouseMove(ev) {
    // console.log(ev);
    chooseFavColor(ev);
    if (isMouseDown) {
        gCdraw.stroke()
        gCdraw.fillRect(ev.offsetX, ev.offsetY, 100, 100);
    }
}

function downloadCanvas(elLink) {
    elLink.href = gCanvas.toDataURL()
    elLink.download = 'my-canvas.jpg'
}

function onSave(ev) {
    ev.preventDefault();
    var colorChoosen = document.querySelector('#fav-color').value
    var BgColorChoosen = document.querySelector('#bg-color').value
    var shape = document.querySelector('.shape').value
    // colorChoosen.addEventListener("change", chooseFavColor, false)

   createUserPrefs(colorChoosen, BgColorChoosen, shape);
}