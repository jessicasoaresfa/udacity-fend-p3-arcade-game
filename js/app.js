let score = 0;
let crashes = 0;

////////////////////////////////////////////////
//////////////// ENEMIES CLASS ////////////////
//////////////////////////////////////////////

let Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //proprieties
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// METHODS
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // this.x += this.speed*dt;

    // if enemy has not reached the end of the board
        // move forward
        // increment x by speed * dt

      // else
        // reset start position

//};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

////////////////////////////////////////////////
//////////////// PLAYER CLASS /////////////////
//////////////////////////////////////////////

// Player class
// This class requires an update(), render() and
// a handleInput() method.

let Player = function(x,y) {
    this.x = 200;
    this.y = 370;
    this.sprite = 'images/char-boy.png';
};

// Place the Player object in a variable called player
let player = new Player();

// update player

// render player
player.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

      // methods

          // update the player's position
              // checkCollisions
                  // did the player collide?
              // checkWin
                  // did the player reach the water?

          // handle keyboard input
              // the player's x and y position is updated according to the keyboard handleInput

// reset hero's position
// player's position is reset to x and y original start value

player.reset = function(x,y) {
    this.x = 0;
    this.y = 0;
};

// Place all enemy objects in an array called allEnemies
let allEnemies = [];

////////////////////////////////////////////////
///////////// INSTANTIATE OBJECTS /////////////
//////////////////////////////////////////////

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

// document.addEventListener('keyup', function(e) {
//     var allowedKeys = {
//         37: 'left',
//         38: 'up',
//         39: 'right',
//         40: 'down'
//     };
//
//     player.handleInput(allowedKeys[e.keyCode]);
// });

////////////////////////////////////////////////
////////////////// GAME OVER //////////////////
//////////////////////////////////////////////

////// TO DO : id score innerHTML setup
////// TO DO : new Enemies setup

// function newWin() {
//   player.reset();
//   score += 1;
//   document.getElementById('score').innerHTML = score;
// }
//
// function restartGame() {
//   player.reset();
//     allEnemies = [];
//
//     // for each new enemy, create and push object into the array (newEnemy)
//     allEnemies.push(
//     new Enemy( XXXX ),
//     new Enemy( XXXX ),
//     new Enemy( XXXX ),
//   );
// }
//  restartGame();
