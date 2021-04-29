// Grabbed DOM Elements

const game = document.getElementById('game');
const gameLeft = document.getElementById('game-left');
const gameRight = document.getElementById('game-right');
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
const startButton = document.getElementById('start-button')
const chefNames = document.querySelectorAll('.chefNames')

// Variables to be Changed
let playerOneCurrentScore = 0;
let playerTwoCurrentScore = 0;
let userArray = [];
let randPizza = [];
let timeRemaining = 60;

// DOM Assets - Created
let startGameUserOne = document.createElement('button');
startGameUserOne.setAttribute('id', 'advance-player-one')
startGameUserOne.innerHTML = 'Start Game';
startGameUserOne.style.height = '40px';
startGameUserOne.style.width = '175px';
startGameUserOne.style.fontSize = '30px';
startGameUserOne.style.fontFamily = "'Trebuchet MS', sans-serif"
startGameUserOne.style.borderRadius= '10px';

let startGameUserTwo = document.createElement('button');
startGameUserTwo.setAttribute('id', 'advance-player-Two')
startGameUserTwo.innerHTML = 'Start Game';
startGameUserTwo.style.height = '40px';
startGameUserTwo.style.width = '175px';
startGameUserTwo.style.fontSize = '30px';
startGameUserTwo.style.fontFamily = "'Trebuchet MS', sans-serif"
startGameUserTwo.style.borderRadius= '10px';


let instructHeader = document.createElement('h1');
instructHeader.innerHTML = "Instructions";
let gameInstructions = document.createElement('p');
gameInstructions.style.fontFamily = "'Trebuchet MS', sans-serif";
gameInstructions.innerHTML = "Welcome to the Pizza Olympics. In today's game, two Pizza Chefs will square off to make as many pizzas as they can in one minute. Every pizza's ingredients and toppings must match the recipe exactly. Press the corresponding ingredient button to add it to the pizza. When your pizza has all the right toppings, hit the deliver button to submit it for Pizza Olympic inspection. If the pizza is the correct recipe, it will be added to your total tally. But be careful, chefs. If you mess up a pizza you will have to start the recipe from scratch. The Pizza Chef who makes the most pizzas in one minute will be crowned champion. When you're ready to start, click the button below.";
gameInstructions.style.margin = '10px 10px';

let anchovyButton = document.createElement('button');
anchovyButton.setAttribute('class', 'ingredient-button')
anchovyButton.style.height ='50px'
anchovyButton.style.width ='50px';
anchovyButton.style.backgroundImage = "url('./icon-imgs/anchovies-icon.png')"; 
anchovyButton.style.backgroundSize = '100%';

let cheeseButton = document.createElement('button');
cheeseButton.setAttribute('class', 'ingredient-button')
cheeseButton.style.height ='50px';
cheeseButton.style.width ='50px';
cheeseButton.style.backgroundImage = "url('./icon-imgs/cheese-icon.png')"; 
cheeseButton.style.backgroundSize = '100%';

let sauceButton = document.createElement('button');
sauceButton.setAttribute('class', 'ingredient-button')
sauceButton.style.height ='50px';
sauceButton.style.width ='50px';
sauceButton.style.backgroundImage = "url('./icon-imgs/sauce-icon.png')"; 
sauceButton.style.backgroundSize = '100%';

let pepperoniButton = document.createElement('button');
pepperoniButton.setAttribute('class', 'ingredient-button')
pepperoniButton.style.height ='50px';
pepperoniButton.style.width ='50px';
pepperoniButton.style.backgroundImage = "url('./icon-imgs/pepperoni-icon.png')"; 
pepperoniButton.style.backgroundSize = '100%';

let sausageButton = document.createElement('button');
sausageButton.setAttribute('class', 'ingredient-button')
sausageButton.style.height ='50px';
sausageButton.style.width ='50px';
sausageButton.style.backgroundImage = "url('./icon-imgs/sausage-icon.png')"; 
sausageButton.style.backgroundSize = '100%';

let pepperButton = document.createElement('button');
pepperButton.setAttribute('class', 'ingredient-button')
pepperButton.style.height ='50px';
pepperButton.style.width ='50px';
pepperButton.style.backgroundImage = "url('./icon-imgs/pepper-icon.png')"; 
pepperButton.style.backgroundSize = '100%';

let garlicButton = document.createElement('button');
garlicButton.setAttribute('class', 'ingredient-button')
garlicButton.style.height ='50px';
garlicButton.style.width ='50px';
garlicButton.style.backgroundImage = "url('./icon-imgs/garlic-icon.png')"; 
garlicButton.style.backgroundSize = '100%';

let onionButton = document.createElement('button');
onionButton.setAttribute('class', 'ingredient-button')
onionButton.style.height ='50px';
onionButton.style.width ='50px';
onionButton.style.backgroundImage = "url('./icon-imgs/onion-icon.png')"; 
onionButton.style.backgroundSize = '100%';


let tomatoButton = document.createElement('button');
tomatoButton.setAttribute('class', 'ingredient-button')
tomatoButton.style.height ='50px';
tomatoButton.style.width ='50px';
tomatoButton.style.backgroundImage = "url('./icon-imgs/tomato-icon.png')"; 
tomatoButton.style.backgroundSize = '100%';

let basilButton = document.createElement('button');
basilButton.setAttribute('class', 'ingredient-button')
basilButton.style.height ='50px';
basilButton.style.width ='50px';
basilButton.style.backgroundImage = "url('./icon-imgs/basil-icon.png')"; 
basilButton.style.backgroundSize = '100%';


let baconButton = document.createElement('button');
baconButton.setAttribute('class', 'ingredient-button')
baconButton.style.height ='50px';
baconButton.style.width ='50px';
baconButton.style.backgroundImage = "url('./icon-imgs/bacon-icon.png')"; 
baconButton.style.backgroundSize = '100%';

let hamButton = document.createElement('button');
hamButton.setAttribute('class', 'ingredient-button')
hamButton.style.height ='50px';
hamButton.style.width ='50px';
hamButton.style.backgroundImage = "url('./icon-imgs/ham-icon.png')"; 
hamButton.style.backgroundSize = '100%';

let mushroomButton = document.createElement('button');
mushroomButton.setAttribute('class', 'ingredient-button')
mushroomButton.style.height ='50px';
mushroomButton.style.width ='50px';
mushroomButton.style.backgroundImage = "url('./icon-imgs/mushroom-icon.png')"; 
mushroomButton.style.backgroundSize = '100%';

let pineappleButton = document.createElement('button');
pineappleButton.setAttribute('class', 'ingredient-button')
pineappleButton.style.height ='50px';
pineappleButton.style.width ='50px';
pineappleButton.style.backgroundImage = "url('./icon-imgs/pineapple-icon.png')"; 
pineappleButton.style.backgroundSize = '100%';

let bakeButtonUserOne = document.createElement('button');
bakeButtonUserOne.innerHTML = 'Bake';
bakeButtonUserOne.style.position = 'absolute';
bakeButtonUserOne.style.top = '75%'
bakeButtonUserOne.style.left = '50%'
bakeButtonUserOne.style.transform = 'translate(-50%, -50%)'
bakeButtonUserOne.style.height = '40px'
bakeButtonUserOne.style.width = '100px';
bakeButtonUserOne.style.fontFamily = "'Trebuchet MS', sans-serif";
bakeButtonUserOne.style.fontSize = '30px';
bakeButtonUserOne.style.borderRadius = '10px';

let bakeButtonUserTwo = document.createElement('button');
bakeButtonUserTwo.innerHTML = 'Bake';
bakeButtonUserTwo.style.position = 'absolute';
bakeButtonUserTwo.style.top = '75%'
bakeButtonUserTwo.style.left = '50%'
bakeButtonUserTwo.style.transform = 'translate(-50%, -50%)'
bakeButtonUserTwo.style.height = '40px'
bakeButtonUserTwo.style.width = '100px';
bakeButtonUserTwo.style.fontFamily = "'Trebuchet MS', sans-serif";
bakeButtonUserTwo.style.fontSize = '30px';
bakeButtonUserTwo.style.borderRadius = '10px';

let playAgainButton = document.createElement('button');
playAgainButton.innerHTML = 'Play Again';
playAgainButton.style.height = '40px'
playAgainButton.style.width = '175px';
playAgainButton.style.fontFamily = "'Trebuchet MS', sans-serif";
playAgainButton.style.fontSize = '30px';
playAgainButton.style.borderRadius = '10px';

// Pizza Images

let pizzaDough = document.createElement('img')
pizzaDough.src = './pizza-assets/dough-base.png'
pizzaDough.style.position = 'absolute';
pizzaDough.style.top = '50%';
pizzaDough.style.left = '50%';
pizzaDough.style.transform = 'translate(-50%, -50%)'
pizzaDough.style.zIndex = '0'

let pizzaSauce = document.createElement('img')
pizzaSauce.src = './pizza-assets/sauce.png';
pizzaSauce.style.position = 'absolute';
pizzaSauce.style.top = '50%';
pizzaSauce.style.left = '50%';
pizzaSauce.style.transform = 'translate(-50%, -50%)'
pizzaSauce.style.zIndex = '1'

let cheeseImg = document.createElement('img')
cheeseImg.src = './pizza-assets/cheese.png';
cheeseImg.style.position = 'absolute';
cheeseImg.style.top = '50%';
cheeseImg.style.left = '50%';
cheeseImg.style.transform = 'translate(-50%, -50%)'
cheeseImg.style.zIndex = '2'

let pepperoniImg = document.createElement('img')
pepperoniImg.src = './pizza-assets/pepperoni.png';
pepperoniImg.style.position = 'absolute';
pepperoniImg.style.top = '50%';
pepperoniImg.style.left = '50%';
pepperoniImg.style.transform = 'translate(-50%, -50%)';
pepperoniImg.style.zIndex = '3'

let sausageImg = document.createElement('img')
sausageImg.src = './pizza-assets/sausage.png';
sausageImg.style.position = 'absolute';
sausageImg.style.top = '50%';
sausageImg.style.left = '50%';
sausageImg.style.transform = 'translate(-50%, -50%)';
sausageImg.style.zIndex = '3'

let pepperImg = document.createElement('img')
pepperImg.src = './pizza-assets/pepper.png';
pepperImg.style.position = 'absolute';
pepperImg.style.top = '50%';
pepperImg.style.left = '50%';
pepperImg.style.transform = 'translate(-50%, -50%)';
pepperImg.style.zIndex = '3'

let garlicImg = document.createElement('img')
garlicImg.src = './pizza-assets/garlic.png';
garlicImg.style.position = 'absolute';
garlicImg.style.top = '50%';
garlicImg.style.left = '50%';
garlicImg.style.transform = 'translate(-50%, -50%)';
garlicImg.style.zIndex = '3'

let onionImg = document.createElement('img')
onionImg.src = './pizza-assets/onion.png';
onionImg.style.position = 'absolute';
onionImg.style.top = '50%';
onionImg.style.left = '50%';
onionImg.style.transform = 'translate(-50%, -50%)';
onionImg.style.zIndex = '3'

let tomatoImg = document.createElement('img')
tomatoImg.src = './pizza-assets/tomato.png';
tomatoImg.style.position = 'absolute';
tomatoImg.style.top = '50%';
tomatoImg.style.left = '50%';
tomatoImg.style.transform = 'translate(-50%, -50%)';
tomatoImg.style.zIndex = '3'

let basilImg = document.createElement('img')
basilImg.src = './pizza-assets/basil.png';
basilImg.style.position = 'absolute';
basilImg.style.top = '50%';
basilImg.style.left = '50%';
basilImg.style.transform = 'translate(-50%, -50%)';
basilImg.style.zIndex = '3'

let baconImg = document.createElement('img')
baconImg.src = './pizza-assets/bacon.png';
baconImg.style.position = 'absolute';
baconImg.style.top = '50%';
baconImg.style.left = '50%';
baconImg.style.transform = 'translate(-50%, -50%)';
baconImg.style.zIndex = '3'

let hamImg = document.createElement('img')
hamImg.src = './pizza-assets/ham.png';
hamImg.style.position = 'absolute';
hamImg.style.top = '50%';
hamImg.style.left = '50%';
hamImg.style.transform = 'translate(-50%, -50%)';
hamImg.style.zIndex = '3'

let mushroomImg = document.createElement('img')
mushroomImg.src = './pizza-assets/mushroom.png';
mushroomImg.style.position = 'absolute';
mushroomImg.style.top = '50%';
mushroomImg.style.left = '50%';
mushroomImg.style.transform = 'translate(-50%, -50%)';
mushroomImg.style.zIndex = '3'

let pineappleImg = document.createElement('img')
pineappleImg.src = './pizza-assets/pineapple.png';
pineappleImg.style.position = 'absolute';
pineappleImg.style.top = '50%';
pineappleImg.style.left = '50%';
pineappleImg.style.transform = 'translate(-50%, -50%)';
pineappleImg.style.zIndex = '3'

let anchoviesImg = document.createElement('img')
anchoviesImg.src = './pizza-assets/anchovies.png';
anchoviesImg.style.position = 'absolute';
anchoviesImg.style.top = '50%';
anchoviesImg.style.left = '50%';
anchoviesImg.style.transform = 'translate(-50%, -50%)';
anchoviesImg.style.zIndex = '3'


let playerOneScoreRecap = document.createElement('h2')
playerOneScoreRecap.style.fontFamily = "'Trebuchet MS', sans-serif"
playerOneScoreRecap.style.margin = "auto 10";
// playerOneScoreRecap.innerText = `${playerOne.value} made ${playerOneCurrentScore} pizzas. Now it's your turn, ${playerTwo.value}. Do you have what it takes to be the champion?`

let endGameMessage = document.createElement('h2');
endGameMessage.style.fontFamily = "'Trebuchet MS', sans-serif"
endGameMessage.style.margin = "auto 10";


// HELPER FUNCTIONS

// Remove Start Screen Form & Title
function instructionSequence (){
  
    game.removeChild(form)
    game.removeChild(introTitle);
    // game.removeChild(startButton)

    game.append(instructHeader);
    game.append(gameInstructions);
    game.append(startGameUserOne);

}

// Start Gameplay for Player One - Remove instructions & start button, put in gameplay buttons
function startGameplayPlayerOne (){
    game.removeChild(instructHeader);
    game.removeChild(gameInstructions);
    game.removeChild(startGameUserOne)
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
    console.log(randPizza);
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
    // console.log('interval working')
    // console.log(timeRemaining);
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
    // let playerOneScoreRecap = document.createElement('h2')
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
    // let playerOneScoreRecap = document.createElement('h2')
    determineWinner(playerOneCurrentScore, playerTwoCurrentScore);
    game.append(playAgainButton);
}

// compare scores and generate proper winner message
function determineWinner(score1, score2){
    if (score1 > score2){
        endGameMessage.innerText = `With a grand total of ${score1} pizzas, ${playerOne.value} wins. Congrats ${playerOne.value}!`;
    } else if (score1 < score2) {
        endGameMessage.innerText = `With a grand total of ${score2} pizzas, ${playerTwo.value} wins. Congrats ${playerTwo.value}!`;
    } else if (score1 == score2){
        endGameMessage.innerText = `It's a tie! Play again to determine the true champion`;
    }
    game.append(endGameMessage);
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
        playerTwoScore.innerHTML = `${playerTwo.value}: ${playerTwoCurrentScore} Pizzas`;
        
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
    game.remove(endGameMessage);
    game.remove(playAgainButton);
    game.appendChild(introTitle);
    game.appendChild(form);
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
    game.append(anchoviesImg)
}
function cheeseClick(){
    userArray.push('cheese');
    game.append(cheeseImg);
}
function sauceClick(){
    userArray.push('sauce');
    game.append(pizzaSauce);
}
function pepperoniClick(){
    userArray.push('pepperoni');
    game.append(pepperoniImg);
}
function sausageClick(){
    userArray.push('sausage');
    game.append(sausageImg)
}
function pepperClick(){
    userArray.push('pepper');
    game.append(pepperImg);
}
function garlicClick(){
    userArray.push('garlic');
    game.append(garlicImg);
}
function onionClick(){
    userArray.push('onion');
    game.append(onionImg);
}
function tomatoClick(){
    userArray.push('tomato');
    game.append(tomatoImg);
}

function basilClick(){
    userArray.push('basil');
    game.append(basilImg);
}

function baconClick(){
    userArray.push('bacon');
    game.append(baconImg)
}

function hamClick(){
    userArray.push('ham');
    game.append(hamImg)
}

function mushroomClick(){
    userArray.push('mushroom');
    game.append(mushroomImg)
}
function pineappleClick(){
    userArray.push('pineapple');
    game.append(pineappleImg)
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

console.log(userArray);