let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(secs) {
    clearInterval(countdown)

    const now = Date.now()
    const then = secs * 1000 + now
    timeLeft(secs)
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)

        if (secondsLeft < 0) {
            clearInterval(countdown)
            return
        }
        timeLeft(secondsLeft)
    }, 1000);
}

function timeLeft(secs) {
    const mins = Math.floor(secs / 60)
    const remainingSecs = secs % 60

    const display = `${mins}:${remainingSecs < 10 ? '0' : ''}${remainingSecs}`
    document.title = display
    timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()

    const adjustedHour = hour > 12 ? hour - 12 : hour

    const mins = end.getMinutes()

    endTime.textContent = `Come Back At ${adjustedHour}:${mins < 10 ? '0' : ''}${mins}`
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});
