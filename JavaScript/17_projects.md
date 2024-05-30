# Projects
## 1. Colour Changer [Link](https://stackblitz.com/edit/dom-project-chaiaurcode-ly7q3h?file=1-colorChanger%2Findex.html)

```javaScript

let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'purple') {
      body.style.backgroundColor = e.target.id;
    }
  });
});

```

## 2. BMI Calculator [Link](https://stackblitz.com/edit/dom-project-chaiaurcode-ly7q3h?file=2-BMICalculator%2Findex.html)

```javaScript
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
  }
});
```

## 3. Digital Clock [Link](https://stackblitz.com/edit/dom-project-chaiaurcode-pg26yw?file=3-DigitalClock%2Findex.html)

```JavaScript
let clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

## 4. Guess the number [Link](https://stackblitz.com/edit/dom-project-chaiaurcode-pg26yw?file=4-GuessTheNumber%2Findex.html)

```javaScript
let number = parseInt(Math.random() * 100 + 1);
let input = document.querySelector('#guessField');
let submit = document.querySelector('#subt');
let rem = document.querySelector('.lastResult');
let guesses = document.querySelector('.guesses');
let lowOrHi = document.querySelector('.lowOrHi');
let resultParas = document.querySelector('.resultParas');

const p = document.createElement('p');

let pre_guess = [];
let num_guess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(input.value);
    console.log(guess);
    validate(guess);
  });
}

function validate(guess) {
  if (guess === '' || guess < 0 || guess > 100 || isNaN(guess)) {
    result.innerHTML = `Please enter a valid number ${guess}`;
  } else {
    pre_guess.push(guess);
    if (num_guess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over. The random number was ${number}`);
      endGame();
    } else {
      displayGuess(guess);
      check_guess(guess);
    }
  }
}

function check_guess(guess) {
  if (guess === number) {
    displayMessage('You guessed it right.');
    endGame();
  } else if (guess < number) {
    displayMessage('Number is too Low');
  } else if (guess > number) {
    displayMessage('Number is too High');
  }
}

function displayGuess(guess) {
  input.value = '';
  guesses.innerHTML += `${guess}, `;
  num_guess++;
  rem.innerHTML = `${11 - num_guess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<span>${message}</span>`;
}

function endGame() {
  input.value = '';
  input.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame" >Start new game </h2>`;
  resultParas.appendChild(p);
  playGame = true;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    number = parseInt(Math.random() * 100 + 1);
    pre_guess = [];
    num_guess = 1;
    rem.innerHTML = `${11 - num_guess}`;
    guesses.innerHTML = '';
    input.removeAttribute('disabled');
    resultParas.removeChild(p);

    playGame = true;
  });
}
```