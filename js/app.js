let allEnemies = [];

////////////////////////////////////////////////
////////////////// ENEMY SETUP ////////////////
//////////////////////////////////////////////

class Enemy {
  // setting up enemy objects: image, initial position,
  // pace width, screen limit and initial speed.

  constructor(x,y,speed) {
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

////////////////////////////////////////////////
//////////////// PLAYER SETUP /////////////////
//////////////////////////////////////////////

// Player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.pace_width = 101;
    this.pace_height = 83;
    this.limitRight = this.pace_width * 3;
    this.limitBottom = this.pace_height * 4;
    this.sprite = 'images/char-boy.png';
}

    // render player
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


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
          if (this.y < this.limitBottom + 42 ){ this.y += this.pace_height;  }
        }
}

    update() {
    // checkCollisions
    for (let enemy of allEnemies) {
      if (this.y - enemy.y === 15 && (enemy.x + enemy.pace_width > this.x + 20 && enemy.x + 20 < this.x + this.pace_width)) {
        player.reset();
        restartGame();

      } else {
        // player reaches the top
        // there is a new win
        if (this.y === (-10)) {
            setTimeout (function() {
          }, 100)
          newWin();
        }
      }
      }
    }

    reset() {
      this.x = 200;
      this.y = 405;
    }

}
////////////////////////////////////////////////
///////////// INSTANTIATE OBJECTS /////////////
//////////////////////////////////////////////


// Place the Player object in a variable called player
const player = new Player(200,405);

// Place all enemy objects in an array called allEnemies
// Setup random speed for each bug
// Javascript Math inspired by W3Schools reference
const enemyOne = new Enemy(-101, 58, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyOne);
const enemyTwo = new Enemy(-101, 141, (Math.floor(Math.random() * 300) + 100));
allEnemies.push(enemyTwo);
const enemyThree = new Enemy(-250, 224, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyThree);


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

function restartGame() {
  // for each new enemy, create and push object into the array
    allEnemies = [];
    allEnemies.push(
    new Enemy(-101, 58, (Math.floor(Math.random() * 200) + 100)),
    new Enemy(-101, 141, (Math.floor(Math.random() * 300) + 100)),
    new Enemy(-250, 224, (Math.floor(Math.random() * 200) + 100)),
  );
    player.reset();
    closePopUp();
}

function newWin() {
    const popUp = document.querySelector('.popup_bg');
    popUp.classList.remove('hide');
}

function closePopUp() {
  const popUp = document.querySelector('.popup_bg');
  popUp.classList.add('hide');
}

document.querySelector('.popup_close').addEventListener('click', () => { restartGame() });
document.querySelector('.popup_new').addEventListener('click', () => { restartGame() });

restartGame();
