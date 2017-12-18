var Gems = {
    gempic: [
        "assets/images/Gem1.png", 
        "assets/images/Gem3.png",
        "assets/images/Gem4.png",
        "assets/images/Gem5.png"],

    value: [0,0,0,0],
    //define method
    changeValues: function () {
        for (var i = 0; i < this.value.length; i++) {
            this.value[i]=(Math.floor(Math.random() * 12) + 1);
        };
    },

    addCrystals: function() {
        for (var i = 0; i < this.gempic.length; i++) {

   // Create an imageCrystal html element, add classes, add attributes
            var imageCrystal = $("<img>");
            imageCrystal.addClass("crystalsize");
            imageCrystal.attr("src", this.gempic[i]);
            imageCrystal.attr("data-crystalvalue", this.value[i]);
    // Add the crystal to the page.
            $(".crystals").append(imageCrystal);
          };

    },

    clearDiv: function() {
        $(".crystals").empty();
    }
};

var wins = 0;
var losses =0;
var targetNumber = (Math.floor(Math.random() * 101) + 19);
// Adds the target value to the target div
$(".target").text(targetNumber);
console.log("gempic: " + Gems.gempic);
console.log("value:" + Gems.value);
console.log("target number: " + targetNumber);

 var counter = 0;
  Gems.changeValues();
  console.log("value:" + Gems.value);
  Gems.addCrystals();

   // Click event applies to every crystal on the page.
  $(".crystalsize").on("click", function() {
      console.log("click happened");

   // Extract the value from the data attribute.
    // THIS specifies extracting the crystalvalue of the clicked crystal.
    // .attr("data-crystalvalue") grabs value of "data-crystalvalue" attribute.
    // Attributes on HTML elements are strings, convert to an integer then add
  
    var crystalVal = ($(this).attr("data-crystalvalue"));
    crystalVal = parseInt(crystalVal);
    // Add the crystalVal to counter which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalVal;
    $(".score").text(counter);




   if (counter === targetNumber) {
          alert("Winner");
          wins++;
          console.log("wins: " + wins);
          $(".winnumber").text(wins);
          // Choose new target,gem values,reset counter and gem value
          targetNumber = (Math.floor(Math.random() * 101) + 19);
        $(".target").text(targetNumber);
        counter = 0;
        $(".score").text(counter);
        Gems.clearDiv();
          Gems.changeValues();
          console.log("value:" + Gems.value);
          Gems.addCrystals();

   };

   if (counter >= targetNumber) {
          alert("Loser");
          losses++;
          $(".lossnumber").text(losses);
          // Choose new target and gem values,reset counter and gem value
          targetNumber = (Math.floor(Math.random() * 101) + 19);
        $(".target").text(targetNumber);
        counter = 0;
        $(".score").text(counter);
        Gems.clearDiv();
          Gems.changeValues();
          console.log("value:" + Gems.value);
          Gems.addCrystals();
    };

 });
 