
	var games = '{"name":"Dragon Quest", "price":"$40", "country":"Japanese"}';

	var obj = JSON.parse(games);

	document.getElementById("d1").innerHTML =
	obj.name + "<br>" +
	obj.price + "<br>" +
	obj.country;
		
//convert javascript array to json

var ar = ['Jamie', 'Daenerys', 'Jon', "Cersei", "Gregor"];
var conv = JSON.stringify(ar);
document.getElementById("d2").innerHTML = conv;