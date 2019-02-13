'use strict'
var x = 0;
var y = 0;
var isMouseDown = false;

function init() {
    gCanvas = document.querySelector('#sarelDvir');
    gCdraw = gCanvas.getContext('2d');
}

function canvasClicked(ev) {
    [x, y] = [ev.offsetX, ev.offsetY]
    if (gUserPrefs.isSaved === true) {
       isMouseDown = true;
       
   } else {
    gCdraw.font = '15px serif';
    gCdraw.fillText('You got to save your prefrences before you draw', 10, 50);
   }
    

}
function triangle() {
    gCdraw.beginPath();
    gCdraw.moveTo(75, 50);
    gCdraw.lineTo(100, 75);
    gCdraw.lineTo(100, 25);
    // gCdraw.moveTo(75, 50);
    // gCdraw.lineTo(100, 75);
    // gCdraw.lineTo(100, 25);
    gCdraw.fill();
}

function mouseMove(ev) {
    console.log(ev);
    // chooseFavColor(ev);
    if (isMouseDown && ev.buttons === 1) {
        gCdraw.fillStyle = gUserPrefs.strokeColor;
        
        if (gUserPrefs.shape === "rect") {
            gCdraw.fillRect(ev.offsetX, ev.offsetY, 100, 100);
        }
        if (gUserPrefs.shape === "circle") {
            gCdraw.beginPath();
            gCdraw.arc(ev.offsetX, ev.layerY, 50, 0, 2 * Math.PI);
            gCdraw.stroke();
        }
        if (gUserPrefs.shape === "triangle") {
            var lineXPos = ev.offsetX;
            var lineYPos = ev.offsetY;
            gCdraw.beginPath();
            gCdraw.moveTo(lineXPos, lineYPos);
            gCdraw.lineTo(lineXPos + 100, lineYPos + 25);
            gCdraw.lineTo(lineXPos + 25, lineYPos + 105);
            gCdraw.fill();
            gCdraw.stroke();
            // [x, y] = [lineXPos, lineYPos]
            
            }
            
            if (gUserPrefs.shape === "line") {
            var lineXPos = ev.offsetX;
            var lineYPos = ev.offsetY;
            gCdraw.beginPath();
            gCdraw.moveTo(x, y);
            gCdraw.lineTo(lineXPos,lineYPos);
            gCdraw.stroke();
            [x, y] = [lineXPos, lineYPos];

            
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