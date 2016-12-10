function load_text(){
		document.getElementById("output").value = "Make Notes Here!";
	}

	function store() {
		var inputText = document.getElementById("inputArea");
		localStorage.setItem("inputArea", inputText.value);
	 	}


	function openTabs(evt, tabOpen) {
    var i, tabcontent, tablinked;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinked = document.getElementsByClassName("tablinked");
    for (i = 0; i < tablinked.length; i++) {
        tablinked[i].className = tablinked[i].className.replace(" active", "");
    }

    document.getElementById(tabOpen).style.display = "block";
    evt.currentTarget.className += " active";
}
	
function weightConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inPounds = document.getElementById("inPounds");
  var inKilograms = document.getElementById("inKilograms");
  var inOz = document.getElementById("inOz");
  var inGrams = document.getElementById("inGrams");
  if (source=="inPounds") {
    inKilograms.value=(valNum/2.2046);
    inOz.value=(valNum*16);
    inGrams.value=(valNum/0.0022046);
  }
  if (source=="inKilograms") {
    inPounds.value=(valNum*2.2046);
    inOz.value=(valNum*35.274);
    inGrams.value=(valNum*1000);
    
  }
  if (source=="inOz") {
    inPounds.value=(valNum*0.062500);
    inKilograms.value=(valNum/35.274);
    inGrams.value=(valNum/0.035274);
    
  }
  if (source=="inGrams") {
    inPounds.value=(valNum*0.0022046);
    inKilograms.value=(valNum/1000);
    inOz.value=(valNum*0.035274);
  }
  

}

function lengthConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputFeet = document.getElementById("inputFeet");
  var inputMeters = document.getElementById("inputMeters");
  var inputYards = document.getElementById("inputYards");
  var inputKilometers = document.getElementById("inputKilometers");
  var inputMiles = document.getElementById("inputMiles");
  if (source=="inputFeet") {
    inputMeters.value=(valNum/3.2808).toFixed(2);
    inputYards.value=(valNum*0.33333).toFixed(2);
    inputKilometers.value=(valNum/3280.8).toFixed(5);    
    inputMiles.value=(valNum*0.00018939).toFixed(5);
  }
  if (source=="inputMeters") {
    inputFeet.value=(valNum*3.2808);
    inputYards.value=(valNum*1.0936).toFixed(2);
    inputKilometers.value=(valNum/1000).toFixed(5);    
    inputMiles.value=(valNum*0.00062137).toFixed(5);
  }
  if (source=="inputYards") {
    inputFeet.value=(valNum*3);
    inputMeters.value=(valNum/1.0936).toFixed(2);
    inputMiles.value=(valNum*0.00056818).toFixed(5);
    inputKilometers.value=(valNum/1093.6).toFixed(5);
    
  }
  if (source=="inputKilometers") {
    inputFeet.value=(valNum*3280.8);
    inputMeters.value=(valNum*1000).toFixed(2);
    inputYards.value=(valNum*1093.6).toFixed(2);
    inputMiles.value=(valNum*0.62137).toFixed(2);    
  }
  if (source=="inputMiles") {
    inputFeet.value=(valNum*5280);
    inputMeters.value=(valNum/0.00062137).toFixed(2);
    inputYards.value=(valNum*1760).toFixed(2);
    inputKilometers.value=(valNum/0.62137).toFixed(2);    
  }
}

function temperatureConverter(source,valNum) {
  valNum = parseFloat(valNum);
  var inputFahrenheit = document.getElementById("inputFahrenheit");
  var inputCelsius = document.getElementById("inputCelsius");
  var inputKelvin = document.getElementById("inputKelvin");
  if (source=="inputFahrenheit") {
    inputCelsius.value=((valNum-32)/1.8).toFixed(3);
    inputKelvin.value=(((valNum-32)/1.8)+273.15).toFixed(3);
  }
  if (source=="inputCelsius") {
    inputFahrenheit.value=((valNum*1.8)+32).toFixed(3);
    inputKelvin.value=((valNum)+273.15).toFixed(3);
  }
  if (source=="inputKelvin") {
    inputFahrenheit.value=(((valNum-273.15)*1.8)+32).toFixed(3);
    inputCelsius.value=((valNum)-273.15).toFixed(3);
  }
}

function speedConverter(source,valNum) {
	valNum = parseFloat(valNum);
	var inputMPH = document.getElementById("inputMPH");
	var inputKPH = document.getElementById("inputKPH");
  var inputSol = document.getElementById("inputSol");
	if (source=="inputMPH") {
		inputSol.value=((valNum/670616629.38));
		inputKPH.value=((valNum*.6213).toFixed(2));
	}
	if (source=="inputSol") {
		inputKPH.value=((valNum*1079252848.8).toFixed(4));
		inputMPH.value=((valNum*670616629.3844).toFixed(4));
	}
	if (source=="inputKPH") {
		inputMPH.value = ((valNum*1.609344).toFixed(2));
		inputSol.value = ((valNum/9265669311));
	}
}