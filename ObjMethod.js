var fruit = {
		name : "Ruby Roman Grapes",
		price : "$4,000",
		country : "Japan",
		sentance : function() {
			return this.name + " sells for " + this.price + " in the country of " + this.country;
		}
	}


document.getElementById("ex1").innerHTML = fruit.sentance();


var statement = "Why would anyone pay that much for a single bunch of grapes?";
document.getElementById("ex3").innerHTML = statement.toUpperCase();

function expFruit(Fname, Fprice, Fcountry) {
		this.FruitName = Fname;
		this.FruitPrice = Fprice;
		this.FruitCountry = Fcountry;
}
	var Yubari = new expFruit("Yubari Melon", "$23,00", "Japan");
	var Watermelon = new expFruit("Densuke Watermelon", "$6,100", "Japan");

	document.getElementById("ex4").innerHTML = Yubari.FruitName + " and " + Watermelon.FruitName + " regularly sell for " + Yubari.FruitPrice + " - " + Watermelon.FruitPrice + " and they are both from the country of " + Watermelon.FruitCountry + ".";