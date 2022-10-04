const textEl = document.getElementsByClassName('text')
const speedEl = document.getElementById('speed')
const text = 'Call Me Phoenix'
let count = 1
let speed = 300 / speedEl.value

writeText()
function writeText() {
    textEl[0].innerHTML = text.slice(0, count)
    count++
    console.log(textEl)
    if (count > text.length) {
        count = 1
    }
    setTimeout(writeText, speed)
}
speedEl.addEventListener('input',(e)=>speed = 300 / e.target.value)