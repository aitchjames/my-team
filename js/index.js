const buttonOpen = document.querySelector('.button-open')
const buttonClose = document.querySelector('.button-close')
const mobileWrapper = document.querySelector('.nav-mobile__wrapper')
const mobileNav = document.querySelector('.nav-mobile')

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