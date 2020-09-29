let hrefs = document.querySelectorAll('a')

let highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.appendChild(highlight)

function position() {
    let box = this.getBoundingClientRect()
    highlight.style.width = `${box.width}px`
    highlight.style.height = `${box.height}px`
    highlight.style.transform = `translate(${box.left + window.scrollX}px, ${box.top + window.scrollY}px)`;
}


hrefs.forEach(a => {
    a.addEventListener('mouseenter', position)
})


