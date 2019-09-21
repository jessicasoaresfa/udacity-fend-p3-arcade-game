////////////////////////////////////////////////
//////////////// ENEMIES CLASS ////////////////
//////////////////////////////////////////////

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // proprieties
      // x position
      // y position

      // sprite image for our enemies
      this.sprite = 'images/enemy-bug.png';
};

// METHODS
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // if enemy has not reached the end of the board
        // move forward
        // increment x by speed * dt

      // else
        // reset start position

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

////////////////////////////////////////////////
//////////////// PLAYER CLASS /////////////////
//////////////////////////////////////////////

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// HERO class

  // constructor

      // proprieties

          // x position
          // y position
          // sprite image

      // methods

          // update the player's position
              // checkCollisions
                  // did the player collide?
              // checkWin
                  // did the player reach the water?

          // render
              // draw player sprite in current x and y position

          // handle keyboard input
              // the player's x and y position is updated according to the keyboard handleInput

          // reset hero's position
              // player's position is reset to x and y original start value

////////////////////////////////////////////////
///////////// INSTANTIATE OBJECTS /////////////
//////////////////////////////////////////////

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

        // new player object
        // init enemies array (allEnemies)
          // for each new enemy, create and push object into the array (newEnemy)

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
