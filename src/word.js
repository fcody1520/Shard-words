let word;

function setupWord(element, initWord) {
    word = initWord
    word.split('').forEach(() => {
        const div = document.createElement('div')
        div.className = 'letter-box'
        element.appendChild(div)
    })
}

function isLetterInWord(letter) {
    return word.includes(letter)
}

function revealLetterInWord(letter) {
    const letterBoxes = document.querySelectorAll('.letter-box');
    word.split('').forEach((wordLetter, idx) => {
        if (wordLetter === letter){
            letterBoxes[idx].innerHTML = letter
        }
    })
}


export {setupWord, isLetterInWord, revealLetterInWord}