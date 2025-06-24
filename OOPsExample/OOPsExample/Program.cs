// See https://aka.ms/new-console-template for more information
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OOPsExample
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Game game = new Game();
            game.title = "hello";
            game.studio = "Studio";
            game.rating = 10.5;
            game.year = 2025;
            Console.WriteLine(game.title);
            Console.WriteLine(game.studio);
            Console.WriteLine(game.rating);
            Console.WriteLine(game.year);

        }
    }
}
