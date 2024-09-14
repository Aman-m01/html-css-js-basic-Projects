const h1 = document.querySelector('#h1')
const body = document.body;
const button = document.querySelector('#btn')
const color_name = document.querySelector('.current_color')

function randomColorGenerator() {
   const red = Math.floor(Math.random() * 256)
   const green = Math.floor(Math.random() * 256)
   const blue = Math.floor(Math.random() * 256)
   const randomColor = `rgb(${red},${green},${blue})`
   return randomColor;
}

button.addEventListener('click', () => {
   const changeColor = randomColorGenerator()
   //  console.log(randomColor);
   body.style.backgroundColor = changeColor
   color_name.innerText = changeColor
})
