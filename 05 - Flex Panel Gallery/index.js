let panels = document.querySelectorAll('.panel')

function toggler() {
    this.classList.toggle('open')
}

function textManipulate(e) {
    if (e.propertyName.includes('font')) {
        this.classList.toggle('open-active')
    }
}

panels.forEach(panel => {
    panel.addEventListener('click', toggler)
})


panels.forEach(panel => {
    panel.addEventListener('transitionend', textManipulate)
})