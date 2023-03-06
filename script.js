

var button = document.getElementById('submit');
var resize = document.getElementById('resize');
var input = document.getElementById('input');

button.addEventListener('mouseover', mouseOverFunc);
//button.addEventListener('click', clickFunc);
button.addEventListener('mousedown', mouseDownFunc);
button.addEventListener('mouseout', mouseOutFunc);
button.addEventListener('mouseup', mouseUpFunc);
window.addEventListener('resize', resizeFunc);
input.addEventListener('focus', focusFunc);
input.addEventListener('keypress', changeFunc);
input.addEventListener('keyup', keyDownFunc);

function keyDownFunc() {
  document.getElementById('header7').innerHTML += '<div style="background-color:fuchsia;">Key has been deleted</div>'
}

function changeFunc() {
  document.getElementById('header7').innerHTML += '<div style="background-color:yellow;">Key has been entered</div>'
}

function mouseOverFunc() {
  document.getElementById('header7').innerHTML += `<div style="background-color:red;">Mouse has been hovered</div>`
}

function mouseDownFunc() {
  document.getElementById('header7').innerHTML += `<div style="background-color:green;">Mouse has been pressed and hold</div>`
}

function mouseOutFunc() {
  document.getElementById('header7').innerHTML +=  '<div style="background-color: blue;">Mouse has been released</div>'
}

function mouseUpFunc() {
  document.getElementById('header7').innerHTML += '<div style="background-color: orange;">Mouse has been taken up</div>'
}

function resizeFunc() {
  document.getElementById('header7').innerHTML = Math.random() // 0 to 1
}

function focusFunc() {
  document.getElementById('header7').innerHTML += '<div style="background-color: purple; color: white">Input element has been focused</div>'
}

 