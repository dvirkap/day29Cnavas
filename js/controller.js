var gCanvas;
var gCdraw;

function init() {
    gCanvas = document.querySelector('#sarelDvir');
    gCdraw = gCanvas.getContext('2d');
}

<<<<<<< HEAD
function chooseFavColor() {
    var colorChoosen = document.querySelector('#fav-color');
    console.log(colorChoosen);
=======
var colorChoosen = document.querySelector('#fav-color')
colorChoosen.addEventListener("change",chooseFavColor, false)
console.log(colorChoosen);
function chooseFavColor(ev) {
    var newColor = ev.target.value;
    console.log(newColor);
    
>>>>>>> 4cd8e8e33def9ecbc05d2f462a4b515c4ebdc418
}
    
function canvasClicked(ev) {
    console.log("work");
    console.log(ev);
}