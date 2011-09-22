using System;
using NUnit.Framework;

namespace Gearing.Tests
{
	[TestFixture]
	public class Class1
	{
		[Test]
		public void Test()
		{
			var wheel = new Wheel("700x23", "", 333);
			var crank = new Crank(175);
			var chainrings = new Chainrings(new[] {50, 39, 30});
			var cassette = new Cassette("Shimano Tiagra Cassette 9 Speed HG50", new[] {12, 13, 14, 15, 17, 19, 21, 23, 25});

			CalcGears(wheel, crank, chainrings, cassette);
		}

		public void CalcGears(Wheel wheel, Crank crank, Chainrings chainrings, Cassette cassette)
		{
			var wheelSize = wheel.Radius * 2 / 25.4;	// to diameter inch
			var radiusRatio = wheel.Radius / crank.Length;
			var numRings = chainrings.Sprockets.Length;
			var numCogs = cassette.Sprockets.Length;
			var rings = chainrings.Sprockets;
			var cogs = cassette.Sprockets;

			var gear = new double[numRings,numCogs];
			var value = new double[numRings,numCogs];
			var ring = new int[numRings,numCogs];
			var ratio = new double[numRings,numCogs];
			var rollout = new double[numRings,numCogs];
			var speed = new double[numRings, numCogs];
			var lspeed = new double[numRings, numCogs];
			var hspeed = new double[numRings, numCogs];

			const int RPM = 90;

			for(var j = 0; j<numRings; j++)
			{
				for(var i = 0; i<numCogs; i++)
				{
					gear[j,i] = (rings[j] / cogs[i]) * numCogs - i;
					// inchgears
					value[j, i] = wheelSize * rings[j] / cogs[i];

					Console.WriteLine("{0} x {1} = {2}", rings[j], cogs[i], value[j, i].ToString("0.0"));

					ring[j, i] = rings[j];
					// Sheldon's ratios
					ratio[j, i] = radiusRatio * rings[j] / cogs[i];
					Console.WriteLine("{0} x {1} = {2}", rings[j], cogs[i], ratio[j, i].ToString("0.00"));

					// rollout
					rollout[j, i] = value[j, i] * Math.PI;
					Console.WriteLine("{0} x {1} = {2}", rings[j], cogs[i], rollout[j, i].ToString("0.00"));

					// speed
					speed[j, i] = (((rollout[j, i] * RPM) * 60) / 12) / 5280;
					//lspeed[j, i] = (((rollout[j, i] * lRPM) * 60) / 12) / 5280;
					//hspeed[j, i] = (((rollout[j, i] * hRPM) * 60) / 12) / 5280;

					Console.WriteLine("{0} x {1} = {2}", rings[j], cogs[i], speed[j, i].ToString("0.0"));
					Console.WriteLine();
				}
			}
		}
	}
}