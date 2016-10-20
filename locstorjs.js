if (typeof(Storage) !== "undefined") {
		//store the info
		localStorage.setItem("texter", "Example of Local Storage.");
		//retrieve the info
		document.getElementById("ex1").innerHTML =
		localStorage.getItem("texter");
	}	else {
		document.getElementById("ex1").innerHTML =
		"Your browser doesn't support this- what are you using? The virus supplier Internet Explorer?"
	}

	//store an array. 
	var movies = ["Guardians of the Galaxy", " Godzilla", " Oedipus", " No one", "Actually ", "Pays attention"];

	localStorage.setItem("listBS", JSON.stringify(movies));

	//retrieve the array
	var movies2 = localStorage.getItem("listBS");
	var retrieve_array = JSON.parse(movies2);
	document.getElementById("ex2").innerHTML = retrieve_array;

	//associative array example, store data
	localStorage["noList"]= "65";

	//retrieve it
	var nana = localStorage["noList"];
	document.getElementById("ex3").innerHTML = nana;