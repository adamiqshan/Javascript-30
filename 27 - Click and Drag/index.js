const slider = document.querySelector('.items')
let isDown = false
let startX
let scrollLeft

slider.addEventListener('mousedown', (e) => {
    isDown = true
    slider.classList.add('active')
    startX = e.pageX - slider.offsetLeft
    scrollLeft = slider.scrollLeft
    console.log(scrollLeft)
})

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault()
    let walk = (e.pageX - slider.offsetLeft) - startX
    slider.scrollLeft = scrollLeft - walk
    console.log(walk)
})

slider.addEventListener('mouseup', () => {
    isDown = false
    slider.classList.remove('active')
})

slider.addEventListener('mouseleave', () => {
    isDown = false
    slider.classList.remove('active')
})