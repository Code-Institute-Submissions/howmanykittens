
/* Retrieve the unit selection from the user (lb/kg) */
function getUnitFromUser() {
	return document.getElementById("inputGroupSelect04").value;
}

/* Retrieve weight entered by user */
function getWeightFromUser() {
  return parseInt(document.getElementById("weightLost").value);
}

/* Selects kitten weight based on unit selected */
function getKittenWeight(unit) {
  var kittenW;
  if (unit == "lbs") {
    kittenW = 0.5; // kittenWeightInLb
  } else if (unit == "kg") {
    kittenW =  0.226796; // kittenWeightInKilograms
  }
  return kittenW;
}

/* Catulator - converts user weight into kitten amount */
function calculateKittens(unit) {
  return parseInt(getWeightFromUser() / getKittenWeight(unit));
}

/* Display the result */
function outputResult(kittens) {
  var text = `<h3 class="display-2">That's ${kittens} kittens!</h3>`;
  document.getElementById("kittenResult").innerHTML = text;
}

/* Kitten interval delay */
function kittenTimings(func) {

    setTimeout(func, 5000);

}

var changed = false;

// document.getElementById("weightLost").addEventListener('input', function (evt) {
//     changed = true;
// });

/*For loop to produce kittens*/
function outputKittens(amount){
    changed = false;
    for(var i = 0; i <amount; i++){
    (function(i){
        if (!changed) {
                        setTimeout(function(){
                            kittenPicsAppear(amount);
                            console.log("event");
                        }, 1000 * (i + 1));
                        
        } else {
            break
        }
    })(i);
}
}
/* Invokes the functions to put it all together */
function toKittens() {
  var unit_selection = getUnitFromUser();

  var kittens = calculateKittens(unit_selection);

  console.log(kittens);

  outputResult(kittens);
  
  outputKittens(kittens);
  
  clearBox();
}

/* Listens for the event of the Go button being clicked and calls the toKittens function */
document.getElementById('go').addEventListener("click", toKittens);

/*Makes kitten image appear in basket div */
function kittenPicsAppear(amount) { 
    width = 96 / amount;
    var img = document.createElement('img');
    img.id = 'standingKitten';
    img.src = "img/standingcat.png"; 
    img.style.width = width + "%";
    document.getElementById('kittenDiv').appendChild(img); 
}

/*Clears basket if input is altered */
function clearBox() {

   $("#weightLost").on('change keyup copy paste cut', function() {
       console.log("removing")
       outputKittens().return;
    $('#kittenDiv').empty();
});
};

/* Initiate Popover */
$(function () {
  $('[data-toggle="popover"]').popover()
})

