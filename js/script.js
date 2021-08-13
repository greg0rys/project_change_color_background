//Choose a random color
const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground() {
  // the math.random() method is being set to return numbers between 0 and the length of the colors array it returns that number as a String
    //then parseInt converts the string to a number and we use colorIndex as the sub on colors.
    const colorIndex = parseInt(Math.random() * colors.length)
    console.log(colorIndex);
    body.style.backgroundColor = colors[colorIndex]
}