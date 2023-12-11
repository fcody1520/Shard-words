const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function setupGuesses(element, handleGuess) {
  alphabet.split('').forEach((letter) => {
    const btn = document.createElement('button');
    btn.innerText = letter;
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    element.append(btn);
  });
}

export default setupGuesses;


// it takes the alphabet and splits it into buttons, each button being a letter. When you click the button, it will add the button as your guess to the div we set up earlier