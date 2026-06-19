var square = document.getElementById('square')
var triangle = document.getElementById('triangle')
var circle = document.getElementById('circle')
var rectangle = document.getElementById('rectangle')

square.onclick = function(){
    square.setAttribute("class" ,"square")
}

triangle.onclick = function(){
    triangle.setAttribute("class" ,"triangle")
}

circle.onclick = function(){
    circle.setAttribute("class" ,"circle")
}

rectangle.onclick = function(){
    rectangle.setAttribute("class" ,"rectangle")
}