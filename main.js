const input = document.querySelector('input')
const range = document.querySelector('input[type=range]')
const submit = document.querySelector('button')
const display = document.querySelector('.range')
const result = document.querySelector('.result')


const generateNumber = (range) => {
    return Math.floor(Math.random() * range)
}

range.addEventListener('input', () => {
    display.innerHTML = `${range.value}`
})


submit.addEventListener('click', () => {
    let randomNumber = 5
    +input.value === randomNumber
        ? (document.body.style.backgroundColor = 'green', alert('You won dude!'))
        : (document.body.style.backgroundColor = 'red', alert(`Wrong!\n Actually it was \n ${randomNumber}`));
    })

