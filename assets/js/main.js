/*jslint browser:true */
/*global $, jQuery, alert*/
/*jslint plusplus: true */
/*allowTemplateLiterals= true */


var theKittenWeight; //global variable as theKittenWeight is used in more than one function (suggested by Stephen CI)

/* Retrieve the unit selection from the user (lb/kg) */

function getUnitFromUser() {

    "use strict";

    return document.getElementById('inputGroupSelect04').value;

}


//----------------------------------------------------------------------------------------------------------------------


/* Retrieve weight entered by user*/

function getWeightFromUser() {

    "use strict";

    return parseInt(document.getElementById('weightLost').value, 10);

}


//----------------------------------------------------------------------------------------------------------------------


/* Selects kitten weight based on unit selected and value entered */

function getKittenWeight(unit, value) { //unit and value are both taken from the user input
    "use strict";
    var kittenW,
        leopardW,
        tigerW,
        lionW,
        pallasW,
        marbledW,
        servalW,
        caracalW,
        cloudedW

    if (unit === 'lbs') {
        kittenW = 0.5; // kittenWeightInLb
        leopardW = 1; //leopardWeightInLb
        tigerW = 2; //tigerWeightInLb
        lionW = 3; //lionWeightInLb
        pallasW = 10; //pallasWeightInLb
        marbledW = 11; //marbledWeightInLb
        servalW = 26.45; //servalWeightInLb
        caracalW = 30; //servalWeightInLb
        cloudedW = 50; //cloudedWeightInLb

    } else if (unit === 'kg') {
        kittenW =  0.226796; // kittenWeightInKg
        leopardW = 0.454; //leopardWeightInKg
        tigerW = 0.907; //tigerWeightInKg
        lionW = 1.361; //lionWeightInKg
        pallasW = 4.53; //pallasWeightInKg
        marbledW = 4.989; //marbledWeightInKg
        servalW = 12; //servalWeightInKg
        caracalW = 13.6078; //caracalWeightInKg
        cloudedW = 22.6796; //cloudedWeightInKg
    }
    if (((unit === 'lbs') && (value >= 1) && (value <= 10)) || ((unit === 'kg') && (value >= 1) && (value <= 4))) {
        return kittenW;
    }
    if (((unit === 'lbs') && (value >= 11) && (value <= 20)) || ((unit === 'kg') && (value >= 5) && (value <= 9))) {
        return leopardW;
    }
    if (((unit === 'lbs') && (value >= 21) && (value <= 30)) || ((unit === 'kg') && (value >= 10) && (value <= 14))) {
        return tigerW;
    }
    if (((unit === 'lbs') && (value >= 31) && (value <= 40)) || ((unit === 'kg') && (value >= 15) && (value <= 19))) {
        return lionW;
    }
    if (((unit === 'lbs') && (value >= 41) && (value <= 50)) || ((unit === 'kg') && (value >= 20) && (value <= 24))) {
        return pallasW;
    }
    if (((unit === 'lbs') && (value >= 51) && (value <= 60)) || ((unit === 'kg') && (value >= 25) && (value <= 29))) {
        return marbledW;
    }
    if (((unit === 'lbs') && (value >= 61) && (value <= 70)) || ((unit === 'kg') && (value >= 30) && (value <= 34))) {
        return servalW;
    }
    if(((unit === 'lbs') && (value >= 71) && (value <= 80)) || ((unit === 'kg') && (value >= 35) && (value <= 39))) {
        return caracalW;
    }
    return cloudedW;
}


//----------------------------------------------------------------------------------------------------------------------

/* Catulator - converts user weight into kitten amount */

function calculateKittens(unit) { //unit taken from user entry
    "use strict";
    return parseInt(getWeightFromUser() / getKittenWeight(unit, getWeightFromUser()), 10);

}

//----------------------------------------------------------------------------------------------------------------------
/* Display the result */

function outputResult(kittens) { //input is taken from calculateKittens(unit_selection)
    "use strict";
    var text,
        unit = document.getElementById('inputGroupSelect04').value,
        value = parseInt(document.getElementById('weightLost').value, 10),
        kittenType = "clouded leopards";

    theKittenWeight = getKittenWeight(unit, value);

    if (theKittenWeight === 0.5 || theKittenWeight === 0.226796) {
        kittenType = `kittens`;

    }
    if (theKittenWeight === 1 || theKittenWeight === 0.454) {
        kittenType = `leopard cubs`;

    }
    if (theKittenWeight === 2 || theKittenWeight === 0.907) {
        kittenType = `tiger cubs`;

    }
    if (theKittenWeight === 3 || theKittenWeight === 1.361) {
        kittenType = `lion cubs`;

    }
    if (theKittenWeight === 10 || theKittenWeight === 4.53) {
        kittenType = `Pallas' cats`;

    }
    if (theKittenWeight === 11 || theKittenWeight === 4.989) {
        kittenType = `marbled cats`;
    
    }
    if (theKittenWeight === 12 || theKittenWeight === 5.443) {
        kittenType = `servals`;

    }
    if (theKittenWeight === 13 || theKittenWeight === 5.896) {
        kittenType = `caracals`;

    }
    text = `<h3 class="bigText">That's ${kittens} ${kittenType}!</h3>`;
        document.getElementById('kittenResult').innerHTML = text;
}

//----------------------------------------------------------------------------------------------------------------------


/*Chooses which animal and makes kitten image appear in basket div */

function kittenPicsAppear(amount) {

     var whichKitten;
     var whereIsTheKitten;
     var unit = document.getElementById('inputGroupSelect04').value;
     var value = parseInt(document.getElementById('weightLost').value);
     var theKittenWeight = getKittenWeight(unit, value);

    if (theKittenWeight== 0.5||theKittenWeight==0.226796){
        whichKitten = 'standingKitten';
        whereIsTheKitten = 'assets/img/standingcat.png';
    }else if (theKittenWeight== 1||theKittenWeight==0.454){
        whichKitten = 'standingLeopard';
        whereIsTheKitten = 'assets/img/standingleopard.png';
    }else if (theKittenWeight== 2||theKittenWeight==0.907) {
        whichKitten = 'standingTiger';
        whereIsTheKitten = 'assets/img/standingtiger.png';
    }else if (theKittenWeight== 3||theKittenWeight==1.361) {
        whichKitten = 'standingLion';
        whereIsTheKitten = 'assets/img/standinglion.png';
    }else if (theKittenWeight== 10||theKittenWeight==4.53){
        whichKitten = 'standingPallas';
        whereIsTheKitten = 'assets/img/standingpallascat.png';
    }else if (theKittenWeight== 11||theKittenWeight==4.989){
        whichKitten = 'standingMarbled';
        whereIsTheKitten = 'assets/img/standingmarbledcat.png';
    }else if (theKittenWeight== 12||theKittenWeight==5.443){
        whichKitten = 'standingServal'
        whereIsTheKitten = 'assets/img/standingserval.png'
    }else if (theKittenWeight== 13||theKittenWeight== 5.896){
        whichKitten = 'standingCaracal'
        whereIsTheKitten = 'assets/img/standingcaracal.png'
    }else{ 
        whichKitten = 'standingCloudedLeopard';
        whereIsTheKitten = 'assets/img/standingcloudedleopard.png';
    }

    var width = 96 / amount;
    var img = document.createElement('img');
    img.id =  whichKitten;//'standingKitten';
    img.src = whereIsTheKitten;//"img/standingcat.png";
    img.style.width = width + '%';
    img.style.paddingBottom = '15px';
    document.getElementById('kittenDiv').appendChild(img);

}

//----------------------------------------------------------------------------------------------------------------------

/* Recursion to produce kittens */

//- originally this function was a for loop but a for loop would not allow
//for the kittens to appear one by one, so changed to a recursion with assistance from tutors*/

var changed = false,
    count = 1;
function outputKittens(amount){ //input taken from calculateKittens(unit_selection)
    "use strict";
    if (!changed && amount > count) {

        $('#go').attr("disabled", true);
        kittenPicsAppear(amount);
        setTimeout(function(){
            outputKittens(amount);
            count++;
        }, 500);

    } else {

        count = 1;
        $('#go').removeAttr("disabled");

    }
}

//----------------------------------------------------------------------------------------------------------------------

/* Checks input to see if it is valid, and returns a prompt to user if not */
function checkinput() {
    "use strict";
    let userInput = document.getElementById('weightLost').value;

    if (userInput == 0 ) {
        $("#go").prop('disabled', false);
        document.getElementById('kittenResult').innerHTML = `<h3>Oops! Please enter a number into the Catulator!</h3>`;
        return false;
    }
    if (userInput > 150) {
        $("#go").prop('disabled', false);
        document.getElementById('kittenResult').innerHTML = `<h3>Oops...we don't have enough cats! Please enter a smaller number into the Catulator!</h3>`;
        return false;
    }

    return true;
}

//----------------------------------------------------------------------------------------------------------------------


/* Invokes the functions to put it all together (triggered onclick of Go! button)*/

function toKittens() {
    "use strict";
    if (!checkinput()) {
        return;
    }

    changed = false;
    $('#kittenDiv').empty();

    var unit_selection = getUnitFromUser();

    var kittens = calculateKittens(unit_selection);


    setTimeout(outputResult(kittens), 100);

    outputKittens(kittens);


    clearBox();


}

//----------------------------------------------------------------------------------------------------------------------


/* Listens for the event of the Go button being clicked and calls the toKittens function */


document.getElementById('go').addEventListener('click', toKittens);




//----------------------------------------------------------------------------------------------------------------------

/*Clears basket if input is altered so new entry can be made */

function clearBox() {

   $('#weightLost').on('change keyup copy paste cut', function() {
       count = 1;
       changed = true;
    $('#kittenDiv').empty();
});
}

//----------------------------------------------------------------------------------------------------------------------

/* Restrict input in data box to integers only (Adapted from this tutorial: https://youtu.be/OpajusnOfYo ) */
function integersOnly(input) { //function is called within the input box in index.html, parsing itself in using the "this" keyword

    var regex = /[^0-9]/gi;
    input.value =input.value.replace(regex, '');

}
//----------------------------------------------------------------------------------------------------------------------

/* Initiate Popover */

$(function () {
  $('[data-toggle="popover"]').popover();
});

/* Dismiss Popover */

$('.popover-dismiss').popover({
  trigger: 'focus'
});


