const container = document.querySelector('.container')
const pencilBtn = document.querySelector('.pencil-btn')
const eraserBtn = document.querySelector('.eraser-btn')
const bucketBtn = document.querySelector('.bucket-btn')
let colorInput = document.querySelector('.color')
let sizeInput = document.querySelector('.size')

const size = sizeInput.value
const colorMain = '#0b101a'

let pixels = []

//set everything to false
let { draw, bucket, eraser, pencil } = false

//activate pencil
pencilTool()

//take grid size from input
function pixelEvents (size) {
  container.style.setProperty('--size', size)
  for (let i = 0; i < size * size; i++) {

//add divs with pixel class
    const div = document.createElement('div')
    div.classList.add('pixel')

    pixels[i] = div

//mousedown event
    div.addEventListener('mousedown', function () {

      //set draw to true on mouse down
      draw = true

      //looking for what item is selected
      if (pencil) {
        return div.style.backgroundColor = colorInput.value
      }

      if (bucket) {
        const targetColor = div.style.backgroundColor

        for (const pixelKey in pixels) {
          const pixel = pixels[pixelKey]

          if (pixel.style.backgroundColor !== targetColor) {
            continue
          }

          pixel.style.backgroundColor = colorInput.value
        }

        return
      }

      if (eraser) {
        return div.style.backgroundColor = colorMain
      }

    })

//mouseover event
    div.addEventListener('mouseover', function () {

      //looking for what item is selected and draw only on mouse down / adding a border on hovering over a pixel
      if (pencil && draw) {
        div.style.backgroundColor = colorInput.value
        div.style.borderColor = colorInput.value

        return
      }

      if (eraser && draw) {
        div.style.backgroundColor = colorMain
        div.style.borderColor = colorMain
      }
    })

//mouseout event / prevent the pixels from keeping the border after the mouseover
    div.addEventListener('mouseout', function () {
      div.style.borderColor = "transparent"

    })

//mouseup event / set draw to false when releasing the mousedown
    window.addEventListener('mouseup', function () {
      draw = false
    })

    container.appendChild(div)

  }

  console.log(pixels)

}

//Set Pencil to true and make it active / deactivate other tools
function pencilTool () {

  pencilBtn.classList.add('active')
  pencil = true

  eraserBtn.classList.remove('active')
  eraser = false

  bucketBtn.classList.remove('active')
  bucket = false

}

//Set Eraser to true and make it active / deactivate other tools
function eraserTool () {

  pencilBtn.classList.remove('active')
  pencil = false

  eraserBtn.classList.add('active')
  eraser = true

  bucketBtn.classList.remove('active')
  bucket = false
}

//Set Bucket to true and make it active / deactivate other tools
function bucketTool () {

  pencilBtn.classList.remove('active')
  pencil = false

  eraserBtn.classList.remove('active')
  eraser = false

  bucketBtn.classList.add('active')
  bucket = true
}

/// Clear/ Reload
function resetGrid () {

  container.innerHTML = ''
  pixelEvents(size)

}

function changeGrid (size) {

  container.innerHTML = ''
  pixelEvents(size)

}

function downloadDataUrl (dataUrl, extension) {
  const link = document.createElement('a')
  link.download = new Date().getTime() + extension
  link.href = dataUrl
  link.click()
}

function exportImage (type) {
  if (type === 'png') {

    domtoimage.toPng(container).then(function (dataUrl) {
      downloadDataUrl(dataUrl, '.png')
    })
    return
  }

  if (type === 'jpg') {

    domtoimage.toJpeg(container).then(function (dataUrl) {
      downloadDataUrl(dataUrl, '.jpg')
    })
    return
  }

  if (type === 'gif') {
    domtoimage.toPng(container).then(function (dataUrl) {
      dataUrl = dataUrl.replace('data:image/png;', 'data:image/gif;')
      downloadDataUrl(dataUrl, '.gif')
    })

    return
  }

  alert('no valid image type has been selected')
}


pixelEvents(8)




