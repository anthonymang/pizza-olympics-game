// Grabbed DOM Elements

const game = document.getElementById('game');
const form = document.getElementById('form');
let playerOne = document.getElementById('pizza-chef-1');
let playerTwo = document.getElementById('pizza-chef-2');
const introTitle = document.getElementById('intro-title');
const startButtonPlayerOne = document.getElementById('advance-player-one');
const playerOneScore = document.getElementById('player-one-score');
const playerTwoScore = document.getElementById('player-two-score');
const timer = document.getElementById('timer');


// Variables to be Changed
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;
let userArray = [];
let randPizza = [];

// DOM Assets
let startGameUserOne = document.createElement('button');
startGameUserOne.setAttribute('id', 'advance-player-one')
startGameUserOne.innerHTML = 'Start Game';

let instructHeader = document.createElement('h1');
instructHeader.innerHTML = "Instructions";
let gameInstructions = document.createElement('p');
gameInstructions.innerHTML = "Welcome to the Pizza Olympics. In today's game, two Pizza Chefs will square off to make as many pizzas as they can in one minute. Every pizza's ingredients and toppings must match the recipe exactly. Press the corresponding ingredient button to add it to the pizza. When your pizza has all the right toppings, hit the deliver button to submit it for Pizza Olympic inspection. If the pizza is the correct recipe, it will be added to your total tally. But be careful, chefs. If you mess up a pizza you will have to start the recipe from scratch. The Pizza Chef who makes the most pizzas in one minute will be crowned champion. When you're ready to start, click the button below.";
gameInstructions.style.margin = '0px 10px';

let doughButton = document.createElement('button');
doughButton.innerHTML = 'dough';
let cheeseButton = document.createElement('button');
cheeseButton.innerHTML = 'cheese';
let sauceButton = document.createElement('button');
sauceButton.innerHTML = 'sauce';
let pepperoniButton = document.createElement('button');
pepperoniButton.innerHTML = 'pepperoni';
let sausageButton = document.createElement('button');
sausageButton.innerHTML = 'sausage';
let pepperButton = document.createElement('button');
pepperButton.innerHTML = 'pepper';
let garlicButton = document.createElement('button');
garlicButton.innerHTML = 'garlic';
let onionButton = document.createElement('button');
onionButton.innerHTML = 'onion';
let tomatoButton = document.createElement('button');
tomatoButton.innerHTML = 'tomato';
let basilButton = document.createElement('button');
basilButton.innerHTML = 'basil';
let baconButton = document.createElement('button');
baconButton.innerHTML = 'bacon'
let hamButton = document.createElement('button');
hamButton.innerHTML = 'ham';
let mushroomButton = document.createElement('button');
mushroomButton.innerHTML = 'mushroom';
let pineappleButton = document.createElement('button');
pineappleButton.innerHTML = 'pineapple';

let bakeButton = document.createElement('button');
bakeButton.innerHTML = 'Bake';

timeRemaining = 60;
// timer.innerHTML = `Time: ${timeRemaining}`;

// Helper Functions

function instructionSequence (){
    game.removeChild(form);
    game.removeChild(introTitle);


    game.append(instructHeader);
    game.append(gameInstructions);
    game.append(startGameUserOne);

}

function startGameplay (){
    game.removeChild(instructHeader);
    game.removeChild(gameInstructions);
    game.removeChild(startGameUserOne)
    game.append(doughButton);
    game.append(cheeseButton);
    game.append(sauceButton);
    game.append(pepperoniButton);
    game.append(sausageButton);
    game.append(pepperButton);
    game.append(garlicButton);
    game.append(onionButton);
    game.append(tomatoButton);
    game.append(basilButton);
    game.append(baconButton);
    game.append(hamButton);
    game.append(mushroomButton);
    game.append(pineappleButton);
    game.append(bakeButton);
    pizzaArray.sample();
    countdownTimer();
}


Array.prototype.sample = function(){
    randPizza = this[Math.floor(Math.random()*this.length)];
    console.log(randPizza);
  }

function countdownTimer(){
    timer.innerHTML = `Time: ${timeRemaining}`;
    myTimer = setInterval(timeLower, 1000);
    setTimeout(timesUp, 60000);

}

function timeLower(){
    timeRemaining-=1;
    console.log('interval working')
}

function timesUp (){
    clearInterval(myTimer)
}

// Event Listeners

form.addEventListener('submit', function(e){
    e.preventDefault();
    playerOneScore.innerHTML = `${playerOne.value}: ${playerOneCurrentScore} Pizzas`;
    playerTwoScore.innerHTML = `${playerTwo.value}: ${playerTwoCurrentScore} Pizzas`;
    let playerTwoName = playerTwo.value;
    console.log('form submitted')
    // game.removeChild(introTitle);
    // game.removeChild(form);
    // game.removeChild(introTitle);
    // console.log(playerOneName, playerTwoName)
    instructionSequence();
})

bakeButton.addEventListener('click', function(){
    compareArray = userArray.sort();
    if (compareArray.length === randPizza.length && compareArray.every(function(value, index) { return value === randPizza[index]})
    ){
        alert('Nice Pizza')
        userArray = [];
        compareArray = [];
        randPizza =[];
        pizzaArray.sample();

    } else {
        alert('Try Again')
        userArray = [];
        compareArray = [];
    }
})

startGameUserOne.addEventListener('click', function(){
    startGameplay();

})

doughButton.addEventListener('click', function(){
    doughClick();
})

cheeseButton.addEventListener('click', function(){
    cheeseClick();
})

sauceButton.addEventListener('click', function(){
    sauceClick();
})

pepperoniButton.addEventListener('click', function(){
    pepperoniClick();
})

sausageButton.addEventListener('click', function(){
    sausageClick();
})

pepperButton.addEventListener('click', function(){
    pepperClick();
})

garlicButton.addEventListener('click', function(){
    garlicClick();
})

onionButton.addEventListener('click', function(){
    onionClick();
})

tomatoButton.addEventListener('click', function(){
    tomatoClick();
})

basilButton.addEventListener('click', function(){
    basilClick();
})

baconButton.addEventListener('click', function(){
    baconClick();
})

hamButton.addEventListener('click', function(){
    hamClick();
})

mushroomButton.addEventListener('click', function(){
    mushroomClick();
})

pineappleButton.addEventListener('click', function(){
    pineappleClick();
})
// array push functions

function doughClick(){
    userArray.push('dough');
}
function cheeseClick(){
    userArray.push('cheese');
}
function sauceClick(){
    userArray.push('sauce');
}
function pepperoniClick(){
    userArray.push('pepperoni');
}
function sausageClick(){
    userArray.push('sausage');
}
function pepperClick(){
    userArray.push('pepper');
}
function garlicClick(){
    userArray.push('garlic');
}
function onionClick(){
    userArray.push('onion');
}
function tomatoClick(){
    userArray.push('tomato');
}
function basilClick(){
    userArray.push('basil');
}
function baconClick(){
    userArray.push('bacon');
}
function hamClick(){
    userArray.push('ham');
}
function mushroomClick(){
    userArray.push('mushroom');
}
function pineappleClick(){
    userArray.push('pineapple');
}





// Pizza Arrays

let cheese = ['cheese', 'dough', 'sauce'];

let pepperoni = ['cheese', 'dough', 'pepperoni', 'sauce'];

let sausagePeppers = ['cheese', 'dough', 'pepper', 'sauce', 'sausage'];

let breathmint = ['cheese', 'dough', 'garlic', 'onion', 'sauce'];

let margherita  = ['basil', 'cheese', 'dough', 'garlic', 'sauce', 'tomato'];

let meatLovers = ['bacon', 'cheese', 'dough', 'ham', 'pepperoni', 'sauce', 'sausage'];

let veggie = ['cheese', 'dough', 'mushroom', 'onion', 'pepper', 'sauce', 'tomato'];

let white = ['basil', 'cheese', 'dough', 'garlic', 'tomato'];

let vegan = ['basil', 'dough', 'mushroom', 'onion', 'pepper', 'sauce',  'tomato']

let hawaiian = ['cheese', 'dough', 'ham', 'pineapple', 'sauce']

let pizzaArray = [cheese, pepperoni, sausagePeppers, breathmint, margherita, meatLovers, veggie, white, vegan, hawaiian];
