# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

- Desing preview on mobile:

![Mobile design](./design/mobile-design.jpg)

- Desing preview on mobile thank you state:

![Mobile design](./design/mobile-thank-you-state.jpg)

- Desing preview on desktop:

![Desktop design](./design/desktop-design.jpg)

- Desing preview active on desktop:

![Desktop design](./design/active-states.jpg)

- Desing preview on desktop thank you state:

![Desktop design](./design/desktop-thank-you-state.jpg)

### Links

- Solution URL: [FrontendMentor](https://www.frontendmentor.io/solutions/interactive-rating-component-Vhocd3CNA7)
- Live Site URL: [Interactive rating component](https://interactive-ratinglm.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```html
<section class="form">
      <label for="one">
        <input type="radio" name="rate" class="rate-selector" id="one">
        <span>1</span>
      </label>
      <label for="two">
        <input type="radio" name="rate" class="rate-selector" id="two">
        <span>2</span>
      </label>
      <label for="three">
        <input type="radio" name="rate" class="rate-selector" id="three">
        <span>3</span>
      </label>
      <label for="four">
        <input type="radio" name="rate" class="rate-selector" id="four">
        <span>4</span>
      </label>
      <label for="five">
        <input type="radio" name="rate" class="rate-selector" id="five">
        <span>5</span>
      </label>
      <button id="button-submit">S U B M I T</button>
    </section>
```
```css
.form span:hover {
    background-color: var(--hover);
}
.form input:checked ~ span {
    background-color: var(--submit);
    color: var(--primary);
}
.form > button {
    font-weight: 700;
    border-radius: 24px;
    background-color: var(--submit);
    color: var(--primary);
    border: none;
    width: 100%;
    height: 36px;
    margin: 16px;
}
.form > button:active {
    background-color: var(--primary);
    color: var(--submit);
}
.rate-selector {
    display: none;
}
```
```js
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
```

### Continued development

This is just the beginning, I will continue to strengthen my knowledge to become a Full Stack Web Developer.

## Author

- Website - [Luis M. Ebratt](https://lmebratt.github.io/)
- Frontend Mentor - [@lmebratt](https://www.frontendmentor.io/profile/lmebratt)
- Twitter - [@RazorLm](https://twitter.com/RazorLm)