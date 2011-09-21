// array of cogs we are using
cogs = new Array();
// array for our chainrings
rings = new Array(); 
// log graph width limits
var p1 = 81;
var p2 = 80;
var w2 = 800;
// default values
var cassetteSelection = 101;   // campy 12-25 10 speed
var cassetteOption;			 // index of selected cassette
var numCogs = 10;              // 10 speed
var crank = 170;               // default crank length
var crankOption;			 // index of selected crank
var wheelIndex = 8;            // defalut wheel size 
var wheelOption;               // which wheel option
var rolloutType = 1;           // 0=english, 1=metric
var speedType = 0;             // 0=mph, 1=kph
var RPM = 90;                  // crank speed
var speedRangeType = 0;        // 0=mph, 1=kph - for rpm/speed range display
var lRPM = 80;                 // crank speed - for rpm/speed range display
var hRPM = 100;                 // crank speed - for rpm/speed range display
var showgrid = "show";
var sortgears = "no";
var numRings = 3;
rings[0]=24;
rings[1]=36;
rings[2]=46;
cogs[0] = 12;                  // the default cogs - my Mariposa camp 10sp
cogs[1] = 13;
cogs[2] = 14;
cogs[3] = 15;
cogs[4] = 16;
cogs[5] = 17;
cogs[6] = 19;
cogs[7] = 21;
cogs[8] = 23;
cogs[9] = 25;
cogs[10] = 999;
highlightGear = 99;

// colors
var red ="#FF0000";
var black ="#000000";
var orange ="#FF7700";
var blue = "#0055ff";
var textcolor = "#000099";
var greytext = "#888888";	// number the cogs on the gear inch table.
var highlight = "#FF00FF";
var highlight2 = "#FFFF4D";	//"#FFCC00";

var gFrontCapacity = 0;
var gRearCapacity = 0;

var displayType = 1;		// 1=graphical, 0=ASCII display

var url;

function initGears() {
	// add cookie check here
	//processArgs();
	updateOutput();
}

// program defaults - all displays on - not used yet
var displayGear = 1;
var displayLogs = 0;
var displayLogsG = 1;
var displaySheldon = 1;
var displayPat = 1;

// calculated values
gear = new Array();
value = new Array();
ring = new Array();
ratio = new Array();
rollout = new Array();
speed = new Array();
lspeed = new Array();
hspeed = new Array();
// printable values
Pvalue = new Array();
Pratio = new Array();
Prollout = new Array();
Pspeed = new Array();
Plspeed = new Array();
Phspeed = new Array();

function updateOutput() {
   writeRings();
   writeCogs();
   writeCrank();
   writeWheel();
   calcGears();
   updateCapacity();
   writeCheckboxes();
   clearTables();
   if (displayType == 1)	// Graphical tables
   {
		gearChartG();
		semiLogG();
		speedRangeTableG();
		speedTableG();
		sheldonRatiosG();
		rolloutTableG();
   }
   else
   {					// ASCII tables
		gearChart(); 
		semiLog();
		speedRangeTableG();		// New output, not doing ASCII version
		speedTable();
		sheldonRatios();
		rolloutTable();
   }
}

function compareNum(a,b) {
	return a - b;
}

function calcGears() {
	with(Math)
	wheelName = wheel[wheelIndex];
	wheelSize = diameter[wheelIndex];
	radiusRatio = radius[wheelIndex] / crank;
	for (var j=0; j<numRings; j++){
		for(var i=0; i<numCogs; i++){
			gear[(j*numCogs)+i] = (rings[j]/cogs[i]) * numCogs -i;
			// inchgears
			value[(j*numCogs)+i] = (rings[j] / cogs[i]) * wheelSize;
			ring[(j*numCogs)+i] = rings[j];
			// Sheldon's ratios
			ratio[(j*numCogs)+i] = radiusRatio * rings[j] / cogs[i];
			// rollout
			rollout[(j*numCogs)+i] = value[(j*numCogs)+i] * Math.PI;
			// speed
			speed[(j*numCogs)+i] = (((rollout[(j*numCogs)+i] * RPM) * 60)/12)/5280;
			lspeed[(j*numCogs)+i] = (((rollout[(j*numCogs)+i] * lRPM) * 60)/12)/5280;
			hspeed[(j*numCogs)+i] = (((rollout[(j*numCogs)+i] * hRPM) * 60)/12)/5280;
		}
	}
	// printable values
	for (i=0; i<numRings * numCogs; i++) {
		Pvalue[i] = Math.round(value[i] * 10) / 10;
		Pratio[i] = Math.round(ratio[i] * 100) / 100;
		// no values over 10, trailing zeros added in print functions
		//if (Math.round(Pratio[i] * 10) == Pratio[i] * 10){  
		//	Pratio[i] = Pratio[i] + "0";
		//}
		Prollout[i] = Math.round(rollout[i] * 10) / 10;
		//if (Math.round(Prollout[i] * 10) == Prollout[i] * 10){
		//  Prollout[i] = Prollout[i] + "0";
		//}
		Pspeed[i] = Math.round(speed[i] * 10) / 10;
		Plspeed[i] = Math.round(lspeed[i] * 10) / 10;
		Phspeed[i] = Math.round(hspeed[i] * 10) / 10;
	}
}

function RPMrangeCheck() {
	if (hRPM <= lRPM)
	{
		hRPM = lRPM + 5;
	}
	updateOutput();
}


// read arguments attched to our URL

// ----===== test URLs =====----
// --------------------- normal
// file:///C:/mine/My Dropbox/www/shift4.2.html?R0=30&R1=40&R2=50&C0=13&C1=15&C2=18&C3=21&C4=25&C5=30&C6=999&C7=999&C8=999&C9=999&C10=999&WI=8&CR=180&RT=0&ST=1&RPM=90&lRPM=80&hRMP=100&G=0&S=1&TITLE=Loaded%20from%20URL
// --------------------- subset
// file:///C:/mine/My Dropbox/www/shift4.2.html?R0=30&R1=40&R2=50&C0=13&C1=15&C2=18&C3=21&C4=25&C5=30&C6=999&C7=999&C8=999&C9=999&C10=999&CR=180&TITLE=Loaded%20from%20URL%20-%20subset
// --------------------- subset & missing cogs
// file:///C:/mine/My Dropbox/www/shift4.2.html?R1=40&R2=50&C0=13&C1=15&C2=18&C3=21&C4=25&C6=30&CR=180&TITLE=Loaded%20from%20URL%20-%20subset%20&%20missing%20cogs
// --------------------- subset & bad order values
// file:///C:/mine/My Dropbox/www/shift4.2.html?R1=50&R2=40&C0=30&C1=15&C2=18&C3=21&C4=25&C6=13&CR=180&TITLE=Loaded%20from%20URL%20-%20subset%20&%20bad%20order%20values
// --------------------- cogs is wrong order
// file:///C:/mine/My Dropbox/www/shift4.2.html?R0=30&R1=40&R2=50&C0=13&C1=15&C3=21&C4=25&C5=30&C6=999&C7=999&C8=999&C2=18&C9=999&C10=999&WI=8&CR=180&RT=0&ST=1&RPM=90&lRPM=80&hRMP=100&G=0&S=1&TITLE=Loaded%20from%20URL%20-%20out%20of%20order
// --------------------- lots of errors
// file:///C:/mine/My Dropbox/www/shift4.2.html?R1=40&R2=50&C=-32&C1=15&C2=18&C3=21&C4=25&C5=30&C8=30&WI=8&CR=250&RT=2&ST=1&RPM=900&lRPM=80&hRMP=200&G=0&S=1&TITLE=Loaded%20from%20URL%20with%20errors

function processArgs()		// read arguments attched to our URL
{
	var query = window.location.search.substring(1);
	var parms = query.split('&');
	if (parms.length > 1) //if there are any arguments
	{
		// clear all sprockets
		rings[0] = 999;
		rings[1] = 999;
		rings[2] = 999;
		cogs[0] = 999;
		cogs[1] = 999;
		cogs[2] = 999;
		cogs[3] = 999;
		cogs[4] = 999;
		cogs[5] = 999;
		cogs[6] = 999;
		cogs[7] = 999;
		cogs[8] = 999;
		cogs[9] = 999;
		cogs[10] = 999;
		// then go through the list of arguments and load them
		for (var i=0; i<parms.length; i++) 
		{
			var pos = parms[i].indexOf('=');
			if (pos > 0) // if there are arguments
			{
				var key = parms[i].substring(0,pos);
				var val = parms[i].substring(pos+1);
				cassetteSelection = 0; // by default, make the cassette blank
				switch (key)
				{
					case "R0":		// chain rings
						rings[0] = parseInt(val);
						break;
					case "R1":
						rings[1] = parseInt(val);
						break;
					case "R2":
						rings[2] = parseInt(val);
						break;
					case "C0":		// cogs
						cogs[0] = parseInt(val);
						break;
					case "C1":
						cogs[1] = parseInt(val);
						break;
					case "C2":
						cogs[2] = parseInt(val);
						break;
					case "C3":
						cogs[3] = parseInt(val);
						break;
					case "C4":
						cogs[4] = parseInt(val);
						break;
					case "C5":
						cogs[5] = parseInt(val);
						break;
					case "C6":
						cogs[6] = parseInt(val);
						break;
					case "C7":
						cogs[7] = parseInt(val);
						break;
					case "C8":
						cogs[8] = parseInt(val);
						break;
					case "C9":
						cogs[9] = parseInt(val);
						break;
					case "C10":
						cogs[10] = parseInt(val);
						break;
					case "CAS":		// index of the selected cassette
						cassetteSelection = parseInt(val);
						break;
					case "WI":		// index into wheel size table
						wheelIndex = parseInt(val);
						break;
					case "CR":		// crank length
						crank = parseInt(val);
						break;
					case "RT":		// type of rollout table
						rolloutType = parseInt(val);
						break;
					case "ST":		// speed table speed type
						speedType = parseInt(val);
						break;
					case "RPM":		// speed table RPM
						RPM = parseInt(val);
						break;
					case "SRT":		// speed type on speed graph
						speedRangeType = parseInt(val);
						break;
					case "lRPM":	// speed graph, lower speed
						lRPM = parseInt(val);
						break;
					case "hRMP":	// speed graph, upper speed
						hRPM = parseInt(val);
						break;
					case "G":		// grid lines on speed graph
						showgrid = val;
						break;
					case "S":		// sort the speed graph
						sortgears = val;
						break;
					case "TITLE":	// set title
						while (val.indexOf("%20", 0) > 0)
						{
							val = val.replace("%20", " ");
						}
						document.title = "Mike Sherman's Gear Calculator - " + val;
						break;
				}
			}
		}
	}
}
