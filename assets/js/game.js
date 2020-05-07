var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;
var playerMoney = 10;

var startGame = function() {
    // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = 50;
      fight(pickedEnemyName);  
    }  
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }

  }
};

    // function to end the entire game
var endGame = function() {
      window.alert("The game has now ended. Let's see how you did!");
      if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
      } 
      else {
        window.alert("You've lost your robot in battle.");
      }
     // ask player if they'd like to play again
      var playAgainConfirm = window.confirm("Would you like to play again?");

      if (playAgainConfirm) {
        // restart the game
        startGame();
      } 
      else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
      }
        
    };

  



var fight = function(enemyName) {
   


    // fight function statements
  while (playerHealth > 0 && enemyHealth > 0) {
          // Alert users that they are starting the round
          var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        
          // if player choses to skip
          if (promptFight === "skip" || promptFight === "SKIP") {
            // confitm user wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          
              //if yes (true), leave fight
              if (confirmSkip) {
                        window.alert(playerName + " has decided to skip this fight. Goodbye!");
                        
                      // Operator function
                    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
                      enemyHealth = enemyHealth - playerAttack;

                    // Log a resulting message to the console so we know that it worked.
                        console.log(
                        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
                      );


                  // check enemy's health
                if (enemyHealth <= 0) {
                  window.alert(enemyName + " has died!");
                } 
                else {
                  window.alert(enemyName + " still has " + enemyHealth + " health left.");
                }


                // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable
                playerHealth = playerHealth - enemyAttack;

                // Log a resulting message to the console so we know that it worked.
                console.log(
                  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
                );


                // check player's health
                if (playerHealth <= 0) {
                  window.alert(playerName + " has died!");
                } 
                else {
                  window.alert(playerName + " still has " + playerHealth + " health left.");
                }


                // subtract money from playerMoney for skipping 
                        playerMoney = playerMoney - 10;
                        console.log("playerMoney", playerMoney);
                      break;
              }
          }

          // remove enemy's health by subtracting the amount set in the playerAttack variable
          enemyHealth = enemyHealth - playerAttack;
          console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
          );
        
          // check enemy's health
          if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");

            // award player money for winning
            playerMoney = playerMoney + 20;

      //leave while () loop since enemy is dead
      break;
          } else {

            window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }
        
          // remove player's health by subtracting the amount set in the enemyAttack variable
          playerHealth = playerHealth - enemyAttack;
          console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
          );
        
          // check player's health
          if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
          // leave while () loop if player is dead
        break;
          } 

          else {
              window.alert(playerName + " still has " + playerHealth + " health left.");
          }
  }
};
 
// start the game when the page loads
startGame();