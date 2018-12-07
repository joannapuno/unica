// Mobile Menu
var button = document.querySelector('#hamburger-button')
var menu = document.querySelector('#mobileMenu')
var closeButton = document.querySelector('#close-button')

function openMenu() {
    menu.className = 'mobile-menu'
}

function closeMenu() {
    menu.className = 'mobile-menu closed'
}


button.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)