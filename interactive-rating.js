//Elementos de HTML traidos a JS
const sectionRating = document.getElementById("section-one")
const sectionThanks = document.getElementById("section-two")
const buttonSubmit = document.getElementById("button-submit")
const spanRate = document.getElementById("rate")
let inputOne = document.getElementById("one")
let inputTwo = document.getElementById("two")
let inputThree = document.getElementById("three")
let inputFour = document.getElementById("four")
let inputFive = document.getElementById("five")

function start() {    
    buttonSubmit.addEventListener("click", thanks)
}

function selector() {
    inputOne = document.getElementById("one")    
    inputTwo = document.getElementById("two")
    inputThree = document.getElementById("three") 
    inputFour = document.getElementById("four") 
    inputFive = document.getElementById("five")

    if (inputOne.checked) {
        spanRate.innerHTML = "1"
    } else if (inputTwo.checked) {
        spanRate.innerHTML = "2"
    } else if (inputThree.checked) {
        spanRate.innerHTML = "3"
    } else if (inputFour.checked) {
        spanRate.innerHTML = "4"
    } else if (inputFive.checked) {
        spanRate.innerHTML = "5"
    } else {
        spanRate.innerHTML = "NaN"
    }
}

function thanks() {    
    sectionRating.style.display = "none"
    sectionThanks.style.display = "flex"

    selector()
}

sectionThanks.style.display = "none"
window.addEventListener("load", start)