var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;

console.log(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;

console.log(randomNumber2);

var randomdice1 = "dice" + randomNumber1 + ".png";

var randomimage1 = "./images/" + randomdice1;

console.log(randomimage1);

var randomdice2 = "dice" + randomNumber2 + ".png";
var randomimage2 = "./images/" + randomdice2;

console.log(randomimage2);

var img1 = document.querySelectorAll("img")[0].setAttribute("src", randomimage1);

var img2 = document.querySelectorAll("img")[1].setAttribute("src", randomimage2);

var headerName = document.querySelector("h1");
if (randomNumber1 < randomNumber2){
    headerName.innerHTML = "Player 2 Wins";
}
else if(randomNumber1 > randomNumber2){
    headerName.innerHTML = "Player 1 Wins";
}
else{
    headerName.innerHTML = "DRAW";
}