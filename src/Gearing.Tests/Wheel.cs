using System.Collections.Generic;
using System.Linq;

namespace Gearing.Tests
{
	public class Wheel
	{
		public Wheel(string size, string iso, double radius)
		{
			Name = size;
			ISO = iso;
			Radius = radius;
		}

		public string Name { get; private set; }
		public string ISO { get; private set; }
		public double Radius { get; private set; }
	}

	public class Cassette
	{
		public Cassette(string name, IEnumerable<int> sprockets)
		{
			Name = name;
			Sprockets = sprockets
				.Distinct()
				.OrderBy(x => x)
				.Select(x => (Sprocket) x)
				.ToArray();
		}

		public string Name { get; private set; }
		public Sprocket[] Sprockets { get; private set; }
	}

	public class Chainrings
	{
		public Chainrings(IEnumerable<int> sprockets)
		{
			Sprockets = sprockets
				.Distinct()
				.OrderBy(x => x)
				.Select(x => (Sprocket) x)
				.ToArray();
		}

		public Sprocket[] Sprockets { get; private set; }
	}

	public class Sprocket
	{
		public Sprocket(int teeth)
		{
			Teeth = teeth;
		}

		public int Teeth { get; private set; }

		public static implicit operator Sprocket(int teeth)
		{
			return new Sprocket(teeth);
		}

		public static implicit operator int(Sprocket sprocket)
		{
			return sprocket.Teeth;
		}

		public override string ToString()
		{
			return Teeth.ToString();
		}
	}

	public class Crank
	{
		public Crank(double length)
		{
			Length = length;
		}

		public double Length { get; private set; }

		public static implicit operator Crank(double length)
		{
			return new Crank(length);
		}

		public static implicit operator double(Crank crank)
		{
			return crank.Length;
		}
	}
}