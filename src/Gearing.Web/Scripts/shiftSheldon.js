// shift.html - Sheldon's gain ratio table
//
// Copyright (c) 2004-2010 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

function sheldonRatios()
{
	with(Math)
	outputString = new Array("", "", "");

	// print the cog list
	// padding to center
	outputString1 = "";
	for ( i=0; i<11-numCogs; i++){
		outputString1 = outputString1 + "   ";
	}
	outputString1 = outputString1 + "    |";
	for ( i=0; i<numCogs; i++){
		outputString1 = outputString1 + "    " + cogs[i];
	}
	
	// draw the line
	outputString2 = "\n";
	for ( i=0; i<11-numCogs; i++){
		outputString2 = outputString2 + "   ";
	}
	outputString2 = outputString2 + "----+";
	for ( i=0; i<numCogs; i++){
		outputString2 = outputString2 + "------";
	}
	outputString2 = outputString2 + "\n";
  
	// draw a rows of gear values
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
				if ( Pratio[(j*numCogs)+i] < 100){
					outputString[j] = outputString[j] + "  " + Pratio[(j*numCogs)+i];
				} else {
					outputString[j] = outputString[j] + " " + Pratio[(j*numCogs)+i];
				}
				// add trailing zero
				temp = Pratio[(j*numCogs)+i];
				if ( temp == Math.round(temp) ){
					//outputString = outputString + ".00";
					outputString[j] = outputString[j] + ".00";
				} else {
					if ( temp * 10 == Math.round(temp * 10) ){
						//outputString = outputString + "0";
						outputString[j] = outputString[j] + "0";
					}
				}
			}
			outputString[j] = outputString[j] + "\n";
		}
	}
	// write the output
	document.mainForm.sheldon.value = outputString1 + outputString2 
		+ outputString[2] + outputString[1] + outputString[0];
}


function sheldonRatiosG()
{
	var cw = 45;	// grid cell width   -   GRID CELLS 45 wide X 20
	var ch = 20;	// grid cell height
	var divw = 600;	// width of our <dev>
	var leftside;	// where the left side of the table is
	var pad = 8; 	// padding on the left of number cells ~ 1 character width
	var cellpad;	// variable padding
	var row;		// used to hold y coord for current row
	var outputString;
	
	gaintbl.setPrintable(true);
	gaintbl.clear();
	gaintbl.setColor(textcolor);
	gaintbl.setStroke(1);
	gaintbl.setFont("arial", "14px", Font.PLAIN);

	with(Math)
	leftside = (divw -((numCogs + 1 ) * cw ))/2;

	cellpad = pad * 2;
	row = 0;
	for ( i=0; i<numCogs; i++){
		gaintbl.drawString (cogs[i], leftside + cw + (i * cw) + cellpad, row );
	}
	// draw the lines
	gaintbl.drawLine ( leftside, ch, leftside + ((numCogs + 1) * cw), ch );			// horz line
	gaintbl.drawLine ( leftside + cw, 0, leftside + cw, (numRings + 1) * ch );		// vert line
	// draw a rows of gear values ----------------------------------------
	// write the values
	for ( j=(numRings-1); j>=0; j-- ){		// for each chainring
		cellpad = pad * 2;
		row = (j + 1) * ch;
		gaintbl.drawString (rings[j], leftside + cellpad, row );
		if (rings[j] > 0 && rings[j] < 999 ){	// if we have a ring			
			for ( i=0; i<numCogs; i++){	// for each cog	
				// add a leading space
				cellpad = pad;
				outputString = "";
				if ( Pratio[(j*numCogs)+i] < 100){
					cellpad = pad * 2;
				}
				outputString = outputString + Pratio[(j*numCogs)+i];
				// add trailing zero
				temp = Pratio[(j*numCogs)+i];
				if ( temp == Math.round(temp) ){
					outputString = outputString + ".00";
				} else {
					if ( temp * 10 == Math.round(temp * 10) ){
						outputString = outputString + "0";
					}
				}
				
				
				gaintbl.drawString (outputString, leftside + cw + (i * cw) + cellpad, row);
			}
		}
	}
	gaintbl.paint();
}
