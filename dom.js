/**
 * This function is used to transform any element's innerHTML
 * To the text that is passed as a parameter
 * Also make the element as bold
 * 
 * @param element - DOM Element
 * @param text - Any message to change element
 */
const alterAndMakeItBold = (element, text) => {
    element.innerHTML = '<b>${text}</b>'
}


console.log("Hello World!...")

//Modify the content of h1 to 'Hello World - Learning DOM'

//document.querySelector('h1').innerText = "Hello World - Learning DOM"

//change the 'p' element to 'DOM rocks'
//Bonus challenge - Try and make it bold using JS / DOM
//selecting the element

//const targetElement = document.querySelector('p.select-text')
//targetElement.innerText = "DOM Rocks"
//targetElement.Style.fontWeight = "bold"
//targetElement.innerHTML = "<b><i>DOM Rocks</i></b>"

//change all the 'p' tag with 'select-text' class to 'This is magic DOM'
//Also make them bold / itatic  
//const targetElements = document.querySelectorAll('p.select-text')
//targetElements.forEach((ele, index) => alterAndMakeItBold(ele, 'This is a magic DOM '))


//Execrise
//Change the Header to - 'Learning DOM'
//Change the paragraph to -'This is First paragraph'
//Add another paragraph element and keep its content - 'This is second Paragraph'


//Step-1 Selecting the Header
const headerElement = document.querySelector('h1')
headerElement.innerText = "Learning DOM"

//Step-2 Selecting and Modifying the paragraph
const paraElement = document.querySelector('p')
paraElement.innerText = "This is First Paragrph"

//Step-3 Create a text node


//Execrise 
//Add a click linster to hte button to change the background of the webpage

//step-1 : selecting the button
const btn = document.querySelector('button')

//step-2: Select the body
const docbody = document.body



/**
 * A function 
 * @param {T} number
 * @return
 */
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

//step-3: Adding the click linster
btn.addEventListener('click', () => {
    //step-4: Change the background colour
    const rgbColorBg = `rgb(${random(255)}, ${random(255)} ,${random(255)})`;
    docbody.style.backgroundColor = rgbColorBg
})

//buttton is hovered
//step-1: Add an event listener for 'mouseenter'
//which is triggered whenever the cursor is hovering over the button
btn.addEventListener("mouseenter", () => {
    //step-2: Change the content inside the paragraph element
    paraElement.innerText = "Button is being hoverer"
})

//Execrise
//Change the text back to - " This is first paragraph " when the mouse
// leaves the button
//Reset the background colour of the body to 'white' (Bonus - Use RGB if possible)

//step-1: Add an Event Listener for'mouseleave'
//which triggered when the cursor is leaving the button element
btn.addEventListener("mouseleave", () => {
    //step-2: Change the content inside the paragraph element
    paraElement.innerText = "This is the first paragraph"

    //step-3: Reset the body background color to white
    docbody.style.background = 'rgb(255,255,255)'
})

