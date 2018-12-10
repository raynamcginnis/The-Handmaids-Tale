$(document).ready(function () {

//ASSIGN VARIABLES

var character = null;
var characters = null;
var characterSelection = [];
var defender = null;
var defenders = [];

//create array of characters and character trails included name, health, attack, counter attack, image
// attack points should increase every time by adding itself to the total, counter attack power never changes

var characters = {
 Offred: {
    hp: 150,
    attack: 15,
    attackPower: 15,
    counterAttack: 10,
    name: "Offred",
    id: 1,
    img: "./assets/images/offred.jpg"
 }

  theCommander: {
      hp: 140,
      attack: 14,
      attackPower: 14,
      counterAttack: 10,
      name: "The Commander",
      id: 2,
      img: "./assets/images/theCommander.jpg"
  }

   auntLydia: {
       hp: 130,
       attack: 13,
       attackPower: 13,
       counterAttack: 20,
       name: "Aunt Lydia",
       id: 3,
       img: "./assets/images/auntLydia.jpg"
   } 
  
   Serena: {
       hp: 90,
       attack: 16
       attackPower: 16,
       counterAttack: 18
       name: "Serena",
       id: 4,
       img: "./assets/images/offred.jpg"
   }

}

//Selecting the characters

$(".character").on("click", function ()
{
var htmlid = $(this).attr("id");


});

//Move remaining characters to opponent div

//use on click to select opponent to attack

//functionality of attack button

//select next opponent from selection area

//win or lose

//create read me files

// add to portfolio


