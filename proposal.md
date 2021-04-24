# Proposal of Game

## Pizza Olympics
### Game Concept
Welcome to the Pizza Olympics. Two Pizza Chefs compete head to head to create as many pizzas as they can in one minute.

### Gameplay Walkthrough
- Start screen - both Pizza Chefs (users) enter their name into form field.
- Pizza Chef 1 is presented with a start button & instructions.
- When Pizza Chef 1 presses start button, a countdown appears to start the game.
- Game start screen includes - ingredient list, add ingredient buttons, picture of pizza type, deliver button
- Pizza Chef must add corresponding ingredients to pizza by clicking and click deliver button.
- If pizza matches ingredient list, Pizza Chef 1 score goes up by one and new pizza list . If pizza does not match, pizza is reset for user to start from scratch
- Pizza Chef 1 makes pizzas for 1 minute, final score gets logged.
- Pizza Chef 2 is presented with start button & instructions.
- Pizza Chef 2 plays game, score is logged.
- Game compares two scores, Pizza Chef with higher score is declared winner.
- Play again button appears to start game from beginning.


### Code Needed to Complete
#### HTML & CSS
- Boilerplater HTML + Canvas for gameplay area
- CSS Styling - Grid - Game in center portion of grid, game title on top row, user scores in bottom row (see wireframes)

#### JS - Start Screen & Pre-game
- Event listener for click of title screen
- On click, use DOM to present Pizza Chef name input fields via HTML Form element
- Event listener On submit of form, use DOM to place entered names in score tallying portion (store names in variables) and present gameplay screen. Present 'click to start' screen.

#### JS - Gameplay
- Event listener - Click to start Pizza Chef 1 turn
    - 1 Minute timer starts
- When game starts, user is given a pizza to make
    - Going to create an array of arrays (assign individual pizza arrays to variable to create array of variables instead?)
    - Each array contains different pizza recipe (alphabetical order)
- Function to return random index of main array (return random pizza)
- Iterate through ingredients in array - add each to screen using DOM - add corresponding pizza name & image to screen using DOM & conditional logic (if randomly selected pizza is meat lovers, append Meat Lovers div & img)
- User has a variety of buttons - one for each ingredient
- When each button is clicked (event listener), corresponding topping is pushed to array
- When user is done adding items, click deliver button (event listener)
- When deliver button is clicked, run array sort and compare function
    - Function sorts array alphabetically to adjust for any difference in order of ingredients added 
    - Function compares array of ingredients added by user to array to original recipe array
        - If same, advance to next random pizza and repeat and add 1 to user 1 score
        - If different, give user error message and start pizza over
- User repeats process until 1 minute timer is reached
- After 1 minute timer, use dom to clear screen and display user 1 score
- Click event listener to start user2
- User 2 repeats same process as user 1

#### Post-Game
- After user 2 finishes, function is run to compare user 1 and user 2 scores and display a winner graphic and button to clear and restart (DOM)

### Stretch Goals
- Create a 'fastest to 10 pizzas game mode where time counts up and logs how long it takes each user to make 10 pizzas
- Implement characters users can select that show up in gameplay screen