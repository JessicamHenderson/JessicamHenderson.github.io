function usingNew() {
	var politics = new Object();
	politics.canidate1 = "Trump";
	politics.canidate2 = "Clinton";
	politics.feeling = "hate"

	document.getElementById("Cand1").innerHTML =
	politics.canidate1 + " vs. " + politics.canidate2 + " is a " + politics.feeling + "-filled fight."
}
function addingNew() {
var caring = {
    carsEx:"BMW",
    cars2:"Dodge",
    cars3:"Caliber",
    cars4:"Ford"
};
caring.nationality = "English";
document.getElementById("add").innerHTML =
caring.carsEx + " is " + caring.nationality + ".";
}

function testMethod() {
	var message = "hello class";
	var x = message.toUpperCase();
	document.getElementById("methodTest").innerHTML =
	x
}