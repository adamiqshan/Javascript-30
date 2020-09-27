const secs = [...document.querySelectorAll('[data-time]')]
    .map(x => x.dataset.time)
    .map(x => { let [mins, secs] = x.split(':').map(parseFloat); return mins * 60 + secs })
    .reduce((total, seconds) => total + seconds)

const hours = Math.floor(secs / 3600)
let secondsLeft = secs % 3600

const mins = Math.floor(secondsLeft / 60)
secondsLeft = secondsLeft % 60

console.log(hours, mins, secondsLeft)
