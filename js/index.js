const buttonOpen = document.querySelector('.button-open')
const buttonClose = document.querySelector('.button-close')
const mobileWrapper = document.querySelector('.nav-mobile__wrapper')
const mobileNav = document.querySelector('.nav-mobile')
const buttonTestimonial = document.querySelectorAll('.about-testimonial__button')

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

buttonTestimonial.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;

        content.classList.toggle('active')
        button.classList.toggle('active')
    })
})
