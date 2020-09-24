let pressedKey = []
let easterEgg = 'hello'

window.addEventListener('keypress', (e) => {
    pressedKey.push(e.key)
    console.log(pressedKey)
    console.log(-easterEgg.length - 1)
    console.log(pressedKey.length - easterEgg.length)
    pressedKey.splice(-easterEgg.length - 1, pressedKey.length - easterEgg.length)
    if (pressedKey.join('').includes(easterEgg)) {
        cornify_add();
    }
})

