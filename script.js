const navMenu = document.querySelector('.nav-menu')
const hamburger = document.querySelector('.hamburger')
const closeButton = document.querySelector('.close')

hamburger.addEventListener('click', () => {
    hamburger.classList.add('active')
    closeButton.classList.add('active')
    navMenu.classList.add('active')
})

closeButton.addEventListener('click', () => {
    closeButton.classList.remove('active')
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
})

navMenu.addEventListener('click',() => {
    closeButton.classList.remove('active')
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
})