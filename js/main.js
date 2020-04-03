
var theKittenWeight;

/* Retrieve the unit selection from the user (lb/kg) */ 
function getUnitFromUser() {
	return document.getElementById("inputGroupSelect04").value;
}

/* Retrieve weight entered by user, and throws an error if not */
function getWeightFromUser() {
    if (document.getElementById("weightLost").value== 0){
         var text = `<h3>Oops! Please enter a number into the Catulator!</h3>`;
         throw document.getElementById("kittenResult").innerHTML = text("Please enter a number into the Catulator!");
    }else{
    return parseInt(document.getElementById("weightLost").value);
}
}


/* Selects kitten weight based on unit selected */
function getKittenWeight(unit, value) {
  var kittenW;
  var leopardW;
  var tigerW;
  var lionW;
  if (unit == "lbs") {
    kittenW = 0.5; // kittenWeightInLb
    leopardW = 1; //leopardWeightInLb
    tigerW = 2;
    lionW = 3;
  } else if (unit == "kg") {
    kittenW =  0.226796; // kittenWeightInKilograms
    leopardW = 0.454;
    tigerW= 0.907;
    lionW = 1.361;
  }
  if (unit == "lbs" && value >= 1 && value <= 14 || unit == "kg" && value >= 1 && value <= 6)  {
  return kittenW;
  }else if (unit == "lbs" && value >= 15 && value <= 28 || unit == "kg" && value >= 7 && value <= 12) {
  return leopardW;
  }else if (unit == "lbs" && value >= 29 && value <= 42 || unit == "kg" && value >= 13 && value <= 19) {
  return tigerW;
  }else{
    return lionW;
  }
}



/* Catulator - converts user weight into kitten amount */
function calculateKittens(unit) {
  return parseInt(getWeightFromUser() / getKittenWeight(unit, getWeightFromUser()));
}

/* Display the result */
function outputResult(kittens) {
var text;
var unit = document.getElementById("inputGroupSelect04").value;
var value = parseInt(document.getElementById("weightLost").value);
theKittenWeight = getKittenWeight(unit, value);
var kittenType = "lion cubs";
     
    if (theKittenWeight== 0.5||theKittenWeight==0.226796){
        kittenType = `kittens`;
    }if (theKittenWeight== 1||theKittenWeight==0.454){
        kittenType = `leopard cubs`;

    }if (theKittenWeight== 2||theKittenWeight==0.907) {
        kittenType = `tiger cubs!`;
    }
        text = `<h3 class="bigText">That's ${kittens} ${kittenType}!</h3>`;
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
let count = 1;
function outputKittens(amount){
    if (!changed && amount > count) {
        kittenPicsAppear(amount);
        setTimeout(function(){
            outputKittens(amount)
            count++;
        }, 500);
    } else {
        count = 1;
    }
}
/* Invokes the functions to put it all together */
function toKittens() {
    changed = false;
    $('#kittenDiv').empty();


  var unit_selection = getUnitFromUser();

  var kittens = calculateKittens(unit_selection);


  setTimeout(outputResult(kittens), 1000);
  
  outputKittens(kittens);
  
  clearBox();
}

/* Listens for the event of the Go button being clicked and calls the toKittens function */
document.getElementById('go').addEventListener("click", toKittens);

/*Chooses which animal and makes kitten image appear in basket div */
function kittenPicsAppear(amount) { 
     var whichKitten;
     var whereIsTheKitten;
     var unit = document.getElementById("inputGroupSelect04").value;
     var value = parseInt(document.getElementById("weightLost").value);
     var theKittenWeight = getKittenWeight(unit, value);
    if (theKittenWeight== 0.5||theKittenWeight==0.226796){
        whichKitten = "standingKitten";
        whereIsTheKitten = "img/standingcat.png"; 
    }else if (theKittenWeight== 1||theKittenWeight==0.454){
        whichKitten = "standingLeopard";
        whereIsTheKitten = "img/standingleopard.png";
    }else if (theKittenWeight== 2||theKittenWeight==0.907) {
        whichKitten = "standingTiger";
        whereIsTheKitten = "img/standingtiger.png";
    }else{
        whichKitten = "standingLion";
        whereIsTheKitten = "img/standinglion.png";
    }
    width = 96 / amount;
    var img = document.createElement('img');
    img.id =  whichKitten;//'standingKitten';
    img.src = whereIsTheKitten;//"img/standingcat.png"; 
    img.style.width = width + "%";
    img.style.paddingBottom = "15px";
    document.getElementById('kittenDiv').appendChild(img); 
    
   

    }

/*Clears basket if input is altered */
function clearBox() {

   $("#weightLost").on('change keyup copy paste cut', function() {
       console.log("removing")
       count = 1;
       changed = true;
    $('#kittenDiv').empty();
});
};

/* Initiate Popover */
$(function () {
  $('[data-toggle="popover"]').popover()
});
