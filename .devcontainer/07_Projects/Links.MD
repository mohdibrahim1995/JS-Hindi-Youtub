# Projecct Related to DOLM

## Project Links

[Click Here](https://github.com/mohdibrahim1995/JS-Hindi-Youtub/blob/main/.devcontainer/07_Projects/Links.MD)

# Soultion Code
## Project 1

```javascript
const btnHolds = document.querySelectorAll('.button');
const body = document.querySelector('body');

for (let i = 0; i < btnHolds.length; i++) {
  //console.log(btnHolds[i]);
}
btnHolds.forEach(function (button) {
  //console.log(button);
  button.addEventListener('click', function (anys) {
    // console.log(anys);
    //console.log(anys.target);
    if (anys.target.id === 'grey') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'red') {
      console.log(anys.target);
      body.style.backgroundColor = "#dc143c";
    }
    if (anys.target.id === 'blue') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'yellow') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'Green') {
      body.style.backgroundColor = anys.target.id;
    }
    if (anys.target.id === 'purple') {
      body.style.backgroundColor = anys.target.id;
    }
  });
});

```

# Project2 BMI Calculator
## project code
(click Here)[https://github.com/mohdibrahim1995/JS-Hindi-Youtub/blob/main/.devcontainer/07_Projects/Links.MD]


```JavaScript
const forms = document.querySelector('form');

forms.addEventListener('submit', function (e) {
  e.preventDefault();
  const hig = parseInt(document.querySelector('#height').value);
  const wig = parseInt(document.querySelector('#weight').value);
  const res = document.querySelector('#results');
  if (wig == '' || wig <= 0 || isNaN(wig)) {
    res.innerHTML = 'Please enter valid weight value';
  } else if (hig == '' || hig <= 0 || isNaN(hig)) {
    res.innerHTML = 'Please enter valid height value';
  } else {
    const bmi = (wig / ((hig * hig) / 10000)).toFixed(2);
    //console.log(bmi);
    res.innerHTML = `${bmi}`;
    if (bmi < 18.6) {
      res.innerHTML = `Your are underWeight ${bmi}`;
      console.log(`Your are underWeight ${bmi}`);
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      res.innerHTML = `Your are Normal ${bmi}`;
      console.log(`Your are Normal ${bmi}`);
    } else {
      res.innerHTML = `Your are overWeight ${bmi}`;
      console.log(`Your are overWeight ${bmi}`);
    }
  }
});

```

# Project 3
## GetTime 
```javascript
//const test = document.getElementById('#clock');
//below will refresh function everytime
setInterval(function () {
  let d = new Date();
  console.log(d);
  clock.innerHTML = d.toLocaleTimeString();
}, 1000);

```

# project 4
## its a half code as most of the logic is same

```javascript
const radomNumber = parseInt(Math.random() * 10 + 1);

const SubmitButton = document.querySelector('#subt');
const InputFeild = document.querySelector('#guessField');
const Preguesses = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const tests = document.querySelector('.tests');

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame == true) {
  SubmitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(InputFeild.value);
    //# printing input value on the screens
    tests.innerText = guess;

    //console.log(tests.value);
    console.log(guess);
    setInterval(Validation(guess), 1000);
  });
}

function Validation(guess) {
  if (isNaN(guess) || guess < 0 || guess > 100) {
    alert(`Please Enter valid number ${guess}`);
    //return console.log(`Enter numebr is not valide ${guess}`);
  } else {
    preGuess.push(guess);
    tests.innerText = preGuess;
    console.log(preGuess);
  }
}


```








