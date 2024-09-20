var btn = document.getElementById("btn");
var inputs = document.querySelectorAll("input:not([type=submit])")
var error = false

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggle = document.querySelector('.toggle')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// const loading = document.getElementById("loader");




toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html')
    if (html.classList.contains('dark')) {
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Light mode'
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? 'PM' : 'AM'
    
    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`
    
    timeEl.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime()

setInterval(setTime, 1000)

btn.addEventListener("click", function (e) {
    e.preventDefault()
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == ``) {
            inputs[i].nextElementSibling.innerHTML = `Please enter ${inputs[i].name} `
            inputs[i].nextElementSibling.style.color = `red`
            error = true
        }

    }
    var firstName = document.getElementById("fname")
    var firstNamePattren = /^[A-Z][a-z]{2,9}$/

    if (firstName.value != 0) {
        if (firstNamePattren.test(firstName.value) == false) {
            firstName.nextElementSibling.innerHTML = `First Name not available`
            error = true
        }
    }


    var lastName = document.getElementById("lname")
    var lastNamePattren = /^[A-Z][a-z]{2,9}$/

    if (lastName.value != 0) {
        if (lastNamePattren.test(lastName.value) == false) {
            lastName.nextElementSibling.innerHTML = `Last Name not available`
            error = true
        }
    }


    var email = document.getElementById("email")
    var emailPattren = /^[a-z]{3,9}@gmail.com$/

    if (email.value != 0) {
        if (emailPattren.test(email.value) == false) {
            email.nextElementSibling.innerHTML = `Email not available`
            error = true
        }
    }



    var password = document.getElementById("password")
    var passwordPattren = /^[0-9]{3,9}$/

    if (password.value != 0) {
        if (passwordPattren.test(password.value) == false) {
            password.nextElementSibling.innerHTML = `Password not available`
            error = true
        }
    }

    if (!error) {
        var userData = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value
        }
        var signupData = JSON.parse(localStorage.getItem('signup')) || []
        signupData.push(userData)
        localStorage.setItem('signup', JSON.stringify(signupData))
        window.location.href = `login.html`

    }


})
