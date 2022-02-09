// First, tell us your name
let yourName = "Adrian Daniel" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0
// selecting the element with an id of credit

const credit = document.querySelector('#credit')
let addGB = document.querySelector('#add-gb')
let addCC = document.querySelector('#add-cc')
let addSugar = document.querySelector('#add-sugar')

let minusGb = document.querySelector('#minus-gb')
let minusCC = document.querySelector('#minus-cc')
let minusSugar = document.querySelector('#minus-sugar')

// selecting the element with an id of add-gb
let gbQty = document.querySelector('#qty-gb')
let ccQty = document.querySelector('#qty-cc')
let sugarQty = document.querySelector('#qty-sugar')
let qtyTotal = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
addGB.addEventListener('click', function(e) {
  gb++
  total++
  gbQty.textContent = `${gb}`
  qtyTotal.textContent = `${total}`
    console.log(gb)
})
addCC.addEventListener('click', function(e) {
    cc++
    total++
    ccQty.textContent = `${cc}`
    qtyTotal.textContent = `${total}`
  console.log(cc)
})

addSugar.addEventListener('click', function(e) {
  sugar++
  total++
  sugarQty.textContent = `${sugar}`
  qtyTotal.textContent = `${total}`
})


// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons
minusGb.addEventListener('click', function(e) {
    gb--
    total--
    gbQty.textContent = `${gb}`
    qtyTotal.textContent = `${total}`
      console.log(gb)
})


minusCC.addEventListener('click', function(e) {
    cc--
    total--
    ccQty.textContent = `${cc}`
    qtyTotal.textContent = `${total}`
      console.log(cc)
})
minusSugar.addEventListener('click', function(e) {
    sugar--
    total--
    sugarQty.textContent = `${sugar}`
    qtyTotal.textContent = `${total}`
      console.log(sugar)
})
