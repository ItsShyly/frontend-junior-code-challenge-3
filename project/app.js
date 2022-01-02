const container = document.querySelector('.container')
let pixelAmount = document.querySelector('.size')
let color = document.querySelector('.color')
const size = pixelAmount.value
let draw = false



function gridSize(size) {
  container.style.setProperty('--size',size )
  for (let i = 0; i < size * size; i++ ) {
    const div = document.createElement('div')
    div.classList.add('pixel')


    div.addEventListener('mouseover' , function (){
        if(!draw) return
        div.style.backgroundColor = color.value
    })

    div.addEventListener('mousedown', function (){
        draw = true
    div.style.backgroundColor = color.value
    })

    div.addEventListener('mouseup', function (){
       draw = false
    })



    container.appendChild(div)


  }

}

gridSize(size)



function reload() {

  container.innerHTML = ''
  gridSize(size)
  location.reload();

}

