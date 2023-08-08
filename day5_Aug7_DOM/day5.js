console.log('Ann Johnnidis')
let myText = document.querySelector('#userName p:nth-child(2)')
myText.style.color = "red"

// background-color camel case --> backgroundColor
document.querySelector('.name1').style.backgroundColor = "magenta"

// querySelecterAll
let myName = document.querySelectorAll('#userName p')

// myName.style.color = 'green' -- this doesn't work because myName is a list. You would need a for loop
for (let i=0; i<myName.length; i++){
    myName[i].style.color = 'green'
    // change the font size of all odd <p>
    if (i%2 === 0){
        myName[i].style.fontSize = '2em'
    }
}

// -- innerHTML
let myDiv = document.querySelectorAll('p')[1]
myDiv.innerHTML = 'New text content using <em><b>innerHTML</b></em>'

// -- classList.add()  - this is how to add a class name to element
document.querySelector('h1').classList.add('subtitle')

// --testing parent/sibling/child -- //
// let listItem = document.querySelector('li')
let listItem = document.querySelector('li:nth-child(2)')

// -- creating elements and text nodes -- //
// step 1: create an element
let myPara = document.createElement('p')
// step 2: create content
let mySentence = document.createTextNode('This is the text of the new paragraph')
// step 3A: append the text node into the new element
myPara.appendChild(mySentence)
myPara.classList.add('subtitle')
// step 3B: append the new element, with text node, to the document
document.querySelector('div').appendChild(myPara)

// -- remove element -- //
let myItem = document.querySelector('ul')
// myItem.removeChild(myItem.children[2])
myItem.removeChild(myItem.lastElementChild)

// -- EVENTS -- //
let btn = document.querySelector('.btn1')
btn.onclick = function(){
    alert('Hi there!')
}

// example guess a number -- //
let randomNum = function(){
    let radNum = Math.ceil(Math.random()*9)
    return radNum
}
let guessNumDiv = document.querySelector('.guessNumber')
let btnGuess = document.querySelector('.btnGuessNum')

btnGuess.addEventListener('click', function(){
    guessNumDiv.innerHTML= randomNum()
})

// -- mouse events -- //
let btnMouseEvent = document.querySelector('#btnMouseEvent')
let mouseoutDisplay = document.querySelector('.mouseoutDisplay')
let dblclickDisplay = document.querySelector('.dblclickDisplay')
let mouseoutCounter = 0
btnMouseEvent.addEventListener('mouseout', function(){
    mouseoutCounter ++
    mouseoutDisplay.innerHTML = mouseoutCounter
})
btnMouseEvent.addEventListener('dblclick', function(){
    dblclickDisplay.innerHTML += ' dblclick'
})

// -- window event -- //
let topIcon = document.querySelector('.top')
window.addEventListener('scroll', function(){
    let yPosition = this.scrollY
    if (yPosition>100){
        topIcon.style.display='block'
    }
    else{
        topIcon.style.display='none'

    }
})