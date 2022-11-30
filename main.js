const guessInput = document.querySelector('#input')
const range = document.querySelector('input[type=range]')
const submit = document.querySelector('button')
const display = document.querySelector('.range')
const result = document.querySelector('.result')


const generateNumber = (range) => {
    return Math.floor(Math.random() * range + 1)
}

range.addEventListener('input', () => {
    display.innerHTML = `${range.value}`
})


submit.addEventListener('click', () => {
    result.style.display = 'block';
    let randomNumber = generateNumber(range.value)
    Number(guessInput.value) > randomNumber ? result.innerHTML = `Too High! :(`
    : result.innerHTML = 'Too Low! :('
    Number(guessInput.value) === randomNumber 
        ? (document.body.style.backgroundColor = 'green', alert('You won dude!'), result.innerHTML = "Congratulations!")
        : (document.body.style.backgroundColor = 'red', alert(`Wrong!\n Actually it was \n ${randomNumber}`));
    })

