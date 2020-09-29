let nav = document.querySelector('nav')
navDistance = nav.offsetTop


function stickNav() {
    if (window.scrollY > navDistance) {
        document.body.classList.add('fixed-nav')
    }

    else {
        document.body.classList.remove('fixed-nav')
    }
}

window.addEventListener('scroll', stickNav)