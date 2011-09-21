// this is the selectCassette function for shift.js
// 5/5/2009	correct cogs - sachs 13-28, 6 sp and 13-32, 7 sp
// 			SUNTOUR Perfect 6-speed freewheel w/ 14-28 gearing; cogs are 14-16-18-21-24-28
// 2/4/2010	fix duplicate cassette numbers 105 and above
//			there is no # 104
// 12/29/2010	add IRD freewheels
// 03/04/2011	SRAM X5 cassette - it's an 11-34, 9-speed cassette having 11,13,15,17,20,23,26,30,34 as the cog sizes. - Ken Benson <ken@bkenbenson.com>
//
function selectCassette()
{
  cassetteOption = document.mainForm.cassette.options.selectedIndex;
  cassetteSelection = document.mainForm.cassette.options[document.mainForm.cassette.options.selectedIndex].value;
  if ( cassetteSelection == 1 ){	// My touring bike 13-30
    cogs[0] = 13;
    cogs[1] = 16;
    cogs[2] = 20;
    cogs[3] = 25;
    cogs[4] = 30;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }				//-------- more 5 speeds -----------------
  if ( cassetteSelection == 105 ){	// 14-18
    cogs[0] = 14;
    cogs[1] = 15;
    cogs[2] = 16;
    cogs[3] = 17;
    cogs[4] = 18;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 106 ){	// 14-22
    cogs[0] = 14;
    cogs[1] = 15;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 22;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 107 ){	// 14-24
    cogs[0] = 14;
    cogs[1] = 16;
    cogs[2] = 18;
    cogs[3] = 21;
    cogs[4] = 24;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 108 ){	// 14-26
    cogs[0] = 14;
    cogs[1] = 16;
    cogs[2] = 18;
    cogs[3] = 21;
    cogs[4] = 26;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 109 ){	// 14-28
    cogs[0] = 14;
    cogs[1] = 16;
    cogs[2] = 19;
    cogs[3] = 23;
    cogs[4] = 28;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 110 ){	// 14-32
    cogs[0] = 14;
    cogs[1] = 17;
    cogs[2] = 21;
    cogs[3] = 26;
    cogs[4] = 32;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 111 ){	// 14-34
    cogs[0] = 14;
    cogs[1] = 17;
    cogs[2] = 21;
    cogs[3] = 27;
    cogs[4] = 34;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 112 ){	// 13-17
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 113 ){	// 13-18
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 114 ){	// 13-22
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 19;
    cogs[4] = 22;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 115 ){	// 13-24
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 24;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 116 ){	// 13-26
    cogs[0] = 13;
    cogs[1] = 16;
    cogs[2] = 19;
    cogs[3] = 22;
    cogs[4] = 26;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 117 ){	// 14-28
    cogs[0] = 13;
    cogs[1] = 16;
    cogs[2] = 19;
    cogs[3] = 23;
    cogs[4] = 28;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 118 ){	// 13-32
    cogs[0] = 13;
    cogs[1] = 16;
    cogs[2] = 20;
    cogs[3] = 26;
    cogs[4] = 32;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 119 ){	// 13-34
    cogs[0] = 13;
    cogs[1] = 16;
    cogs[2] = 20;
    cogs[3] = 26;
    cogs[4] = 34;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }				//---------- end of 5 speeds----------
  if ( cassetteSelection == 2 ){	// Sachs 6 Speed Freewheel 13-18
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 3 ){	// Sachs 6 Speed Freewheel 13-21
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 4 ){	// Sachs 6 Speed Freewheel 13-24
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 5 ){	// Sachs 6 Speed Freewheel 13-26
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 23;
    cogs[5] = 26;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 6 ){	// Sachs 6 Speed Freewheel 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 24;
    cogs[5] = 28;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }				//---------- end of 6 speeds ---------------
  if ( cassetteSelection == 7 ){	// Sachs 7 speed freewheel 12-19
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 8 ){	// Sachs 7 speed freewheel 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 9 ){	// Sachs 7 speed freewheel 13-21
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 10 ){	// Sachs 7 speed freewheel 12-24
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 11 ){	// Sachs 7 speed freewheel 13-24
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = "999";
    cogs[8] = "999";

    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 12 ){	// Sachs 7 speed freewheel 13-26
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 13 ){	// Sachs 7 speed freewheel 12-28
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 20;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 14 ){	// Sachs 7 speed freewheel 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 15 ){	// Sachs 7 speed freewheel 13-30
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 23;
    cogs[5] = 26;
    cogs[6] = 30;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 16 ){	// Sachs 7 speed freewheel 13-32
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 24;
    cogs[5] = 28;
    cogs[6] = 32;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 17 ){	// Sunrace 7 speed freewheel 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 18 ){	// Shimano 7 speed cassette HG 70 11-28
    cogs[0] = 11;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 18;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 19 ){	// Shimano 7 speed cassette HG 90 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 20 ){	// Shimano 7 speed cassette HG 90 12-28
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 21 ){	// Shimano 7 speed cassette HG 90 13-21
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 22 ){	// Shimano 7 speed cassette HG 90 13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 23;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 23 ){	// Shimano 7 speed cassette HG 90 13-26
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 24 ){	// Shimano 7 speed cassette HG 90 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 25 ){	// Shimano 7 speed cassette HG 90 13-30
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 23;
    cogs[5] = 26;
    cogs[6] = 30;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 26 ){	// Shimano 7 speed cassette HG 90 14-32
    cogs[0] = 14;
    cogs[1] = 16;
    cogs[2] = 18;
    cogs[3] = 21;
    cogs[4] = 24;
    cogs[5] = 28;
    cogs[6] = 32;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 27 ){	// Shimano 7 speed cassette HG 90 13-34
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 24;
    cogs[5] = 29;
    cogs[6] = 34;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }				//---------- end of 7 speeds ------------
  if ( cassetteSelection == 28 ){	// Sachs 8 speed freewheel 12-19
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 29 ){	// Sachs 8 speed freewheel 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 30 ){	// Sachs 8 speed freewheel 12-24
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 24;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 31 ){	// Sachs 8 speed freewheel 12-26
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 20;
    cogs[5] = 22;
    cogs[6] = 24;
    cogs[7] = 26;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 32 ){	// Sachs 8 speed freewheel 12-28
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 20;
    cogs[5] = 22;
    cogs[6] = 25;
    cogs[7] = 28;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 33 ){	// Sachs 8 speed freewheel 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 23;
    cogs[6] = 25;
    cogs[7] = 28;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 34 ){	// Sachs 8 speed freewheel 12-30
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 20;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 35 ){	// Sachs 8 speed freewheel 13-30
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 36 ){	// Sachs 8 speed freewheel 12-32
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = 32;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 37 ){	// Shimano Deore XT 8 Speed IG Cassette 11-28
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 14;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = 28;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 38 ){	// Shimano Deore XT 8 Speed IG Cassette 11-30
    cogs[0] = 11;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 20;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 39 ){	// Shimano XTR 8sp HG Cassette 12-28
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = 28;
    cogs[8] = "999";

    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 40 ){	// Shimano XTR 8sp HG Cassette 12-32
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = 32;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 41 ){	// Shimano Dura Ace HG 8 spd Cassette 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 42 ){	// Shimano Dura Ace HG 8 spd Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 43 ){	// Shimano Dura Ace HG 8 spd Cassette 12-25
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 23;
    cogs[7] = 25;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 44 ){	// Shimano Dura Ace HG 8 spd Cassette 13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 45 ){	// Shimano Dura Ace HG 8 spd Cassette 13-26
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 23;
    cogs[7] = 26;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 46 ){	// Shimano HG50 8spd Cassette 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 47 ){	// Shimano HG50 8spd Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 48 ){	// Shimano HG50 8spd Cassette 12-25
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 23;
    cogs[7] = 25;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 49 ){	// Shimano HG50 8spd Cassette 13-26
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 23;
    cogs[7] = 26;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 50 ){	// Sram 5.0 8 speed Cassette 11-32
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 14;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = 21;
    cogs[6] = 26;
    cogs[7] = 32;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 51 ){	// Sachs 8 speed Quartz Cassette for Sachs Freehubs 11-28
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 14;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = 28;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 52 ){	// Sachs 8 speed Quartz Cassette for Sachs Freehubs 12-32
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = 32;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 53 ){	// Campagnolo 8 Speed Cassette  12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 54 ){	// Campagnolo 8 Speed Cassette  13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 55 ){	// Campagnolo 8 Speed Cassette  13-26
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 23;
    cogs[7] = 26;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }				//---------- end of 8 speeds ----------
  if ( cassetteSelection == 56 ){	// Sram 7.0 9 Speed Cassette 11-32
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 14;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = 28;
    cogs[8] = 32;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 57 ){	// Shimano XTR TI 9 speed Cassette Cogs 11-30
    cogs[0] = 11;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 20;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 58 ){	// Shimano XTR TI 9 speed Cassette Cogs 12-2 
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = 32;
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 59 ){	// Shimano XTR 9sp Mega 9 Cassette 12-34
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 20;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = 34;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 60 ){	// Shimano Dura Ace 9 Speed Cassette 11-21
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 16;
    cogs[6] = 17;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 61 ){	// Shimano Dura Ace 9 Speed Cassette 11-23
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 62 ){	// Shimano Dura Ace 9 Speed Cassette 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 63 ){	// Shimano Dura Ace 9 Speed Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 64 ){	// Shimano Dura Ace 9 Speed Cassette 12-25
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 25;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 65 ){	// Shimano Dura Ace 9 Speed Cassette 12-27
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 24;
    cogs[8] = 27;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 66 ){	// Shimano M750 9 speed Cassette 11-32
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 14;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = 28;
    cogs[8] = 32;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 67 ){	// Shimano M750 9 speed Cassette 12-34
    cogs[0] = 12;
    cogs[1] = 14;
    cogs[2] = 16;
    cogs[3] = 18;
    cogs[4] = 20;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = 34;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 68 ){	// Shimano M750 9 speed Cassette 11-34
    cogs[0] = 11;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 20;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = 34;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 69 ){	// Shimano Ultegra 9 speed Cassette 11-21
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 16;
    cogs[6] = 17;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 70 ){	// Shimano Ultegra 9 speed Cassette 11-23
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 71 ){	// Shimano Ultegra 9 speed Cassette 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 72 ){	// Shimano Ultegra 9 speed Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 73 ){	// Shimano Ultegra 9 speed Cassette 12-25
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 25;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 74 ){	// Shimano Ultegra 9 speed Cassette 12-27
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 24;
    cogs[8] = 27;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 75 ){	// Shimano Ultegra 9 speed Cassette 13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 76 ){	// Shimano Ultegra 9 speed Cassette 13-25
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 25;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 77 ){	// Shimano Ultegra 9 speed Cassette 14-25
    cogs[0] = 14;
    cogs[1] = 15;
    cogs[2] = 16;
    cogs[3] = 17;
    cogs[4] = 18;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 25;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 78 ){	// Shimano HG70 9 speed Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 79 ){	// Shimano HG70 9 speed Cassette 12-25
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 25;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 80 ){	// Shimano HG70 9 speed Cassette 13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 81 ){	// Shimano HG70 9 speed Cassette 13-25
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 25;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 82 ){	// Shimano HG70 9 speed Cassette 11-32
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 14;
    cogs[3] = 16;
    cogs[4] = 18;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = 28;
    cogs[8] = 32;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 83 ){	// Campagnolo 9 Speed Cassette 11-21
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 16;
    cogs[6] = 17;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 84 ){	// Campagnolo 9 Speed Cassette 11-23
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 85 ){	// Campagnolo 9 Speed Cassette 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 86 ){	// Campagnolo 9 Speed Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 87 ){	// Campagnolo 9 Speed Cassette 13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 88 ){	// Campagnolo 9 Speed Cassette 13-26
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 26;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 89 ){	// Campagnolo Chorus E d 9 speed Cassette 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 90 ){	// Campagnolo Chorus E d 9 speed Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 91 ){	// Campagnolo Chorus E d 9 speed Cassette 13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 92 ){	// Campagnolo Chorus E d 9 speed Cassette 13-26
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 26;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 93 ){	// Campagnolo Veloce Cassette 9 speed 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 94 ){	// Campagnolo Veloce Cassette 9 speed 11-23
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 95 ){	// Campagnolo Veloce Cassette 9 speed 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 96 ){	// Campagnolo Veloce Cassette 9 speed 13-23
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 97 ){	// Campagnolo Veloce Cassette 9 speed 13-26
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 26;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 98 ){	// Campagnolo Veloce Cassette 9 speed 13-28
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 23;
    cogs[7] = 25;
    cogs[8] = 28;
    cogs[9] = "999";
    cogs[10] = "999";
  }				//---------- end of 9 speeds ----------
  if ( cassetteSelection == 99 ){	// Campagnolo 10 speed Cassette 11-21
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 16;
    cogs[6] = 17;
    cogs[7] = 18;
    cogs[8] = 19;
    cogs[9] = 21;
    cogs[10] = "999";
  }
  if ( cassetteSelection == 100 ){	// Campagnolo 10 speed Cassette 11-23
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 16;
    cogs[6] = 17;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = 23;
    cogs[10] = "999";
  }
  if ( cassetteSelection == 101 ){	// Campagnolo 10 speed Cassette 12-25
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = 25;
    cogs[10] = "999";
  }
  if ( cassetteSelection == 102 ){	// Campagnolo 10 speed Cassette 13-26
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = 26;
    cogs[10] = "999";
  }
  if ( cassetteSelection == 103 ){	// Campagnolo 10 speed Cassette 13-29
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 19;
    cogs[6] = 21;
    cogs[7] = 23;
    cogs[8] = 26;
    cogs[9] = 29;
    cogs[10] = "999";
  }
  if ( cassetteSelection == 120 ){ // Dura Ace 10 speed Cassette 12-21
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 20;
    cogs[9] = 21;
    cogs[10] = 999;
  }
  if ( cassetteSelection == 121 ){ // Dura Ace 10 speed Cassette 11-23
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 16;
    cogs[6] = 17;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = 23;
    cogs[10] = 999;
  }
  if ( cassetteSelection == 122 ){ // Dura Ace 10 speed Cassette 12-23
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = 23;
    cogs[10] = 999;
  }
  if ( cassetteSelection == 123 ){ // Dura Ace 10 speed Cassette 12-25
    cogs[0] = 12;
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
  }
  if ( cassetteSelection == 124 ){ // Dura Ace 10 speed Cassette 13-25
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 16;
    cogs[4] = 17;
    cogs[5] = 18;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = 25;
    cogs[10] = 999;
  }
  if ( cassetteSelection == 125 ){ // Dura Ace 10 speed Cassette 12-27
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 24;
    cogs[9] = 27;
    cogs[10] = 999;
  }				//---------- end of 10 speeds ----------
  if ( cassetteSelection == 126 ){ // Campagnolo 11 speed Cassette 11-23
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 20;
    cogs[9] = 21;
    cogs[10] = 23;
  }
  if ( cassetteSelection == 127 ){ // Campagnolo 11 speed Cassette 11-25
    cogs[0] = 11;
    cogs[1] = 12;
    cogs[2] = 13;
    cogs[3] = 14;
    cogs[4] = 15;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = 23;
    cogs[10] = 25;
  }
  if ( cassetteSelection == 128 ){ // Campagnolo 11 speed Cassette 12-25
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 18;
    cogs[7] = 19;
    cogs[8] = 21;
    cogs[9] = 23;
    cogs[10] = 25;
  }
  if ( cassetteSelection == 129 ){ // Campagnolo 11 speed Cassette 12-27
    cogs[0] = 12;
    cogs[1] = 13;
    cogs[2] = 14;
    cogs[3] = 15;
    cogs[4] = 16;
    cogs[5] = 17;
    cogs[6] = 19;
    cogs[7] = 21;
    cogs[8] = 23;
    cogs[9] = 25;
    cogs[10] = 27;
  }
  if ( cassetteSelection == 130 ){	// IRD Freewheels - 5 speed - 13-24
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 20;
    cogs[4] = 24;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 131 ){	// IRD Freewheels - 5 speed - 13-28
    cogs[0] = 13;
    cogs[1] = 16;
    cogs[2] = 20;
    cogs[3] = 24;
    cogs[4] = 28;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 132 ){	// IRD Freewheels - 5 speed - 13-32
    cogs[0] = 13;
    cogs[1] = 16;
    cogs[2] = 20;
    cogs[3] = 24;
    cogs[4] = 32;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 133 ){	// IRD Freewheels - 5 speed - 14-28
    cogs[0] = 14;
    cogs[1] = 16;
    cogs[2] = 20;
    cogs[3] = 24;
    cogs[4] = 28;
    cogs[5] = "999";
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 134 ){	// IRD Freewheels - 6 speed - 13-24
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 135 ){	// IRD Freewheels - 6 speed - 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 18;
    cogs[3] = 21;
    cogs[4] = 24;
    cogs[5] = 28;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 135 ){	// IRD Freewheels - 6 speed - 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 18;
    cogs[3] = 21;
    cogs[4] = 24;
    cogs[5] = 28;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 136 ){	// IRD Freewheels - 6 speed - 14-32
    cogs[0] = 14;
    cogs[1] = 17;
    cogs[2] = 20;
    cogs[3] = 24;
    cogs[4] = 28;
    cogs[5] = 32;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 137 ){	// IRD Freewheels - 6 speed - 14-34
    cogs[0] = 14;
    cogs[1] = 16;
    cogs[2] = 19;
    cogs[3] = 24;
    cogs[4] = 28;
    cogs[5] = 34;
    cogs[6] = "999";
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 138 ){	// IRD Freewheels - 7 speed - 13-24
    cogs[0] = 13;
    cogs[1] = 14;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 19;
    cogs[5] = 21;
    cogs[6] = 24;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 139 ){	// IRD Freewheels - 7 speed - 13-28
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 28;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 140 ){	// IRD Freewheels - 7 speed - 13-32
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 19;
    cogs[4] = 21;
    cogs[5] = 24;
    cogs[6] = 32;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 141 ){	// IRD Freewheels - 7 speed - 13-32
    cogs[0] = 13;
    cogs[1] = 15;
    cogs[2] = 17;
    cogs[3] = 21;
    cogs[4] = 24;
    cogs[5] = 28;
    cogs[6] = 32;
    cogs[7] = "999";
    cogs[8] = "999";
    cogs[9] = "999";
    cogs[10] = "999";
  }
  if ( cassetteSelection == 142 ){	// SRAM X5 cassette - 11-34, 9-speed - 11,13,15,17,20,23,26,30,34
    cogs[0] = 11;
    cogs[1] = 13;
    cogs[2] = 15;
    cogs[3] = 17;
    cogs[4] = 20;
    cogs[5] = 23;
    cogs[6] = 26;
    cogs[7] = 30;
    cogs[8] = 34;
    cogs[9] = "999";
    cogs[10] = "999";
  }
  
  updateOutput();
}
