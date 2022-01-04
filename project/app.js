const container = document.querySelector('.container')
const colorMain = document.querySelector('.pixel')
let colorInput = document.querySelector('.color')
let sizeInput = document.querySelector('.size')
const size = sizeInput.value

//set everything to false
let draw = false
let bucket = false
let eraser = false
let pencil = false

//take grid size from input
function pixelEvents (size) {
  container.style.setProperty('--size', size)
  for (let i = 0; i < size * size; i++) {

//add divs with pixel class
    const div = document.createElement('div')
    div.classList.add('pixel')

//mousedown event
    div.addEventListener('mousedown', function () {

      //set draw to true on mouse down
      draw = true

      //looking for what item is selected
      if (pencil === true) {
        return div.style.backgroundColor = colorInput.value
      } else {
        if (bucket === true) {
          return div.style.backgroundColor = 'red'
        } else {
          if (eraser === true) {
            return div.style.backgroundColor = colorMain
          }
        }
      }

    })

//mouseover event
    div.addEventListener('mouseover', function () {


      //looking for what item is selected and draw only on mouse down / adding a border on hovering over a pixel
      if (pencil === true) {
        if (draw === true) {
          return div.style.backgroundColor = colorInput.value

        }
        div.style.borderColor = colorInput.value
      } else {
        if (bucket === true) {
          if (draw === true) {
            return div.style.backgroundColor = 'red'
          }
          div.style.borderColor = 'red'
        } else {
          if (eraser === true) {
            if (draw === true) {
              return div.style.backgroundColor = colorMain
            }
            div.style.borderColor = colorMain
          }
        }
      }

    })

//mouseout event / prevent the pixels from keeping the border after the mouseover
    div.addEventListener('mouseout', function () {
      div.style.borderColor = "transparent"


    })



//mouseup event / set draw to false when releasing the mousedown
    div.addEventListener('mouseup', function () {
      draw = false
    })

    container.appendChild(div)

  }

}

pixelEvents(size)

//Set Pencil to true
function pencilTrue () {
  pencil = true
  eraser = false
  bucket = false
}

//Set Eraser to true
function eraserTrue () {
  pencil = false
  eraser = true
  bucket = false
}

//Set Bucket to True
function bucketTrue () {
  pencil = false
  eraser = false
  bucket = true
}

//Side Reload
function reload () {

  container.innerHTML = ''
  pixelEvents(size)
  location.reload();

}

//html2canvas - save image
function exportURL () {

  //Funktion fehlt noch

}

function bucketTool () {

//Funktion fehlt noch

}