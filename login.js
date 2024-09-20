// var btn = document.getElementById("Btn");
// // const loading = document.getElementById("loader");
// const boxesContainer = document.getElementById('boxes')
// const btn = document.getElementById('btn')



// btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

// function createBoxes() {
  //   for (let i = 0; i < 4; i++) {
//     for (let j = 0; j < 4; j++) {
  //       const box = document.createElement('div')
  //       box.classList.add('box')
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
//       boxesContainer.appendChild(box)
//     }
//   }
// }

// createBoxes()





// const boxesContainer = document.getElementById('boxes')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => boxesContainer.classList.toggle('big'))

// function createBoxes() {
  //   for (let i = 0; i < 4; i++) {
    //     for (let j = 0; j < 4; j++) {
      //       const box = document.createElement('div')
//       box.classList.add('box')
//       box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
//       boxesContainer.appendChild(box)
//     }
//   }
// }

// createBoxes()


const btn = document.getElementById('btn')
const inputs = document.querySelectorAll("input:not([type=submit])")
const data = JSON.parse(localStorage.getItem("signup"))
const email = document.getElementById("email")
const password = document.getElementById("password")
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

btn.addEventListener("click", function (e) {
      e.preventDefault()
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ``) {
              inputs[i].nextElementSibling.innerHTML = `Please enter ${inputs[i].name} `
              inputs[i].nextElementSibling.style.color = `red`
          }
  
      }
          for (let index = 0; index < data.length; index++) {
            if (email.value == data[index].email && password.value == data[index].password) {
                  var loginData = {
                        firstName: data[index].firstName,
                lastName: data[index].lastName,
            }

            localStorage.setItem("loginData", JSON.stringify(loginData))
            window.location.href = `welcome.html`
        } else {
              document.getElementById("error").innerHTML = `Email Or Password Invalid`
          }
    }
console.log('hi');

})
let activeSlide = 0

rightBtn.addEventListener('click', () => {
  activeSlide++

  if (activeSlide > slides.length - 1) {
    activeSlide = 0
  }

  setBgToBody()
  setActiveSlide()
})

leftBtn.addEventListener('click', () => {
  activeSlide--

  if (activeSlide < 0) {
    activeSlide = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('active'))

  slides[activeSlide].classList.add('active')
}

