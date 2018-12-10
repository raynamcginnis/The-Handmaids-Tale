
//ASSIGN VARIABLES

// var user
// var userName
// var userHealth
// var opponent
// var opponentName
// var opponentHaelth
// var userAttack
// var userAttackPower
// var userCounterAttack
// var opponentAttack
// var opponentAttackPower
// var opponentCounterAttack
// var characterList = ["Offred","The Commander","Aunt Lydia","Serena"]

var offred;
var theCommander;
var auntLydia;
var serena
var character = null;
var characterSelection = [];
var defender = null;
var defenders = [];

$(document).ready(function () {


//create array of characters and character traits included name, health, attack, counter attack, image
// attack points should increase every time by adding itself to the total, counter attack power never changes
function startGame() {

var characters = {
 Offred: {
    hp: 150,
    baseattack: 15,
    attackPower: 15,
    counterAttack: 10,
    name: "Offred",
    id: 1,
    img: "./assets/images/offred.jpg"
 }

  theCommander: {
      hp: 140,
      baseattack: 14,
      attackPower: 14,
      counterAttack: 10,
      name: "The Commander",
      id: 2,
      img: "./assets/images/theCommander.jpg"
  }

   auntLydia: {
       hp: 130,
       baseattack: 13,
       attackPower: 13,
       counterAttack: 20,
       name: "Aunt Lydia",
       id: 3,
       img: "./assets/images/auntLydia.jpg"
   } 
  
   Serena: {
       hp: 90,
       baseattack: 16
       attackPower: 16,
       counterAttack: 18
       name: "Serena",
       id: 4,
       img: "./assets/images/offred.jpg"
   }

}

//reset to begin game

character = null;
defenders = [];
defender = null;
characterSelection = ["Offred","The Commander","Aunt Lydia","Serena"];

$("#character", "#defenderArea", "#defender", "#status").empty();

//Selecting the characters

$.each(".characterSelection", function (index, character){
var newCharacterDiv = $("<div>").addClass("character panel panel-success").attr("id", character.id)''

            $("<div>").addClass("panel-heading").html(character.name).appendTo(newCharacterDiv);
			$("<div>").addClass("panel-body").append("<img src='" + character.img + "'>").appendTo(newCharacterDiv);
			$("<div>").addClass("panel-footer").append("<span class='hp'>" + character.healthPoints + "</span>").appendTo(newCharacterDiv);

			// put it on the HTML
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
            // add unselected characters to enemies array
            if(character.id !== charId) {
                defenders.push(character);
                $("#"+character.id).removeClass("character panel-success").addClass("defender panel-danger").appendTo("#defenderArea");
            } else {
                $("#"+character.id).appendTo("#character");
            }
        });


//Move remaining characters to opponent div

//use on click to select opponent to attack

$("#attack").on("click", function() {
		
    if(character !== null && character.healthPoints > 0 && defenders.length > 0) {
        // game status in text
        var status = "";

        // when defender has been selected
        debugger;
        if(defender !== null) {
            // decrease defender HP by character attack power
            defender.healthPoints -= character.attackPower;
            status += "You tweeted " + defender.name + " for " + character.attackPower + " shame.<br>";

            console.log("Defender: ",defender.name,defender.healthPoints);

            // update defender HP
            $("#"+defender.id + " .hp").html(defender.healthPoints);

            // decrease character HP by defender counter attack power
            character.healthPoints -= defender.counterAttackPower;
            status += defender.name + " @'d you back for " + defender.counterAttackPower + " shame.<br>";

            console.log("Character: ",character.name,character.healthPoints);

            // update character HP
            $("#"+character.id + " .hp").html(character.healthPoints);

            // increase character attack power by base attack power
            character.attackPower += character.baseAttack;

            // when character is defeated
            if(character.healthPoints <= 0) {
                status = "YOU HAVE BEEN DEFEATED. GAME OVER!!!!";
                $("#restart").show();
            } else if(defender.healthPoints <= 0) {	
                // when defender is defeated
                status = "You have defeated " + defender.name + ", you can start another beef with a new foe.";

                // clear defender selection
                $("#defender").empty();
                defender = null;

                // remove defeated defender from defender array
                defenders.splice(defenders.indexOf(defender),1);
            }

            // when no defenders left
            if(defenders.length === 0) {
                status = "You won the beef!";
                $("#restart").show();
            }
        } else {
            status = "No foes here.";
        }

        $("#status").html(status);
    }
})


//functionality of attack button

//select next opponent from selection area

//win or lose

}

//create read me files

// add to portfolio


