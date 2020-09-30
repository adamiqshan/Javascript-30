const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')


function handleEnter() {
    this.classList.add('trigger-enter')
    setTimeout(() => this.classList.add('trigger-enter-active'), 150)

    background.classList.add('open')

    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navs = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navs.top,
        left: dropdownCoords.left - navs.left
    }

    console.log(dropdownCoords)
    console.log(navs)
    background.style.width = `${coords.width}px`
    background.style.height = `${coords.height}px`
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
}

triggers.forEach(trigger => {
    trigger.addEventListener('mouseenter', handleEnter)
});

triggers.forEach(trigger => {
    trigger.addEventListener('mouseleave', handleLeave)
});