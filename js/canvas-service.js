'use strict'
var gCanvas;
var gCdraw;
var gUserPrefs = {
    strokeColor: '',
    bgColor: '',
    shape: '',
    isSaved: false
};

function createUserPrefs(stroke,bgcolor,shape, isSaved) {
   return gUserPrefs = {
        strokeColor: stroke,
        bgColor: bgcolor,
        shape: shape,
        isSaved: isSaved
    }
}


// facebook api
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/he_IL/sdk.js#xfbml=1&version=v3.0&appId=807866106076694&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

//   function chooseFavColor(ev) {
//     // console.log(ev);
//     var newColor = ev.target.value;
//     gCdraw.strokeStyle = newColor;
//     // console.log(gCdraw.strokeStyle);
// }