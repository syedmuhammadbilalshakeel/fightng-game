alert("welcome to foghting game");

//document.write( "<h1>" + "welcome to fighting game"+"</h1>");


function player1() {
    swal("Player 1 Keys!", "Forward = Right Key \n Back = Left Key  \n Kick = Down Key \n  Power = R");
}
function  player2() {
    swal("Player 2 Keys!", "Forward = A \n Back = Z \n Jump = J \n Kick = K  \n Power = Q");
}
var num1 = document.getElementById("image1");
var num2 = document.getElementById("img23");
var counting = 50;
var count = 50;
window.onkeydown = function () {
    console.log(event.keyCode);
    if (event.keyCode === 65) {
        num2.src = "./images/run2.gif";
        count = count - 50;
        num2.style.left = count + "px";
        setTimeout(function () {
            num2.src = "./images/shkira1.gif";
        }, 200)
    }
    if (event.keyCode === 90) {
        num2.src = "./images/run2.gif";
        count = count + 50;
        num2.style.left = count + "px";
        setTimeout(function () {
            num2.src = "./images/shkira1.gif";
        }, 300)
    }
    if (event.keyCode === 74) {
        num2.src = "./images/shkira5.gif";
        setTimeout(function () {
            num2.src = "./images/shkira1.gif";
        }, 1300)
    }
    if (event.keyCode === 75) {
        num2.src = "./images/shkira4.gif";
        setTimeout(function () {
            num2.src = "./images/shkira1.gif";
        }, 1300)
    }
    
    if (event.keyCode === 81) {
        num2.src = "./images/shkira2.gif";
        setTimeout(function () {
            num2.src = "./images/shkira1.gif";
        }, 1300)
    }
    if (event.keyCode === 39) {
        num1.src = "./images/run1.gif";
        counting = counting + 50;
        num1.style.left = counting + "px";
        setTimeout(function () {
            num1.src = "./images/guile-stance1.gif";
        }, 200)
    }
    if (event.keyCode === 37) {
        num1.src = "./images/run1.gif";
        counting = counting - 50;
        num1.style.left = counting + "px";
        setTimeout(function () {
            num1.src = "./images/guile-stance1.gif";
        }, 200)
    }
    
    if (event.keyCode === 40) {
        num1.src = "./images/kick-img.gif";
        setTimeout(function () {
            num1.src = "./images/guile-stance1.gif";
        }, 1300)
    }
    
    if (event.keyCode === 82) {
        num1.src = "./images/sf-guile2.gif";
        setTimeout(function () {
            num1.src = "./images/guile-stance1.gif";
        }, 1300)
    }
}