var amountOfWeightLost = document.getElementById("weightLost");
var kittenWeight = 0.5;
var kittenWeightInKilograms = 0.226796;




function toKittens() {

    var unit_selection = document.getElementById("inputGroupSelect04").value;

    if (unit_selection == "lbs") {
        kittenW = kittenWeight;
    } else if (unit_selection == "kg") {
        kittenW = kittenWeightInKilograms;
    }

    var kittens = parseInt(parseInt(document.getElementById("weightLost").value ) / kittenW);
    console.log(kittens);
    var text = `<h3 class="display-2">That's ${kittens} kittens!</h3>`;  
    document.getElementById("kittenResult").innerHTML = text;    
}