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
        gCdraw.fillRect(ev.offsetX, ev.offsetY, 100, 100);
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
    // colorChoosen.addEventListener("change", chooseFavColor, false)
    gCdraw.fillStyle = BgColorChoosen;
    gCdraw.fillRect(0, 0, gCanvas.width, gCanvas.height)
   createUserPrefs(colorChoosen, BgColorChoosen, shape, isSaved);
   //set background color
}

function onClear() {
    gUserPrefs.isSaved = false;
    // gUserPrefs = '';
}