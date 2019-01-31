$(document).ready(function () {

//ASSIGN VARIABLES

var offred;
var theCommander;
var auntLydia;
var serena;
var character = null;
var characterSelection = [];
var defender = null;
var defenders = [];


//create array of characters and character traits included name, health, attack, counter attack, image
// attack points should increase every time by adding itself to the total, counter attack power never changes

function startGame() {

 offred = {
    healthPoints: 140,
    baseAttack: 15,
    attackPower: 15,
    counterAttackPower: 14,
    name: "Offred",
    id: 0,
    img: "./assets/images/offred.jpg"
 }

  theCommander = {
      healthPoints: 130,
      baseAttack: 13,
      attackPower: 13,
      counterAttackPower: 12,
      name: "The Commander",
      id: 1,
      img: "./assets/images/theCommander.jpg"
  }

   auntLydia = {
       healthPoints: 120,
       baseAttack: 14,
       attackPower: 14,
       counterAttackPower: 16,
       name: "Aunt Lydia",
       id: 2,
       img: "./assets/images/auntLydia.jpg"
   }
  
   serena = {
       healthPoints: 110,
       baseAttack: 16,
       attackPower: 16,
       counterAttackPower: 18,
       name: "Serena",
       id: 3,
       img: "./assets/images/serena.jpg"
   }

//reset to begin game

character = null;
defenders = [];
defender = null;
characterSelection = [offred, theCommander, auntLydia, serena];

//$("#character, #defenderArea, #defender, #status").empty();
$("#character").empty();
$("#defenderArea").empty();
$("#defender").empty();
$("#status").empty();

//Selecting the characters

$.each(characterSelection, function (index, character) {
      
// create a div for each character to display character selection at start of the game

var newCharacterDiv = $("<div>").addClass("character panel panel-success").attr("id", character.id);

            $("<div>").addClass("panel-heading").html(character.name).appendTo(newCharacterDiv);
			$("<div>").addClass("panel-body").append("<img src='" + character.img + "'>").appendTo(newCharacterDiv);
			$("<div>").addClass("panel-footer").append("<span class='hp'>" + character.healthPoints + "</span>").appendTo(newCharacterDiv);

			// new div to character selection
			$("#characterSelection").append(newCharacterDiv);

});

$(".character").on("click", function() {
    // when character has been selected
    if(character === null) {
        console.log("picked character");
        //get id of character selected
        var charId = parseInt($(this).attr("id"));

        character = characterSelection[charId];

        // loop through character array
        $.each(characterSelection, function(index, character) {
        //Move other opponents to enemies array
                if(character.id !== charId) {
                defenders.push(character);
                $("#"+character.id).removeClass("character panel-success").addClass("defender panel-danger").appendTo("#defenderArea");
            } else {
                $("#"+character.id).appendTo("#character");
            }
        });



// add click event after defender class has been added
$(".defender").on("click", function() {
    if(defender === null) {
        var defenderId = parseInt($(this).attr("id"));
        console.log(this);
        defender = characterSelection[defenderId];
        $("#" + defenderId).appendTo("#defender");
             }
        });
    }
});

//hide restart button

$("#restart").hide();
}

startGame();


//use on click to select opponent to attack

$("#attack").on("click", function() {
		
    if(character !== null && character.healthPoints > 0 && defenders.length > 0) {
        var status = "";

        // when defender has been selected
    
        if(defender !== null) {
            // decrease defender HP
            defender.healthPoints -= character.attackPower;
            status += "You attacked " + defender.name + " for " + character.attackPower + " damage.<br>";

            console.log("Defender: ",defender.name,defender.healthPoints);

            // update defender HP
            $("#"+defender.id + " .hp").html(defender.healthPoints);

            // decrease character HP by defender counter attack power
            character.healthPoints -= defender.counterAttackPower;
            status += defender.name + " attacked you back for " + defender.counterAttackPower + " damage.<br>";

            console.log("Character: ",character.name,character.healthPoints);

            // update character HP
            $("#"+character.id + " .hp").html(character.healthPoints);

            // increase character attack power by base attack power
            character.attackPower += character.baseAttack;

            //win or lose

            // when character is defeated
            if(character.healthPoints <= 0) {
                status = "YOU HAVE BEEN DEFEATED. GAME OVER!!!!";
                $("#restart").show();
            } else if(defender.healthPoints <= 0) {	
                // when defender is defeated
                status = "You have defeated " + defender.name + ". Pick your next opponent!";

                // clear defender selection
                $("#defender").empty();
                defender = null;

                // remove defeated defender from defender array
                defenders.splice(defenders.indexOf(defender),1);
            }

            // when no defenders left
            if(defenders.length === 0) {
                status = "CONGRATULATIONS, YOU WON!";
                $("#restart").show();
            }
        } else {
            status = "No enemies left!";
        }

        $("#status").html(status);
    }
})

$("#restart").on("click", function () {
    startGame();
})

});
