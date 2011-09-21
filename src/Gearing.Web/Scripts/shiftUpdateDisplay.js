function writeCassette() {
	for (var i = 0; i < document.mainForm.cassette.options.length; i++) {
		if (document.mainForm.cassette.options[i].value == cassetteSelection) {
			document.mainForm.cassette.options[i].selected = true;
			break;
		}
	}
}

function writeRings() {
	// how many rings do we have
	numRings = 0;
	for (var i = 0; i < rings.length; i++) {
		if (rings[i] > 0 && rings[i] < 999) {
			numRings++;
		}
	}
	rings.sort(compareNum);
	if (rings[0] < 999) {
		document.mainForm.ring0.value = rings[0];
	} else {
		document.mainForm.ring0.value = "";
	}
	if (rings[1] < 999) {
		document.mainForm.ring1.value = rings[1];
	} else {
		document.mainForm.ring1.value = "";
	}
	if (rings[2] < 999) {
		document.mainForm.ring2.value = rings[2];
	} else {
		document.mainForm.ring2.value = "";
	}
}

function writeCogs() {
	// count the cogs
	numCogs = 0;
	for (var i = 0; i < cogs.length; i++) {
		if (cogs[i] > 0 && cogs[i] < 999) {
			numCogs++;
		}
	}
	// sort the cogs
	cogs.sort(compareNum);
	document.mainForm.cog0.value = cogs[0];
	if (cogs[1] < 999) {
		document.mainForm.cog1.value = cogs[1];
	} else {
		document.mainForm.cog1.value = "";
	}
	if (cogs[2] < 999) {
		document.mainForm.cog2.value = cogs[2];
	} else {
		document.mainForm.cog2.value = "";
	}
	if (cogs[3] < 999) {
		document.mainForm.cog3.value = cogs[3];
	} else {
		document.mainForm.cog3.value = "";
	}
	if (cogs[4] < 999) {
		document.mainForm.cog4.value = cogs[4];
	} else {
		document.mainForm.cog4.value = "";
	}
	if (cogs[5] < 999) {
		document.mainForm.cog5.value = cogs[5];
	} else {
		document.mainForm.cog5.value = "";
	}
	if (cogs[6] < 999) {
		document.mainForm.cog6.value = cogs[6];
	} else {
		document.mainForm.cog6.value = "";
	}
	if (cogs[7] < 999) {
		document.mainForm.cog7.value = cogs[7];
	} else {
		document.mainForm.cog7.value = "";
	}
	if (cogs[8] < 999) {
		document.mainForm.cog8.value = cogs[8];
	} else {
		document.mainForm.cog8.value = "";
	}
	if (cogs[9] < 999) {
		document.mainForm.cog9.value = cogs[9];
	} else {
		document.mainForm.cog9.value = "";
	}
	if (cogs[10] < 999) {
		document.mainForm.cog10.value = cogs[10];
	} else {
		document.mainForm.cog10.value = "";
	}
	// set the correct item in the pull down menu
	for (var i = 0; i < document.mainForm.cassette.options.length; i++) {
		if (document.mainForm.cassette.options[i].value == cassetteSelection) {
			document.mainForm.cassette.options[i].selected = true;
			break;
		}
	}
}

function updateCapacity() {
	gFrontCapacity = rings[numRings - 1] - rings[0];
	gRearCapacity = gFrontCapacity + cogs[numCogs - 1] - cogs[0];

	document.mainForm.frontcap.value = gFrontCapacity;
	document.mainForm.rearcap.value = gRearCapacity;
}

function clearTables() {
	if (displayType == 0)	// Was Graphical tables, now ASCII
	{
		// Clear Gear Chart
		grtbl.clear();
		// Clear Log Chart
		logtbl.clear();
		// Clear Speed Chart
		speedtbl.clear();
		// Clear Gain Chart
		gaintbl.clear();
		// Clear Rollout Chart
		rolltbl.clear();
	} else {
		// Clear Gear Chart
		document.mainForm.gearTableLabel.value = "";
		document.mainForm.gearTable.value = "\n\n\n\n\n";
		// Clear Log Chart
		document.mainForm.logGraph.value = "\n\n\n\n\n";
		// Clear Speed Chart
		document.mainForm.speed.value = "\n\n\n\n\n";
		// Clear Gain Chart
		document.mainForm.sheldon.value = "\n\n\n\n\n";
		// Clear Rollout Chart
		document.mainForm.rollout.value = "\n\n\n\n\n";
	}
}

function writeWheel() {
	//document.mainForm.wheel.options[wheelOption].selected = true;
	// set the correct item in the pull down menu
	for (var i = 0; i < document.mainForm.wheel.options.length; i++) {
		if (document.mainForm.wheel.options[i].value == wheelIndex) {
			document.mainForm.wheel.options[i].selected = true;
			break;
		}
	}
}

function writeCrank() {
	//document.mainForm.crank.options[crankOption].selected = crank;
	// set the correct item in the pull down menu
	for (var i = 0; i < document.mainForm.crank.options.length; i++) {
		if (document.mainForm.crank.options[i].value == crank) {
			document.mainForm.crank.options[i].selected = true;
			break;
		}
	}
}

function writeCheckboxes()	// update checkbox and radio buttons on the screen
{
	if (speedRangeType == 0) {
		document.mainForm.speedRangeButton[0].checked = true;
	} else {
		document.mainForm.speedRangeButton[1].checked = true;
	}

	document.mainForm.lRPM.value = lRPM;
	document.mainForm.hRPM.value = hRPM;

	if (showgrid == "show") {
		document.mainForm.showgrid.checked = true;
	} else {
		document.mainForm.showgrid.checked = false;
	}

	if (sortgears == "yes") {
		document.mainForm.sortgears.checked = true;
	} else {
		document.mainForm.sortgears.checked = false;
	}
	speedrtbl.paint();
}