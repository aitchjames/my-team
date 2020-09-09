const buttonOpen = document.querySelector('.button-open')
const buttonClose = document.querySelector('.button-close')
const mobileWrapper = document.querySelector('.nav-mobile__wrapper')
const mobileNav = document.querySelector('.nav-mobile')

// Mobile Menu

function openMobileNav() {
    mobileWrapper.classList.add('open')
    mobileNav.classList.add('open')
}

function closeMobileNav() {
    mobileWrapper.classList.remove('open')
    mobileNav.classList.remove('open')
}

buttonOpen.addEventListener('click', () => {
    openMobileNav()
})

buttonClose.addEventListener('click', () => {
    closeMobileNav()
})

// About Testimonial Cards

const buttonTestimonial = document.querySelectorAll('.about-testimonial__button')

buttonTestimonial.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;

        content.classList.toggle('active')
        button.classList.toggle('active')
    })
})

// Contact Form

const form = document.querySelector('.contact-form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const company = document.querySelector('#company')
const title = document.querySelector('#worktitle')
const formMessage = document.querySelector('#message')
const buttonSubmit = document.querySelector('#submitButton')
let isValid = false;

function showError(input, message) {
    const formControl = input.parentElement
    formControl.classList.add('error')
    const small = formControl.querySelector('small')
    small.innerText = message
}

function showSuccess(input) {
    const formControl = input.parentElement
    formControl.classList.remove('error')
    formControl.classList.add('success')
}

function checkEmail(input) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (reg.test(input.value.trim())) {
        showSuccess(input)
    } else {
        showError(input, 'Email is not valid')
    }
}

function checkRequired(inputArray) {
    inputArray.forEach( input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`)
        } else {
            showSuccess(input)
        }
    })
}

function checkCharLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`)
    } else {
        showSuccess(input)
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

function submitForm() {
    const message = {
        name: name.value,
        email: email.value,
        company: company.value,
        title: title.value,
        message: formMessage.value
    }

    buttonSubmit.value = 'Sending...'
    buttonSubmit.disabled = true

    setTimeout( () => {
        buttonSubmit.value = 'Sent'        
    }, 2000)

    console.log(message)
}


form.addEventListener('submit', event => {
    event.preventDefault()

    checkRequired([name, email, company, title])
    checkCharLength(name, 3, 25)
    checkEmail(email)
    checkCharLength(company, 3, 50)
    checkCharLength(title, 3, 50)

    isValid = form.checkValidity()

    if (isValid == true) {
        submitForm()
    }
})