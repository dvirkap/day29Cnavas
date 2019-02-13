var gCanvas;
var gCdraw;

function init() {
    gCanvas = document.querySelector('#sarelDvir');
    gCdraw = gCanvas.getContext('2d');
}

function canvasClicked(ev) {
    console.log("work");
    console.log(ev);
}