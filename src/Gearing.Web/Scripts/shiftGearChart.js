function gearChart() {
	with (Math)
	outputString = new Array("", "", "");

	// fill in the heading box -------------------------------
	document.mainForm.gearTableLabel.value = "Gear Inch Chart - " + numCogs + " x " + numRings;


	// print the cog list ---------------------------------------
	outputString1 = "";
	outputString0 = "";
	// padding to center
	for (var i = 0; i < 11 - numCogs; i++) {
		outputString1 = outputString1 + "   ";
		outputString0 = outputString0 + "   ";
	}
	// the start of the lines
	outputString1 = outputString1 + "    |";
	outputString0 = outputString0 + "     ";
	// fill the lines
	for (i = 0; i < numCogs; i++) {
		outputString1 = outputString1 + "    " + cogs[i];
		tmps = numCogs - i;
		//if ( tmps > 9 ){
		//	tmps = tmps / 10;
		//}
		if (tmps > 9) {
			outputString0 = outputString0 + "  (" + tmps + ")";
		} else {
			outputString0 = outputString0 + "   (" + tmps + ")";
		}
	}
	outputString0 = outputString0 + "\n";

	// draw the line --------------------------------------
	outputString2 = "\n";
	// padding to center
	for (i = 0; i < 11 - numCogs; i++) {
		outputString2 = outputString2 + "   ";
	}
	// the start of the line
	outputString2 = outputString2 + "----+";
	for (i = 0; i < numCogs; i++) {
		outputString2 = outputString2 + "------";
	}
	outputString2 = outputString2 + "\n";

	// draw a rows of gear values ----------------------------------------
	// padd to center
	outputString[0] = "";
	outputString[1] = "";
	outputString[2] = "";
	for (i = 0; i < 11 - numCogs; i++) {
		outputString[0] = outputString[0] + "   ";
		outputString[1] = outputString[1] + "   ";
		outputString[2] = outputString[2] + "   ";
	}
	if (numRings < 3) {
		outputString[2] = "";
	} // mask if it will not be printed
	if (numRings < 2) {
		outputString[1] = "";
	} // mask if it will not be printed
	// write the values
	for (j = (numRings - 1); j >= 0; j--) {
		if (rings[j] > 0 && rings[j] < 999) {
			outputString[j] = outputString[j] + " " + rings[j] + " |";
			for (i = 0; i < numCogs; i++) {
				if (Pvalue[(j * numCogs) + i] < 100) {
					outputString[j] = outputString[j] + "  " + Pvalue[(j * numCogs) + i];
				} else {
					outputString[j] = outputString[j] + " " + Pvalue[(j * numCogs) + i];
				}
				// add trailing zero
				temp = Math.round(Pvalue[(j * numCogs) + i]);
				if (Pvalue[(j * numCogs) + i] == temp) {
					outputString[j] = outputString[j] + ".0";
				}
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.gearTable.value = outputString0 + outputString1 + outputString2 + outputString[2] + outputString[1] + outputString[0];
}

function gearChartG() {
	var cw = 45; // grid cell width   -   GRID CELLS 45 wide X 20
	var ch = 20; // grid cell height
	var divw = 700; // width of our <dev>
	var leftside; // where the left side of the table is
	var pad = 8; // padding on the left of number cells ~ 1 character width
	var cellpad; // variable padding
	var row; // used to hold y coord for current row
	var outputString;

	grtbl.setPrintable(true);
	grtbl.clear();
	grtbl.setColor(textcolor);
	grtbl.setStroke(1);

	with (Math)
	{
		leftside = (divw - ((numCogs + 1) * cw)) / 2;
	}

	// print the cog numbers------------------------------------
	grtbl.setColor(greytext);
	row = ch;
	cellpad = pad * 2;
	for (i = 0; i < numCogs; i++) {
		tmps = numCogs - i;
		grtbl.drawString("(" + tmps + ")", leftside + cw + (i * cw) + cellpad, row);
	}
	// fill in the heading box ---------------------------------
	grtbl.setColor(textcolor);
	grtbl.setFont("arial", "16px", Font.PLAIN);
	grtbl.drawStringRect("Gear Inch Chart - " + numCogs + " x " + numRings, 0, 0, divw, "center")
	grtbl.setFont("arial", "14px", Font.PLAIN); // for the rest of the page
	// print the cog list ---------------------------------------
	grtbl.setColor(textcolor);
	cellpad = pad * 2;
	row = ch * 2;
	for (i = 0; i < numCogs; i++) {
		if (i == highlightGear) {
			grtbl.setColor(highlight); // highlight cog
		} else {
			grtbl.setColor(textcolor);
		}
		grtbl.drawString(cogs[i], leftside + cw + (i * cw) + cellpad, row);
		grtbl.setColor(textcolor);
	}
	// draw the lines
	grtbl.drawLine(leftside, ch * 3, leftside + ((numCogs + 1) * cw), ch * 3); // horz line
	grtbl.drawLine(leftside + cw, ch * 2, leftside + cw, (ch * 2) + ((numRings + 1) * ch)); // vert line

	// highlight block of gears
	if (highlightGear != 99)	// highlighting is turned on
	{
		grtbl.setColor(highlight2); // highlight cog
		var hxcorner = leftside + (cw * 3) + ((highlightGear - 2) * cw) + 3;
		var hycorner = ch * 3 + 2;
		grtbl.fillRect(hxcorner, hycorner, cw, (numRings * ch) - 5); // arguments are (x,y,w,h)
		grtbl.setColor(textcolor);
	}

	// draw a rows of gear values ----------------------------------------
	// write the values
	for (j = (numRings - 1); j >= 0; j--) { // for each chainring
		cellpad = pad * 2;
		row = (ch * 3) + (j * ch);
		grtbl.drawString(rings[j], leftside + cellpad, row);
		if (rings[j] > 0 && rings[j] < 999) { // if we have a ring			
			for (i = 0; i < numCogs; i++) { // for each cog	
				// add a leading space
				cellpad = pad;
				outputString = "";
				if (Pvalue[(j * numCogs) + i] < 100) {
					cellpad = pad * 2;
				}
				outputString = outputString + Pvalue[(j * numCogs) + i];
				// add trailing zero
				temp = Math.round(Pvalue[(j * numCogs) + i]);
				if (Pvalue[(j * numCogs) + i] == temp) {
					outputString = outputString + ".0";
				}
				grtbl.drawString(outputString, leftside + cw + (i * cw) + cellpad, row);
			}
		}
	}
	grtbl.paint();
}