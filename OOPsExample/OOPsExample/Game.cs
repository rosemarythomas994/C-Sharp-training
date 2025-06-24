using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPsExample
{
    class Game
    {
        public string title;
        public string studio;
        public double rating;
        public int year;

        public Game()
        {
        }

        public Game(string title, string studio, double rating, int year)
        {
            this.title = title;
            this.studio = studio;
            this.rating = rating;
            this.year = year;
        }
    }
}
