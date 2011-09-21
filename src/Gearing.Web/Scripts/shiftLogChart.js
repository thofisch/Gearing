// shift.html - semi-log chart
//
// Copyright (c) 2004-2010 Michael Sherman. All rights reserved.
//
// LICENSE: LGPL
// 
// see shift.js for revision history

function semiLog()
{
  with(Math)
  var num1 = log(20);
  with(Math)
  var num2 = log(130);
  var outputString = new Array("", "", "", "", "");
  var line = 0;
  var l;
  var logcol;    // current column we ar drawing in the log graph
  var j;         // gear size values
  var Pj;        // printable gear size values - one character of j
  var theOutput = "";

  //document.mainForm.logGraph.value = "TEST 2\nnum1 = " + num1 + "\nnum2 = " + num2 ;

  // draw the log scale
  logcol=0;
  outputString[line] = "";
  
  // create the label for the log table = 6 lines x 82 columns
  for (j=20; j<131; j+=10){  // for each column in the table - 20" to 130" gears
	//document.mainForm.logGraph.value = "TEST\n" + j;

	with(Math)
	l = (log(j) - num1) * (p2/(num2-num1)) +1;

	// only printing one digit for each label on graph
	if (j == 100){                     // a 100 just print "1"
	  Pj = j/100;
	} else {                           // no else-if in javascript
	  if (j > 100){                    // over 100, print the 10's digit
		Pj = (j-100)/10;
	  } else {                         // under 100, just print the 10's digit
		Pj = j/10;
	  }
	}
	for ( i=l-logcol; i>0; i-- ){      // add spaces till the next label
	  logcol++;
	  outputString[line] = outputString[line] + " ";
	}
	outputString[line] = outputString[line] + Pj;  // write character to label string
	logcol++;
  }
  // write the label for the log table
  outputString[line] = outputString[line] + "\n";
  theOutput = theOutput + outputString[line];
  // the next line of the table = print a line
  line++;
  outputString[line] = "";
  for (j=0; j<p1; j++){
	outputString[line] = outputString[line] + "-";
  }
  outputString[line] = outputString[line] + "-\n";
  theOutput = theOutput + outputString[line];

  // now draw the gears
  // for each chainring
  for (j=0; j<numRings; j++){
	line++;
	outputString[line] = "";
	logcol=0;
	// for each cog
	for ( i=numCogs-1; i>-1; i-- ){
	  with(Math)
	  l = ((log(((rings[j] / cogs[i]) * wheelSize)) - num1) * (p2/(num2-num1))) +1;
	  // print the spaces
	  for ( x = l-logcol; x>0; x-- ) {
		logcol++;
		outputString[line] = outputString[line] + " ";
	  }
	  // print the cog number
	  tmps = numCogs - i;
	  if ( tmps > 9 ){
		tmps = tmps / 10;
	  }
	  outputString[line] = outputString[line] + tmps;
	  logcol++;
	}
	// pad the end of the line
	for ( x=logcol; x<p1+1; x++ ) {
	  outputString[line] = outputString[line] + " ";
	}
	outputString[line] = outputString[line] + "\n";
	theOutput = theOutput + outputString[line];
  }
  document.mainForm.logGraph.value = theOutput;
}

function semiLogG()
{
	with(Math)
	var num1 = log(20);
	with(Math)
	var num2 = log(130);
	var line = 0;
	var l;
	var j; 			// gear size values
	var line = 25;	// where the line is in the <div>
	var mt = 8;		// len of major tic marks
	var st = 5;		// len of small tic marks
	var r1 = 30;	// row positions  - was 30, 45, 60
	var r2 = 45;
	var r3 = 60;
  
	logtbl.setPrintable(true);
	logtbl.clear();
	logtbl.setColor(textcolor);
	logtbl.setFont("arial", "10px", Font.PLAIN);

	// draw the log scale
	// the next line of the table = print a line
	logtbl.setStroke(1);
	logtbl.drawLine(0,line,800,line);
	for (j=20; j<131; j+=10){  // label 20" to 130" gears
		with(Math)
		l = (log(j) - num1) * (w2/(num2-num1)) +1;
		logtbl.setStroke(1);
		// draw tick marks on the line
		logtbl.drawLine(l,line-mt,l,line);
		// write the label for the log table
		logtbl.drawString(j,l,5);
	}  
	for (j=20; j<131; j+=5){  // label the 5" points
		with(Math)
		l = (log(j) - num1) * (w2/(num2-num1)) +1;
		logtbl.setStroke(1);
		// draw tick marks on the line
		logtbl.drawLine(l,line-st,l,line);
	}  

	// now draw the gears
	//   for each chainring
	for (j=0; j<numRings; j++){
		// for each cog
		for ( i=numCogs-1; i>-1; i-- ){
			with(Math)
			l = ((log(((rings[j] / cogs[i]) * wheelSize)) - num1) * (w2/(num2-num1))) +1;
			logtbl.setStroke(2);
			if (j==0) // first row - small chainring - circles 
			{
				if (i == highlightGear)
				{
					logtbl.setColor(highlight2);	// highlight cog
					logtbl.fillEllipse(l-5, r1+1, 11,11);
				}
				logtbl.setColor(red);
				logtbl.drawEllipse(l-2, r1, 2,2);
				logtbl.setStroke(1);
				logtbl.drawLine(l,r1,l,r1+10);
			}
			if (j==1) //  second row - triangles
			{
				if (i == highlightGear)
				{
					logtbl.setColor(highlight2);	// highlight cog
					logtbl.fillEllipse(l-5, r2+1, 11,11);
				}
				logtbl.setColor(black);
				var Xpoints = new Array(l-3, l+3, l);
				var Ypoints = new Array(r2+2, r2+2, r2-1);
				logtbl.fillPolygon(Xpoints,Ypoints);
				logtbl.setStroke(1);
				logtbl.drawLine(l,r2,l,r2+10);
			}
			if (j==2) // third row - squares
			{
				if (i == highlightGear)
				{
					logtbl.setColor(highlight2);	// highlight cog
					logtbl.fillEllipse(l-5, r3+1, 11,11);
				}
				logtbl.setColor(blue);
				logtbl.drawRect(l-2, r3, 2, 2);
				logtbl.setStroke(1);
				logtbl.drawLine(l,r3,l,r3+10);
			}	
		}
	}
	logtbl.paint();
}
