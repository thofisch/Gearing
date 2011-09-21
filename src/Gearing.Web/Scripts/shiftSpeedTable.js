// shift.html - speed table
//
// Copyright (c) 2004-2010 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

function speedTable()
{
	with(Math)
	document.mainForm.RPM.value = RPM     // update display

	// check the selected speed table type - 7/21/2009
	if ( document.mainForm.speedButton[0].checked == true )
	{
		speedType = 0;  // mph
		//document.mainForm.debugarea.value = "speed in mph"
	} else {
		speedType = 1;  // kph
		//document.mainForm.debugarea.value = "speed in kph"
	}
  
	outputString = new Array("", "", "");
	// print the cog list
	// padding to center
	outputString1 = "";
	for ( i=0; i<11-numCogs; i++){
		outputString1 = outputString1 + "   ";
	}
	// draw the line
	outputString1 = outputString1 + "    |";
	for ( i=0; i<numCogs; i++){
		outputString1 = outputString1 + "    " + cogs[i];
	}

	// draw the line
	// padding to center
	outputString2 = "\n";
	for ( i=0; i<11-numCogs; i++){
		outputString2 = outputString2 + "   ";
	}
	outputString2 = outputString2 + "----+";
	for ( i=0; i<numCogs; i++){
		outputString2 = outputString2 + "------";
	}
	outputString2 = outputString2 + "\n";
  
	// draw a rows of speed values
	outputString[0] = "";
	outputString[1] = "";
	outputString[2] = "";
	for ( i=0; i<11-numCogs; i++){
		outputString[0] = outputString[0] + "   ";
		outputString[1] = outputString[1] + "   ";
		outputString[2] = outputString[2] + "   ";
	}
	if ( numRings < 3 ) outputString[2] = "";	// mask if it will not be printed
	if ( numRings < 2 ) outputString[1] = "";	// mask if it will not be printed
	for ( j=(numRings-1); j>=0; j-- ){
		if (rings[j] > 0 && rings[j] < 999 ){
			outputString[j] = outputString[j] + " " + rings[j] + " |";
			for ( i=0; i<numCogs; i++){
				if (speedType == 1) {  // display kph speeds
					Pspeed[(j*numCogs)+i] = Math.round((Pspeed[(j*numCogs)+i] * 1.609344)*10)/10;
				}
				if ( Pspeed[(j*numCogs)+i] < 10){
					outputString[j] = outputString[j] + "   " + Pspeed[(j*numCogs)+i];
				} else {
					outputString[j] = outputString[j] + "  " + Pspeed[(j*numCogs)+i];
				}  
				// add trailing zero
				temp = Math.round(Pspeed[(j*numCogs)+i]);
				if ( Pspeed[(j*numCogs)+i] == temp ){
					outputString[j] = outputString[j] + ".0";
				} 
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.speed.value = outputString1 + outputString2 
    + outputString[2] + outputString[1] + outputString[0];
}

function speedTableG()
{
	var cw = 45;	// grid cell width   -   GRID CELLS 45 wide X 20
	var ch = 20;	// grid cell height
	var divw = 600;	// width of our <dev>
	var leftside;	// where the left side of the table is
	var pad = 8; 	// padding on the left of number cells ~ 1 character width
	var cellpad;	// variable padding
	var row;		// used to hold y coord for current row
	var outputString;
	
	speedtbl.setPrintable(true);
	speedtbl.clear();
	speedtbl.setColor(textcolor);
	speedtbl.setStroke(1);
	speedtbl.setFont("arial", "14px", Font.PLAIN);

	// check the selected speed table type - 7/21/2009
	if ( document.mainForm.speedButton[0].checked == true ){
		speedType = 0;  // mph
		//document.mainForm.debugarea.value = "speed in mph"
	} else {
		speedType = 1;  // kph
		//document.mainForm.debugarea.value = "speed in kph"
	}
  
	with(Math)
	document.mainForm.RPM.value = RPM     // update display
	leftside = (divw -((numCogs + 1 ) * cw ))/2;
  	
	// print the cog list ---------------------------------------
	cellpad = pad * 2;
	row = 0;
	for ( i=0; i<numCogs; i++){
		speedtbl.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
	}
	// draw the lines
	speedtbl.drawLine ( leftside, ch, leftside + ((numCogs + 1) * cw), ch );		// horz line
	speedtbl.drawLine ( leftside + cw, 0, leftside + cw, (numRings + 1) * ch );		// vert line
	// draw a rows of gear values ----------------------------------------
	// write the values
	for ( j=(numRings-1); j>=0; j-- ){		// for each chainring
		cellpad = pad * 2;
		row = ch + (j * ch);
		speedtbl.drawString (rings[j], leftside + cellpad, row );
		if (rings[j] > 0 && rings[j] < 999 ){	// if we have a ring			
			for ( i=0; i<numCogs; i++){	// for each cog	
				// add a leading space
				cellpad = pad * 2;
				outputString = "";
				if (speedType == 1) {  // display kph speeds
					Pspeed[(j*numCogs)+i] = Math.round((Pspeed[(j*numCogs)+i] * 1.609344)*10)/10;
				}
				if ( Pspeed[(j*numCogs)+i] < 10){
					cellpad = pad * 3;
				}
				outputString = outputString + Pspeed[(j*numCogs)+i];
				// add trailing zero
				temp = Math.round(Pspeed[(j*numCogs)+i]);
				if ( Pspeed[(j*numCogs)+i] == temp ){
					outputString = outputString + ".0";
				}
				speedtbl.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
			}
		}
	}
	speedtbl.paint();
}