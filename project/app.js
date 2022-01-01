const container = document.querySelector('.container')
let pixelAmount =document.querySelector('.size')
const size = pixelAmount.value




function gridSize(size) {
  container.style.setProperty('--size',size )
  for (let i = 0; i < size * size; i++ ) {
    const div = document.createElement('div')
    div.classList.add('pixel')

    container.appendChild(div)

  }

}

gridSize(size)





