function LoopItUp() {
		var fruit = ["Apple", "Tomato", "Pitaya", "Kiwano", "Manchineel", "Jartopha", "Strychnine"];
		var outPutText = "";
		var i;
		for (i = 0; i < fruit.length; i++) {
			outPutText += fruit[i] + ", ";
		document.getElementById("fruiting").innerHTML = outPutText;
		}
		
	}

	function wrongArray() {
		var monster = [];
		monster["Russian"] = "Domovoi";
		monster["Cherokee"] = "Uktena";
		monster["Maori"] = "Manaia";
		monster["Australian"] = "Drop Bear";
		document.getElementById("nopeNo").innerHTML = 
		monster[1] + " " + monster.length;
	}

	function rightArray() {
		var monster = [];
		monster[0] = "Domovoi";
		monster[1] = "Uktena";
		monster[2] = "Manaia";
		monster[3] = "Drop Bear";
		document.getElementById("YeahBaby").innerHTML = 
		monster[1] + " " + monster.length;
	}

	function ParameterConditional() {
    var x = "10";
    var letitOut = "";
    if ( x = 10) {
        letitOut = "Right!";
    } else if (x < 10) {
        letitOut = "too little";
    } else {
        letitOut = "Too Much";
    }
document.getElementById("YPCD").innerHTML = letitOut;
}