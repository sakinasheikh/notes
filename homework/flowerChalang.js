$(document).ready(function(){
//my flower 

    var carnation = new Flower("http://i.imgur.com/82xvs1X.jpg", "purple", 52, true, "Spain");
    
    var imageTemplate = _.template($('#flower-template').html());
    var imageHtml = imageTemplate(carnation);
    $(".classFlowers").append(imageHtml);
    $(".info").append("color: " + carnation.color + "<br>");
    $(".info").append("petals: " + carnation.petals + "<br>");
    $(".info").append("smells Pretty: " + carnation.smellsPretty + "<br>");
    $(".info").append("origin: " + carnation.origin + "<br>");

function allFlowers(){    
    var array = $.map(vase.flowers);
    console.log(array);
};

});

function Flower(image, color, petals, smellsPretty, origin){
   /* Properties */
   // Passed-in values
   this.image = image;
   this.color = color;
   this.petals = petals;
   this.smellsPretty= smellsPretty;
   this.origin = origin;

   // Default values
   this.isEdible = false;
   this.wiltFactor = 100; //0 is dead, 100 is fresh
   

    /* Methods */
   this.sniff = function(){
       console.log("Sniff Sniff Sniff!");
   };
   // Demonstrates use of arguments with methods
   this.smellsGood = function(answer) {
       if (answer) {
           return 'This flower smells amazing!';
       } else {
           return 'What a noxious weed!';
       }
   };
   // Demonstrates use of local object variables
   this.describe = function(answer) {
       alert("This flower is " + this.color + ".");
     }
   /// Demonstrates object to object interaction
   this.compare =  function(otherFlower) {
       return("My " + this.color + " flower is much prettier than your " +
         otherFlower.color + " flower :P");
   };
   // append html string to website 
   this.render = function() {
       $('body').append("<p>My pretty flower is " + this.color +
         " and has " + this.petals + " pristine petals.");
   };
   // displays message to console
   this.giveFlower= function(){
       console.log("Here's a flower")
    };
}

