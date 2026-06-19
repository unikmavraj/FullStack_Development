// function printName(){
//     var text = document.getElementById("text");

//     text.innerHTML = "John<br>";
//     setTimeout(function(){
//         text.innerHTML += "Doe<br>";
//     }, 3000)

//     text.innerHTML += "Smith<br>";
// }

// printName();


// var colors = ["red", "green", "blue", "yellow", "purple"];

// function changeBgColor(){
//     document.querySelector('body').style.background = colors[Math.floor(Math.random() * colors.length)];
// }
// setInterval(changeBgColor, 2000);


var colors = ["red", "green", "blue", "yellow", "purple"];
var circle = document.getElementById('circle')



function changeColor(){
   document.querySelector('div').style.color = colors[Math.floor(Math.random() * colors.length)];
}
 setInterval(changeColor, 1000);

