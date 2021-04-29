// Grabbed DOM Elements

const game = document.getElementById('game');
const gameLeft = document.getElementById('game-left');
const gameRight = document.getElementById('game-right');
const form = document.getElementById('form');
let playerOne = document.getElementById('pizza-chef-1');
let playerTwo = document.getElementById('pizza-chef-2');
const introTitle = document.getElementById('intro-title');
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

// DOM Assets - Created

// Advance Buttons
let startGameUserOne = document.createElement('button');
startGameUserOne.setAttribute('class', 'advance-button')
startGameUserOne.innerHTML = 'Start Game';

let startGameUserTwo = document.createElement('button');
startGameUserTwo.setAttribute('class', 'advance-button')
startGameUserTwo.innerHTML = 'Start Game';

let playAgainButton = document.createElement('button');
playAgainButton.setAttribute('class', 'advance-button')
playAgainButton.innerHTML = 'Play Again';

// Ingredient Buttons
let anchovyButton = document.createElement('button');
let cheeseButton = document.createElement('button');
let sauceButton = document.createElement('button');
let pepperoniButton = document.createElement('button');
let sausageButton = document.createElement('button');
let pepperButton = document.createElement('button');
let garlicButton = document.createElement('button');
let onionButton = document.createElement('button');
let tomatoButton = document.createElement('button');
let basilButton = document.createElement('button');
let baconButton = document.createElement('button');
let hamButton = document.createElement('button');
let mushroomButton = document.createElement('button');
let pineappleButton = document.createElement('button');


// Bake Buttons
let bakeButtonUserOne = document.createElement('button');
bakeButtonUserOne.setAttribute('class', 'bake-button')
bakeButtonUserOne.innerHTML = 'Bake';

let bakeButtonUserTwo = document.createElement('button');
bakeButtonUserTwo.setAttribute('class', 'bake-button')
bakeButtonUserTwo.innerHTML = 'Bake';

// Pizza Images

let pizzaDough = document.createElement('img')
let pizzaSauce = document.createElement('img')
let cheeseImg = document.createElement('img')
let pepperoniImg = document.createElement('img')
let sausageImg = document.createElement('img')
let pepperImg = document.createElement('img')
let garlicImg = document.createElement('img')
let onionImg = document.createElement('img')
let tomatoImg = document.createElement('img')
let basilImg = document.createElement('img')
let baconImg = document.createElement('img')
let hamImg = document.createElement('img')
let mushroomImg = document.createElement('img')
let pineappleImg = document.createElement('img')
let anchoviesImg = document.createElement('img')

// In game text
let instructHeader = document.createElement('h1');
instructHeader.setAttribute('class', 'game-text')
instructHeader.innerHTML = "Instructions";

let gameInstructions = document.createElement('p');
gameInstructions.setAttribute('class', 'game-text');
gameInstructions.innerHTML = "Welcome to the Pizza Olympics. In today's game, two Pizza Chefs will square off to make as many pizzas as they can in one minute. Every pizza's ingredients and toppings must match the recipe exactly. Press the corresponding ingredient button to add it to the pizza. When your pizza has all the right toppings, hit the deliver button to submit it for Pizza Olympic inspection. If the pizza is the correct recipe, it will be added to your total tally. But be careful, chefs. If you mess up a pizza you will have to start the recipe from scratch. The Pizza Chef who makes the most pizzas in one minute will be crowned champion. When you're ready to start, click the button below.";

let playerOneScoreRecap = document.createElement('h2')
playerOneScoreRecap.setAttribute('class', 'game-text')

let endGameMessage = document.createElement('h2');
endGameMessage.setAttribute('class', 'game-text')


// HELPER FUNCTIONS

// Remove Start Screen Form & Title
function instructionSequence (){
  
    game.removeChild(form)
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
    createIngredientButton(cheeseButton, "url('./icon-imgs/cheese-icon.png')", gameRight);
    createIngredientButton(sauceButton, "url('./icon-imgs/sauce-icon.png')", gameLeft)
    createIngredientButton(pepperoniButton, "url('./icon-imgs/pepperoni-icon.png')", gameRight)
    createIngredientButton(sausageButton, "url('./icon-imgs/sausage-icon.png')", gameLeft)
    createIngredientButton(pepperButton, "url('./icon-imgs/pepper-icon.png')", gameRight)
    createIngredientButton(garlicButton, "url('./icon-imgs/garlic-icon.png')", gameLeft)
    createIngredientButton(onionButton, "url('./icon-imgs/onion-icon.png')", gameRight)
    createIngredientButton(tomatoButton, "url('./icon-imgs/tomato-icon.png')", gameLeft)
    createIngredientButton(basilButton, "url('./icon-imgs/basil-icon.png')", gameRight)
    createIngredientButton(baconButton, "url('./icon-imgs/bacon-icon.png')", gameLeft)
    createIngredientButton(hamButton, "url('./icon-imgs/ham-icon.png')", gameRight)
    createIngredientButton(mushroomButton, "url('./icon-imgs/mushroom-icon.png')", gameLeft)
    createIngredientButton(pineappleButton, "url('./icon-imgs/pineapple-icon.png')", gameRight)
    createIngredientButton(anchovyButton, "url('./icon-imgs/anchovies-icon.png')", gameLeft)
    createPizzaImage(pizzaDough, './pizza-assets/dough-base.png', '0');
    game.append(bakeButtonUserOne);
    pizzaArray.sample();
    countdownTimerPlayerOne();

}

// Start Gameplay for Player Two - Remove instructions & start button, put in gameplay buttons

function startGameplayPlayerTwo (){
    game.removeChild(playerOneScoreRecap);
    game.removeChild(startGameUserTwo);
    gameRight.append(cheeseButton);
    gameLeft.append(sauceButton);
    gameRight.append(pepperoniButton);
    gameLeft.append(sausageButton);
    gameRight.append(pepperButton);
    gameLeft.append(garlicButton);
    gameRight.append(onionButton);
    gameLeft.append(tomatoButton);
    gameRight.append(basilButton);
    gameLeft.append(baconButton);
    gameRight.append(hamButton);
    gameLeft.append(mushroomButton);
    gameRight.append(pineappleButton);
    gameLeft.append(anchovyButton);
    game.append(pizzaDough);
    game.append(bakeButtonUserTwo);
    timeRemaining = 60;
    pizzaArray.sample();
    countdownTimerPlayerTwo();

}

// Choose Random Pizza - Run displayPizzaType to update name & ingredients list
Array.prototype.sample = function(){
    randPizza = this[Math.floor(Math.random()*this.length)];
    displayPizzaType();
  }

// Run Countdown Timer - Set time to 60, Run set interval every 1 second, timeout after 60 seconds
function countdownTimerPlayerOne(){
    timer.innerText = `Time: ${timeRemaining}`;
    myTimer = setInterval(timeLower, 1000);
    setTimeout(timesUpPlayerOne, 60000);
}

// Callback function for set interval - takes time down by 1 and updates screen with new time
function timeLower(){
    timeRemaining-=1;
    timer.innerText = `Time: ${timeRemaining}`;
}

// Callback function for set Timeout - clear interval timer, remove buttons, add text and new buttons
function timesUpPlayerOne (){
    clearInterval(myTimer);
    gameLeft.removeChild(anchovyButton);
    gameRight.removeChild(cheeseButton);
    gameLeft.removeChild(sauceButton);
    gameRight.removeChild(pepperoniButton);
    gameLeft.removeChild(sausageButton);
    gameRight.removeChild(pepperButton);
    gameLeft.removeChild(garlicButton);
    gameRight.removeChild(onionButton);
    gameLeft.removeChild(tomatoButton);
    gameRight.removeChild(basilButton);
    gameLeft.removeChild(baconButton);
    gameRight.removeChild(hamButton);
    gameLeft.removeChild(mushroomButton);
    gameRight.removeChild(pineappleButton);
    while (game.firstChild){
        game.removeChild(game.lastChild);
    }
    
    pizzaType.innerText = '';
    ingredientList.innerText = '';
    timer.innerText = '';
    playerOneScoreRecap.innerText = `${playerOne.value} made ${playerOneCurrentScore} pizzas. Now it's your turn, ${playerTwo.value}. Do you have what it takes to be the champion?`
    game.append(playerOneScoreRecap);
    game.append(startGameUserTwo);
}


// Run Countdown Timer - Set time to 60, Run set interval every 1 second, timeout after 60 seconds
function countdownTimerPlayerTwo(){
    timer.innerText = `Time: ${timeRemaining}`;
    myTimer = setInterval(timeLower, 1000);
    setTimeout(timesUpPlayerTwo, 60000);
}

// Callback function for set Timeout - clear interval timer, remove buttons, add text and new buttons
function timesUpPlayerTwo (){
    clearInterval(myTimer);
    gameLeft.removeChild(anchovyButton);
    gameRight.removeChild(cheeseButton);
    gameLeft.removeChild(sauceButton);
    gameRight.removeChild(pepperoniButton);
    gameLeft.removeChild(sausageButton);
    gameRight.removeChild(pepperButton);
    gameLeft.removeChild(garlicButton);
    gameRight.removeChild(onionButton);
    gameLeft.removeChild(tomatoButton);
    gameRight.removeChild(basilButton);
    gameLeft.removeChild(baconButton);
    gameRight.removeChild(hamButton);
    gameLeft.removeChild(mushroomButton);
    gameRight.removeChild(pineappleButton);
    while (game.firstChild){
        game.removeChild(game.lastChild);
    }
    
    pizzaType.innerText = '';
    ingredientList.innerText = '';
    timer.innerText = '';
    determineWinner(playerOneCurrentScore, playerTwoCurrentScore);
    game.append(playAgainButton);
}

// compare scores and generate proper winner message
function determineWinner(score1, score2){
    if (score1 > score2){
        endGameMessage.innerHTML = `With a grand total of ${score1} pizzas, ${playerOne.value} wins.<br>Congrats ${playerOne.value}!`;
    } else if (score1 < score2) {
        endGameMessage.innerHTML = `With a grand total of ${score2} pizzas, ${playerTwo.value} wins.<br>Congrats ${playerTwo.value}!`;
    } else if (score1 == score2){
        endGameMessage.innerHTML = `It's a tie!<br>Play again to determine the true champion`;
    }
    game.append(endGameMessage);
}


// compare pizza created by user to pizza array given. add score to player 1
function playerOneBake() {
    compareArray = userArray.sort();
    if (compareArray.length === randPizza.length && compareArray.every(function(value, index) { return value === randPizza[index]})
    ){
        playerOneCurrentScore++;
        playerOneScore.innerHTML = `${playerOne.value}<br>Pizzas: ${playerOneCurrentScore}`;        
        pizzaType.innerText = '';
        ingredientList.innerText = "Nice pizza, how about another?"
        setTimeout(PizzaReset, 1000)
        userArray = [];
        compareArray = [];
        randPizza =[];

    } else {
        pizzaType.innerText = ':('
        ingredientList.innerText = "Sorry, that's the wrong pizza. Try again"
        setTimeout(PizzaReset, 1500)
        userArray = [];
        compareArray = [];
    }
    while (game.firstChild){
        game.removeChild(game.lastChild);
    }
    game.append(pizzaDough);
    game.append(bakeButtonUserOne);

}

// compare pizza created by user to pizza array given. add score to player 2
function playerTwoBake() {
    compareArray = userArray.sort();
    if (compareArray.length === randPizza.length && compareArray.every(function(value, index) { return value === randPizza[index]})
    ){
        playerTwoCurrentScore++;
        playerTwoScore.innerHTML = `${playerTwo.value}<br>Pizzas: ${playerTwoCurrentScore}`;
        pizzaType.innerText = '';
        ingredientList.innerText = "Nice pizza, how about another?"
        setTimeout(PizzaReset, 1000)
        userArray = [];
        compareArray = [];
        randPizza =[];

    } else {
        pizzaType.innerText = ':('
        ingredientList.innerText = "Sorry, that's the wrong pizza. Try again"
        setTimeout(PizzaReset, 1500)
        userArray = [];
        compareArray = [];
    }
        while (game.firstChild){
        game.removeChild(game.lastChild);
    }
    game.append(pizzaDough);
    game.append(bakeButtonUserTwo);
}


function PizzaReset(){
    pizzaArray.sample();
}

// Function for displaying requested pizza name and ingredients
function displayPizzaType(){
    if (pizzaArray.indexOf(randPizza) === 0){
        pizzaType.innerText = 'Cheese';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Cheese';
    } else if (pizzaArray.indexOf(randPizza) === 1){
        pizzaType.innerText = 'Pepperoni';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Cheese, Pepperoni';
    } else if (pizzaArray.indexOf(randPizza) === 2){
        pizzaType.innerText = 'Sausage & Peppers';
        ingredientList.innerHTML = 'Sauce, Cheese, Sausage, Peppers';
    } else if (pizzaArray.indexOf(randPizza) === 3){
        pizzaType.innerText = 'Breath-mint';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Cheese, Anchovies, Garlic, Onion';
    } else if (pizzaArray.indexOf(randPizza) === 4){
        pizzaType.innerText = 'Marg';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Cheese, Basil, Garlic, Tomato';
    } else if (pizzaArray.indexOf(randPizza) === 5){
        pizzaType.innerText = 'Meat Lovers';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Cheese, Sausage, Pepperoni, Bacon, Ham';
    } else if (pizzaArray.indexOf(randPizza) === 6){
        pizzaType.innerText = 'Veggie';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Cheese, Mushroom, Onion, Peppers, Tomato';
    } else if (pizzaArray.indexOf(randPizza) === 7){
        pizzaType.innerText = 'White';
        ingredientList.innerHTML = 'Ingredients<br>Cheese, Basil, Tomato, Garlic';
    } else if (pizzaArray.indexOf(randPizza) === 8){
        pizzaType.innerText = 'Vegan';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Basil, Tomato, Mushroom, Onion, Pepper';
    } else if (pizzaArray.indexOf(randPizza) === 9){
        pizzaType.innerText = 'Hawaiian';
        ingredientList.innerHTML = 'Ingredients<br>Sauce, Cheese, Ham, Pineapple';
    } 

}

// function to reset screen to default
function playAgain(){
    playerOne.value = '';
    playerOneScore.innerText = '';
    playerOneCurrentScore = 0;
    playerTwo.value = '';
    playerTwoScore.innerText = '';
    playerTwoCurrentScore = 0;
    game.removeChild(endGameMessage);
    game.removeChild(playAgainButton);
    game.appendChild(introTitle);
    game.appendChild(form);
}

// Create Element Functions

function createPizzaImage(ingredientName, imgSrc, zIndex) {
    ingredientName.src = imgSrc;
    ingredientName.style.position = 'absolute';
    ingredientName.style.top = '50%';
    ingredientName.style.left = '50%';
    ingredientName.style.transform = 'translate(-50%, -50%)';
    ingredientName.style.zIndex = zIndex;
    game.append(ingredientName);
}

function createIngredientButton(buttonName, backgroundImageSrc, appendLocation){
    buttonName.setAttribute('class', 'ingredient-button')
    buttonName.style.backgroundImage = backgroundImageSrc;
    appendLocation.append(buttonName);
}

// Event Listeners

// Event listener on form submit - places player names in top left and right, runs introduction function
form.addEventListener('submit', function(e){
    e.preventDefault();
    playerOneScore.innerHTML = `${playerOne.value}`
    playerTwoScore.innerHTML = `${playerTwo.value}`;
    let playerTwoName = playerTwo.value;
    // game.removeChild(introTitle);
    // game.removeChild(form);
    // game.removeChild(introTitle);
    // console.log(playerOneName, playerTwoName)
    instructionSequence();
})

// Runs on click of bake button when player submits pizza for judgement - function Player One Bake
bakeButtonUserOne.addEventListener('click', function(){
    playerOneBake();
})

bakeButtonUserTwo.addEventListener('click', function(){
    playerTwoBake();
})

// Starts Gameplay for Player 1 - adding ingredients and bake button through function
startGameUserOne.addEventListener('click', function(){
    startGameplayPlayerOne();

})

// Starts Gameplay for Player 1 - adding ingredients and bake button through function
startGameUserTwo.addEventListener('click', function(){
    startGameplayPlayerTwo();

})

// Play Again
playAgainButton.addEventListener('click', function(){
    playAgain();
})

// Ingredient Buttons - add ingredient to array when clicked

anchovyButton.addEventListener('click', function(){
    anchovyClick();
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

function anchovyClick(){
    userArray.push('anchovies');
    createPizzaImage(anchoviesImg, './pizza-assets/anchovies.png', '3');
}
function cheeseClick(){
    userArray.push('cheese');
    createPizzaImage(cheeseImg, './pizza-assets/cheese.png', '2');
}
function sauceClick(){
    userArray.push('sauce');
    createPizzaImage(pizzaSauce, './pizza-assets/sauce.png', '1');
}
function pepperoniClick(){
    userArray.push('pepperoni');
    createPizzaImage(pepperoniImg, './pizza-assets/pepperoni.png', '3');
}
function sausageClick(){
    userArray.push('sausage');
    createPizzaImage(sausageImg, './pizza-assets/sausage.png', '3');
}
function pepperClick(){
    userArray.push('pepper');
    createPizzaImage(pepperImg, './pizza-assets/pepper.png', '3');
}
function garlicClick(){
    userArray.push('garlic');
    createPizzaImage(garlicImg, './pizza-assets/garlic.png', '3');
}
function onionClick(){
    userArray.push('onion');
    createPizzaImage(onionImg, './pizza-assets/onion.png', '3');
}
function tomatoClick(){
    userArray.push('tomato');
    createPizzaImage(tomatoImg, './pizza-assets/tomato.png', '3');;
}

function basilClick(){
    userArray.push('basil');
    createPizzaImage(basilImg, './pizza-assets/basil.png', '3');
}

function baconClick(){
    userArray.push('bacon');
    createPizzaImage(baconImg, './pizza-assets/bacon.png', '3');
}

function hamClick(){
    userArray.push('ham');
    createPizzaImage(hamImg, './pizza-assets/ham.png', '3');
}

function mushroomClick(){
    userArray.push('mushroom');
    createPizzaImage(mushroomImg, './pizza-assets/mushroom.png', '3');
}
function pineappleClick(){
    userArray.push('pineapple');
    createPizzaImage(pineappleImg, './pizza-assets/pineapple.png', '3');
}


// Pizza Arrays

let cheese = ['cheese', 'sauce'];

let pepperoni = ['cheese', 'pepperoni', 'sauce'];

let sausagePeppers = ['cheese', 'pepper', 'sauce', 'sausage'];

let breathmint = ['anchovies', 'cheese', 'garlic', 'onion', 'sauce'];

let margherita  = ['basil', 'cheese', 'garlic', 'sauce', 'tomato'];

let meatLovers = ['bacon', 'cheese', 'ham', 'pepperoni', 'sauce', 'sausage'];

let veggie = ['cheese', 'mushroom', 'onion', 'pepper', 'sauce', 'tomato'];

let white = ['basil', 'cheese', 'garlic', 'tomato'];

let vegan = ['basil', 'mushroom', 'onion', 'pepper', 'sauce',  'tomato']

let hawaiian = ['cheese', 'ham', 'pineapple', 'sauce']

let pizzaArray = [cheese, pepperoni, sausagePeppers, breathmint, margherita, meatLovers, veggie, white, vegan, hawaiian];
