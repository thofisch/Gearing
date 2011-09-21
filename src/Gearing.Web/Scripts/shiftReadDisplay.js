function readCogs() {
	if (document.mainForm.cog0.value < 1 || document.mainForm.cog0.value > 999) {
		cogs[0] = 999;
	} else {
		cogs[0] = parseInt(document.mainForm.cog0.value);
	}
	if (document.mainForm.cog1.value < 1 || document.mainForm.cog1.value > 999) {
		cogs[1] = 999;
	} else {
		cogs[1] = parseInt(document.mainForm.cog1.value);
	}
	if (document.mainForm.cog2.value < 1 || document.mainForm.cog2.value > 999) {
		cogs[2] = 999;
	} else {
		cogs[2] = parseInt(document.mainForm.cog2.value);
	}
	if (document.mainForm.cog3.value < 1 || document.mainForm.cog3.value > 999) {
		cogs[3] = 999;
	} else {
		cogs[3] = parseInt(document.mainForm.cog3.value);
	}
	if (document.mainForm.cog4.value < 1 || document.mainForm.cog4.value > 999) {
		cogs[4] = 999;
	} else {
		cogs[4] = parseInt(document.mainForm.cog4.value);
	}
	if (document.mainForm.cog5.value < 1 || document.mainForm.cog5.value > 999) {
		cogs[5] = 999;
	} else {
		cogs[5] = parseInt(document.mainForm.cog5.value);
	}
	if (document.mainForm.cog6.value < 1 || document.mainForm.cog6.value > 999) {
		cogs[6] = 999;
	} else {
		cogs[6] = parseInt(document.mainForm.cog6.value);
	}
	if (document.mainForm.cog7.value < 1 || document.mainForm.cog7.value > 999) {
		cogs[7] = 999;
	} else {
		cogs[7] = parseInt(document.mainForm.cog7.value);
	}
	if (document.mainForm.cog8.value < 1 || document.mainForm.cog8.value > 999) {
		cogs[8] = 999;
	} else {
		cogs[8] = parseInt(document.mainForm.cog8.value);
	}
	if (document.mainForm.cog9.value < 1 || document.mainForm.cog9.value > 999) {
		cogs[9] = 999;
	} else {
		cogs[9] = parseInt(document.mainForm.cog9.value);
	}
	if (document.mainForm.cog10.value < 1 || document.mainForm.cog10.value > 999) {
		cogs[10] = 999;
	} else {
		cogs[10] = parseInt(document.mainForm.cog10.value);
	}
	// fix empty slots and zero slots

	for (var i = 0; i < 11; i++) {
		if ((cogs[i] == "") || (cogs[i] == 0)) {
			cogs[i] = 999;
		}
	}

	cassetteSelection = 0; // changed something, not a stock cassette
	updateOutput();
}

// read the rings from the screen

function readRings() {
	rings[0] = parseInt(document.mainForm.ring0.value);
	rings[1] = parseInt(document.mainForm.ring1.value);
	rings[2] = parseInt(document.mainForm.ring2.value);
	// fix empty slots and zero slots
	for (var i = 0; i < 3; i++) {
		if ((rings[i] == "") || (rings[i] == 0)) {
			rings[i] = 999;
		}
	}
	updateOutput();
}

function readCrank() {
	//alert("set crank Not Implemented Yet");
	crank = parseInt(document.mainForm.crank.options[document.mainForm.crank.options.selectedIndex].value);
	updateOutput();
}

function readWheel() {
	//alert("set wheel Not Implemented Yet");
	wheelIndex = parseInt(document.mainForm.wheel.options[document.mainForm.wheel.options.selectedIndex].value);
	updateOutput();
}

function readRolloutType() {
	//alert("readRolloutType");
	if (document.mainForm.rolloutButton[0].checked == true) {
		rolloutType = 0; // english
		//alert("readRolloutType = english");
	} else {
		rolloutType = 1; // metric
		//alert("readRolloutType = metric");
	}
	updateOutput();
}

function readSpeedType() {
	if (document.mainForm.speedButton[0].checked == true) {
		speedType = 0; // mph
		//document.mainForm.debugarea.value = "speed in mph"
	} else {
		speedType = 1; // kph
		//document.mainForm.debugarea.value = "speed in kph"
	}
	updateOutput();
}

function readSpeedRangeType() {
	if (document.mainForm.speedRangeButton[0].checked == true) {
		speedRangeType = 0; // mph
	} else {
		speedRangeType = 1; // kph
	}
	updateOutput();
}

function readGridONoff() {
	if (document.mainForm.showgrid.checked) {
		showgrid = "show";
	} else {
		showgrid = "hide";
	}
	updateOutput();
}

function sortGears() {
	if (document.mainForm.sortgears.checked) {
		sortgears = "yes";
	} else {
		sortgears = "no";
	}
	updateOutput();
}

function readDisplayType() {
	if (document.mainForm.typeButton[0].checked == true) {
		displayType = 0; // ASCII
	} else {
		displayType = 1; // Graphical
	}
	updateOutput();
}

// speed table

function readRPM() {
	RPM = parseInt(document.mainForm.RPM.value);
	//document.mainForm.debugarea.value = "RPM = " + RPM
	updateOutput();
}

//  speed graph

function read_lRPM() {
	lRPM = parseInt(document.mainForm.lRPM.value);
	RPMrangeCheck();
}

function read_hRPM() {
	hRPM = parseInt(document.mainForm.hRPM.value);
	RPMrangeCheck();
}