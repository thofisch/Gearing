// shift.html - rollout table
//
// Copyright (c) 2004-2010 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

function rolloutTable()
{
	with(Math)
	outputString = new Array("", "", "");

	// check the selected rollout type - 7/21/2009
	if ( document.mainForm.rolloutButton[0].checked == true ){
		rolloutType = 0;  // english
		//alert("getRolloutType = english");
		//document.mainForm.debugarea.value = "rollout in mph"
	} else {
		rolloutType = 1;  // metric
		//alert("getRolloutType = metric");
		//document.mainForm.debugarea.value = "rollout in kph"
	}
  
	// print the cog list
	// padding to center
	outputString1 = "";
	for ( i=0; i<11-numCogs; i++){
		outputString1 = outputString1 + "   ";
	}
	outputString1 = outputString1 + "    |";
	for ( i=0; i<numCogs; i++){
		outputString1 = outputString1 + "     " + cogs[i];
	}

	// draw the line
	outputString2 = "\n";
	for ( i=0; i<11-numCogs; i++){
		outputString2 = outputString2 + "   ";
	}
	outputString2 = outputString2 + "----+";
	for ( i=0; i<numCogs; i++){
		outputString2 = outputString2 + "-------";
	}
	outputString2 = outputString2 + "\n";
    
	// draw a rows of rollout values
	// padd to center
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
	// draw the values
	for ( j=(numRings-1); j>=0; j-- ){
		if (rings[j] > 0 && rings[j] < 999 ){
			outputString[j] = outputString[j] + " " + rings[j] + " |";
			for ( i=0; i<numCogs; i++){
				temp1 = Prollout[(j*numCogs)+i];
				if ( rolloutType == 1 ){   // displaying metric rollouts
					temp1 = temp1 * 0.0254;
					temp1 = (Math.round(temp1 * 100)) / 100;  // round to 2 places
					if ( temp1 > 10){
						outputString[j] = outputString[j] + "  " + temp1;
					} else {
						outputString[j] = outputString[j] + "   " + temp1;
					}
					// add trailing zero
					if ( temp1 == Math.round(temp1) ){
						outputString[j] = outputString[j] + ".00";
					}else{
						if ( temp1 * 10 == Math.round(temp1 * 10) ){
							outputString[j] = outputString[j] + "0";
						}
					}
				} else {                // displaying english rollouts
					if ( temp1 < 100){
						outputString[j] = outputString[j] + "   " + temp1;
					} else {
						outputString[j] = outputString[j] + "  " + temp1;
					}
					// add trailing zero
					if ( temp1 == Math.round(temp1) ){
						outputString[j] = outputString[j] + ".0";
					}
				}
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.rollout.value = outputString1 + outputString2 
		+ outputString[2] + outputString[1] + outputString[0];
}

function rolloutTableG()
{
	var cw = 45;	// grid cell width   -   GRID CELLS 45 wide X 20
	var ch = 20;	// grid cell height
	var divw = 600;	// width of our <dev>
	var leftside;	// where the left side of the table is
	var pad = 8; 	// padding on the left of number cells ~ 1 character width
	var cellpad;	// variable padding
	var row;		// used to hold y coord for current row
	var outputString;

		// check the selected rollout type - 7/21/2009
	if ( document.mainForm.rolloutButton[0].checked == true ){
		rolloutType = 0;  // english
		//alert("getRolloutType = english");
		//document.mainForm.debugarea.value = "\nrollout in mph"
	} else {
		rolloutType = 1;  // metric
		//alert("getRolloutType = metric");
		//document.mainForm.debugarea.value = "\nrollout in kph"
	}
  
	// check the selected rollout type
	if ( document.mainForm.rolloutButton[0].checked == true ){
		rolloutType = 0;  // english
		//alert("getRolloutType = english");
	} else {
		rolloutType = 1;  // metric
		//alert("getRolloutType = metric");
	}
  	
	rolltbl.setPrintable(true);
	rolltbl.clear();
	rolltbl.setColor(textcolor);
	rolltbl.setStroke(1);
	rolltbl.setFont("arial", "14px", Font.PLAIN);

	with(Math)
	leftside = (divw -((numCogs + 1 ) * cw ))/2;
  	
	// print the cog list ---------------------------------------
	cellpad = pad * 2;
	row = 0;
	for ( i=0; i<numCogs; i++){
		rolltbl.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
	}
	// draw the lines
	rolltbl.drawLine ( leftside, ch, leftside + ((numCogs + 1) * cw), ch );			// horz line
	rolltbl.drawLine ( leftside + cw, 0, leftside + cw, (numRings + 1) * ch );		// vert line
	// draw a rows of gear values ----------------------------------------
	// write the values
	for ( j=(numRings-1); j>=0; j-- ){		// for each chainring
		cellpad = pad * 2;
		row = (j + 1) * ch;
		rolltbl.drawString (rings[j], leftside + cellpad, row );
		if (rings[j] > 0 && rings[j] < 999 ){	// if we have a ring			
			for ( i=0; i<numCogs; i++){	// for each cog	
				// add a leading space
				cellpad = pad;
				outputString = "";				
				temp1 = Prollout[(j*numCogs)+i];
				if ( rolloutType == 1 ){   			// displaying metric rollouts
					temp1 = temp1 * 0.0254;
					temp1 = (Math.round(temp1 * 100)) / 100;  // round to 2 places
					if ( temp1 > 10){
						cellpad = pad * 1;
					} else {
						cellpad = pad * 2;
					}
					outputString = outputString + temp1;
					// add trailing zero
					if ( temp1 == Math.round(temp1) ){
						outputString = outputString + ".00";
					} else {
						if ( temp1 * 10 == Math.round(temp1 * 10) ){
							outputString = outputString + "0";
						}
					}
				} else {					// display english rollouts
					if ( temp1 < 100){
						cellpad = pad * 2;
					} else {
						cellpad = pad;
					}
					outputString = outputString + temp1;
					// add trailing zero
					temp = Math.round(temp1);
					if ( temp1 == temp ){
						outputString = outputString + ".0";
					}
				}
				rolltbl.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
			}
		}
	}
	rolltbl.paint();
}
