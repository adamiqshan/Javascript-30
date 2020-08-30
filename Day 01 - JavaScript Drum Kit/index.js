var all = document.querySelectorAll("div div");

window.addEventListener('keydown', function (e) {
    console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play()
})


all.forEach(elm => elm.addEventListener('click', function () {
    const audio = document.querySelector(`audio[data-key="${this.getAttribute("data-key")}"]`);
    const key = document.querySelector(`div[data-key="${this.getAttribute("data-key")}"]`);
    key.classList.add('playing');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}))

function removeTransition(e) {
    if (e.propertyName !== 'box-shadow') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));