var gCanvas;
var gCdraw;

function init() {
    gCanvas = document.querySelector('#sarelDvir');
    gCdraw = gCanvas.getContext('2d');
}

var colorChoosen = document.querySelector('#fav-color')
colorChoosen.addEventListener("change",chooseFavColor, false)
console.log(colorChoosen);
function chooseFavColor(ev) {
    var newColor = ev.target.value;
    console.log(newColor);
    
}
    
function canvasClicked(ev) {
    console.log("work");
    console.log(ev);
}