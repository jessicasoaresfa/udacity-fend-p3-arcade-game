////////////////// ARCADE GAME PROJECT: Frogger Clone ////////////////
/**
 * @description: This game is part of Udacity's Front-End Web Developer Nanodegree program.
 * The Arcade Game clone is inspired by the game Frogger.
 * The mission is to lead the player to the water using the arrow keys avoiding the bugs.
 */

////////////////////////////////////////////////
////////////////// ENEMY SETUP ////////////////
//////////////////////////////////////////////

/**
 * @description: all enemy objects in an array called allEnemies
 */

 let allEnemies = [];

 /**
  * @description: setup for the enemies the player must avoid
  * setting up enemy objects: image, initial position, pace width, screen limit and initial speed.
  */

class Enemy {
  constructor(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.pace_width = 101;
    this.pace_border = this.pace_width * 5;
    this.sprite = 'images/enemy-bug.png';
  }

  /**
   * @description: update the enemy's position, required method for game
   * @param: dt, a time delta between ticks
   */

  update (dt) {
    /**
     * @description: You should multiply any movement by the dt parameter
     * which will ensure the game runs at the same speed
     * if enemy has not reached the end of the board
     */

    if(this.x < this.pace_border ) {
      this.x += this.speed * dt;
    }
    else {
      // reset enemy position
      this.x = -this.pace_width;
    }
  }

  /**
   * @description: draw the enemy on the screen, required method for game
   */

  //
  render () {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
////////////////////////////////////////////////
//////////////// PLAYER SETUP /////////////////
//////////////////////////////////////////////

  /**
   * @description: Player class
   * This class requires an update(), render() and a handleInput() method.
   */

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
  /**
   * @description: render player
   */
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

/**
 * @description: important note: our blocks have 101 pixels width and 83 pixels height
 * player's pace is set to 101px when moving left or right
 * player's pace is set to 83px when moving up and down
 */

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

  /**
   * @description: check for collision
   * if player and bug collide, the player is reset and the game restarted
   * else, if the player reaches the top without crashing, there is a new win
   */
   
    update() {
    for (let enemy of allEnemies) {
      if (this.y - enemy.y === 15 && (enemy.x + enemy.pace_width > this.x + 20 && enemy.x + 20 < this.x + this.pace_width)) {
        player.reset();
        restartGame();

      } else {
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

/**
 * @description: Place the Player object in a variable called player
 */

const player = new Player(200,405);

  /**
   * @description: Setup random speed for each bug
   * Credit: Javascript Math inspired by W3Schools reference
   */

const enemyOne = new Enemy(-101, 58, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyOne);
const enemyTwo = new Enemy(-101, 141, (Math.floor(Math.random() * 300) + 100));
allEnemies.push(enemyTwo);
const enemyThree = new Enemy(-250, 224, (Math.floor(Math.random() * 200) + 100));
allEnemies.push(enemyThree);

  /**
   * @description: This listens for key presses and sends the keys to the Player.handleInput() method
   */

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

/**
 * @description: Restart game.
 * For each new enemy, create and push object into the array
 * Player is reset
 * PopUp, if open, is closed
  */

function restartGame() {
    allEnemies = [];
    allEnemies.push(
    new Enemy(-101, 58, (Math.floor(Math.random() * 200) + 100)),
    new Enemy(-101, 141, (Math.floor(Math.random() * 300) + 100)),
    new Enemy(-250, 224, (Math.floor(Math.random() * 200) + 100)),
  );
    player.reset();
    closePopUp();
}

/**
 * @description: New win function
 * a pop up is open in the screen
  */

function newWin() {
    const popUp = document.querySelector('.popup_bg');
    popUp.classList.remove('hide');
}

/**
 * @description: Close pop up function
  */

function closePopUp() {
  const popUp = document.querySelector('.popup_bg');
  popUp.classList.add('hide');
}

/**
 * @description: Pop up buttons setup
  */
document.querySelector('.popup_close').addEventListener('click', () => { restartGame() });
document.querySelector('.popup_new').addEventListener('click', () => { restartGame() });

  /**
   * @description: Restart game function
    */
restartGame();
