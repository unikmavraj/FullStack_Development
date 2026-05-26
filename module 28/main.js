var button1 = document.getElementById('btn1')

button1.onclick = function(){
    alert('Hello')
}



var button2 = document.getElementById('btn2')

button2.onmouseleave = function(){
    alert('You left me!')
}



var button3 = document.getElementById('btn3')

button3.onmouseover = function(){
    alert('Why are you hovering me?')
}



var button4 = document.getElementById('btn4')

button4.onmousewheel = function(){
    alert('Stop scrolling me!')
}




var title = document.getElementById('title')

title.onmouseover = function(){
    alert('Hovering on title.')
}




var button5 = document.getElementById('btn5')

button5.onclick = function(){
    title2.style.color = 'red';
    title2.style.backgroundColor = 'lightgrey';
    title2.style.fontSize = '100px';
    title2.style.textAlign = 'center';
    title2.style.padding = '20px';
}

var title2 = document.getElementById('title2')


var button6 = document.getElementById('btn6')

button6.onclick = function(){
    title3.setAttribute("class", "test")
}

var title3 = document.getElementById('title3')