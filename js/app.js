let score = 0;
let crashes = 0;

////////////////////////////////////////////////
////////////////// ENEMY SETUP ////////////////
//////////////////////////////////////////////

class Enemy {
  // setting up enemy objects: image, initial position,
  // pace width, screen limit and initial speed.
  constructor(x,y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.pace_width = 101;
    this.pace_border = this.pace_width * 5;
    this.sprite = 'images/enemy-bug.png';
  }

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

  update (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for

    // if enemy has not reached the end of the board

    if(this.x < this.pace_border ) {
      this.x += this.speed * dt;
    }
    else {
      // reset enemy position
      this.x = -this.pace_width;
    }
  }

  // draw the enemy on the screen, required method for game
  render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

////////////////////////////////////////////////
//////////////// PLAYER SETUP /////////////////
//////////////////////////////////////////////

// Player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor(x,y) {
    this.x = 200;
    this.y = 410;
    this.pace_width = 101;
    this.pace_height = 83;
    this.limitRight = this.pace_width * 3;
    this.limitTop = this.pace_height * 4;
    this.sprite = 'images/char-boy.png';
}

    // render player
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// update the player's position
// important note: our blocks have 101 pixels width and 83 pixels height
// player's pace is set to 101px when moving left or right
// player's pace is set to 83px when moving up and down


  handleInput (keypressed) {

    if (keypressed == 'left') {
          if (this.x > 0) { this.x -= this.pace_width; }
        }

          else if (keypressed == 'right') {
          if (this.x < this.limitRight) { this.x += this.pace_width; }
        }

          else if (keypressed == 'up') {
          if (this.y > 0 ){ this.y -= this.pace_height; }
        }

          else if (keypressed == 'down') {
          if (this.y < this.limitTop ){ this.y += this.pace_height;  }
        }
}
}

// checkCollisions
  // did the player collide?

// checkWin
  // did the player reach the water?

          // handle keyboard input
              // the player's x and y position is updated according to the keyboard handleInput

////////////////////////////////////////////////
///////////// INSTANTIATE OBJECTS /////////////
//////////////////////////////////////////////

// Place all enemy objects in an array called allEnemies
// Place the Player object in a variable called player
const player = new Player();
const allEnemies = [];

const enemyOne = new Enemy(-101, 50, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyOne);
const enemyTwo = new Enemy(-60, 143, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyTwo);
const enemyThree = new Enemy(-205, 143, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyThree);
const enemyFour = new Enemy(-250, 220, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyFour);


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

// reset hero's position
// player's position is reset to x and y original start value
player.reset = function(x,y) {
  this.x = 200;
  this.y = 415;
};
