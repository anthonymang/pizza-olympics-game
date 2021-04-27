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
const pizzaType = document.getElementById('pizza-type')
const ingredientList = document.getElementById('ingredient-list');


// Variables to be Changed
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;
let userArray = [];
let randPizza = [];
let timeRemaining = 60;

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

let playerOneScoreRecap = document.createElement('h2')
// playerOneScoreRecap.innerText = `${playerOne.value} made ${playerOneCurrentScore} pizzas. Now it's your turn, ${playerTwo.value}. Do you have what it takes to be the champion?`

let startGameUserTwo = document.createElement('button');
startGameUserTwo.setAttribute('id', 'advance-player-Two')
startGameUserTwo.innerHTML = 'Start Game';

// HELPER FUNCTIONS

// Remove Start Screen Form & Title
function instructionSequence (){
    game.removeChild(form);
    game.removeChild(introTitle);


    game.append(instructHeader);
    game.append(gameInstructions);
    game.append(startGameUserOne);

}

// Start Gameplay for Player One - Remove instructions & start button, put in gameplay buttons
function startGameplayPlayerOne (){
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

// Choose Random Pizza - Run displayPizzaType to update name & ingredients list
Array.prototype.sample = function(){
    randPizza = this[Math.floor(Math.random()*this.length)];
    console.log(randPizza);
    displayPizzaType();
  }

// Run Countdown Timer - Set time to 60, Run set interval every 1 second, timeout after 60 seconds
function countdownTimer(){
    timer.innerText = `Time: ${timeRemaining}`;
    myTimer = setInterval(timeLower, 1000);
    setTimeout(timesUp, 60000);
}

// Callback function for set interval - takes time down by 1 and updates screen with new time
function timeLower(){
    // console.log('interval working')
    // console.log(timeRemaining);
    timeRemaining-=1;
    timer.innerText = `Time: ${timeRemaining}`;
}

// Callback function for set Timeout - clear interval timer, remove buttons, add text and new buttons
function timesUp (){
    clearInterval(myTimer);
    game.removeChild(doughButton);
    game.removeChild(cheeseButton);
    game.removeChild(sauceButton);
    game.removeChild(pepperoniButton);
    game.removeChild(sausageButton);
    game.removeChild(pepperButton);
    game.removeChild(garlicButton);
    game.removeChild(onionButton);
    game.removeChild(tomatoButton);
    game.removeChild(basilButton);
    game.removeChild(baconButton);
    game.removeChild(hamButton);
    game.removeChild(mushroomButton);
    game.removeChild(pineappleButton);
    game.removeChild(bakeButton);
    pizzaType.innerText = '';
    ingredientList.innerText = '';
    timer.innerText = '';
    // let playerOneScoreRecap = document.createElement('h2')
    playerOneScoreRecap.innerText = `${playerOne.value} made ${playerOneCurrentScore} pizzas. Now it's your turn, ${playerTwo.value}. Do you have what it takes to be the champion?`
    game.append(playerOneScoreRecap);
    game.append(startGameUserTwo);
}

// compare pizza created by user to pizza array given. add score to player 1
function playerOneBake() {
    compareArray = userArray.sort();
    if (compareArray.length === randPizza.length && compareArray.every(function(value, index) { return value === randPizza[index]})
    ){
        playerOneCurrentScore++;
        playerOneScore.innerHTML = `${playerOne.value}: ${playerOneCurrentScore} Pizzas`;
        // playerTwoScore.innerHTML = `${playerTwo.value}: ${playerTwoCurrentScore} Pizzas`;
        
        pizzaType.innerText = '';
        userArray = [];
        compareArray = [];
        randPizza =[];
        pizzaArray.sample();

    } else {
        pizzaType.innerText = ':('
        ingredientList.innerText = "Sorry, that's the wrong pizza. Try again"
        setTimeout(wrongPizzaReset, 1500)
        userArray = [];
        compareArray = [];
    }
}

function wrongPizzaReset(){
    pizzaArray.sample();
}

// Function for displaying requested pizza name and ingredients
function displayPizzaType(){
    if (pizzaArray.indexOf(randPizza) === 0){
        pizzaType.innerText = 'Cheese';
        ingredientList.innerText = 'Dough, Sauce, Cheese';
    } else if (pizzaArray.indexOf(randPizza) === 1){
        pizzaType.innerText = 'Pepperoni';
        ingredientList.innerText = 'Dough, Sauce, Cheese, Pepperoni';
    } else if (pizzaArray.indexOf(randPizza) === 2){
        pizzaType.innerText = 'Sausage & Peppers';
        ingredientList.innerText = 'Dough, Sauce, Cheese, Sausage, Peppers';
    } else if (pizzaArray.indexOf(randPizza) === 3){
        pizzaType.innerText = 'Breathmint';
        ingredientList.innerText = 'Dough, Sauce, Cheese, Garlic, Onion';
    } else if (pizzaArray.indexOf(randPizza) === 4){
        pizzaType.innerText = 'Margherita';
        ingredientList.innerText = 'Dough, Sauce, Cheese, Basil, Garlic, Tomato';
    } else if (pizzaArray.indexOf(randPizza) === 5){
        pizzaType.innerText = 'Meat Lovers';
        ingredientList.innerText = 'Dough, Sauce, Cheese, Sausage, Pepperoni, Bacon, Ham';
    } else if (pizzaArray.indexOf(randPizza) === 6){
        pizzaType.innerText = 'Veggie';
        ingredientList.innerText = 'Dough, Sauce, Cheese, Mushroom, Onion, Peppers, Tomato';
    } else if (pizzaArray.indexOf(randPizza) === 7){
        pizzaType.innerText = 'White';
        ingredientList.innerText = 'Dough, Cheese, Basil, Tomato, Garlic';
    } else if (pizzaArray.indexOf(randPizza) === 8){
        pizzaType.innerText = 'Vegan';
        ingredientList.innerText = 'Dough, Sauce, Basil, Tomato, Mushroom, Onion, Pepper';
    } else if (pizzaArray.indexOf(randPizza) === 9){
        pizzaType.innerText = 'Hawaiian';
        ingredientList.innerText = 'Dough, Sauce, Cheese, Ham, Pineapple';
    } 

}

// Event Listeners

// Event listener on form submit - places player names in top left and right, runs introduction function
form.addEventListener('submit', function(e){
    e.preventDefault();
    playerOneScore.innerHTML = `${playerOne.value}`
    playerTwoScore.innerHTML = `${playerTwo.value}`;
    let playerTwoName = playerTwo.value;
    console.log('form submitted')
    // game.removeChild(introTitle);
    // game.removeChild(form);
    // game.removeChild(introTitle);
    // console.log(playerOneName, playerTwoName)
    instructionSequence();
})

// Runs on click of bake button when player submits pizza for judgement - function Player One Bake
bakeButton.addEventListener('click', function(){
    playerOneBake();
})

// Starts Gameplay for Player 1 - adding ingredients and bake button through function
startGameUserOne.addEventListener('click', function(){
    startGameplayPlayerOne();

})

// Ingredient Buttons - add ingredient to array when clicked

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
