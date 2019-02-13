'use strict'
var isMouseDown = false;

function init() {
    gCanvas = document.querySelector('#sarelDvir');
    gCdraw = gCanvas.getContext('2d');
}

function canvasClicked(ev) {
   if (gUserPrefs.isSaved === true) {
       isMouseDown = true;
   } else {
    gCdraw.font = '15px serif';
    gCdraw.fillText('You got to save your prefrences before you draw', 10, 50);
   }
    

}

function mouseMove(ev) {
    // console.log(ev);
    // chooseFavColor(ev);
    if (isMouseDown && ev.buttons === 1) {
        gCdraw.fillStyle = gUserPrefs.strokeColor;

        if (gUserPrefs.shape === "rect") {
            gCdraw.fillRect(ev.offsetX, ev.offsetY, 100, 100);
        }
        if (gUserPrefs.shape === "circle") {
            gCdraw.arc(ev.offsetX, ev.offsetY, 100, 100);
        }
        if (gUserPrefs.shape === "triangle") {
            gCdraw.beginPath();
            gCdraw.moveTo(ev.layerX, ev.layerY);
            gCdraw.lineTo(100, 75);
            gCdraw.lineTo(100, 25);
            gCdraw.fill();
        }

    }
}

function downloadCanvas(elLink) {
    elLink.href = gCanvas.toDataURL()
    elLink.download = 'my-canvas.jpg'
}

function onSave(ev) {
    ev.preventDefault();
    var isSaved = true;
    var colorChoosen = document.querySelector('#fav-color').value
    var BgColorChoosen = document.querySelector('#bg-color').value
    var shape = document.querySelector('.shape').value

    //set background color
    gCdraw.fillStyle = BgColorChoosen;
    gCdraw.fillRect(0, 0, gCanvas.width, gCanvas.height)
   createUserPrefs(colorChoosen, BgColorChoosen, shape, isSaved);
}

function onClear() {
    gUserPrefs.isSaved = false;
    // gUserPrefs = '';
}