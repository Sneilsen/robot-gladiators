var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;


// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = ["Roborto"];
console.log(enemyName);
var enemyHealth = 50;
var enemyAttack = 12;
// money //
var playerMoney = 10;


var fight = function() {
  window.alert("Welcome to Robot Gladiators!");
};
fight();


  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
 

  // if player choses to fight, fight
   if (promptFight === "fight" || promptFight === "FIGHT") {
  //   // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
     console.log(
     playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

  //  // check enemy's health
   if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
     } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
     }

  //   // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
     );
       if (playerHealth > 0) {
        console.log(playerName + "is still alive!");
       }
  //   // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
   } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  //   // if player choses to skip
   } else if (promptFight === "skip" || promptFight === "SKIP") {
  //   // confirm player wants to skip
     var confirmSkip = window.confirm("Are you sure you'd like to quit?");
   
 
    if (confirmSkip) {
      window.alert(playerName + " has decided to skip this fight. Goodbye!");
  
      // subtract money from playerMoney for skipping
     playerMoney = playerMoney - 2;
  }
  

 } else {
      fight();
    }
  
 } else {
    window.alert("You need to pick a valid option. Try again!");
 }

// run fight function to start game
// fight();
