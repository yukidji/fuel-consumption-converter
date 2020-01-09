using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lab3.Models
{
    public class convert {
        /*константы*/
        public double mINkm { get; } = 0.62137;
        public double kmINm { get; } = 1.60934;
        public double gINl { get; } = 0.26417;
        public double lINg { get; } = 3.78541;
        public double agINl { get; } = 0.21997;
        public double lINag { get; } = 4.54609;
        public double agINg { get; } = 0.83267;
        public double gINag { get; } = 1.20095;

        public double InputData { get; set; }/*вводимое число*/
        public double LonKm { get; set; }/*Литров на км*/
        public double Lon10Km { get; set; }/*Литров на 10 км*/
        public double Lon100Km { get; set; }/*Литров на 100 км*/
        public double KMonL { get; set; }/*Километров на литр*/
        public double MonG_US { get; set; }/*Миль на галон (США)*/
        public double Gon100M_US { get; set; }/*Галонов на 100 миль (США)*/
        public double MonG_UK { get; set; }/*Миль на галон (Англия)*/
        public double Gon100M_UK { get; set; }/*Галонов на 100 миль(Англия)*/

        /*options*/

        public string Text { get; set; }
        public string Disabled { get; set; }
        public int Val { get; set; }
        public string Selected { get; set; }

        public convert() { }

        convert(string text, string disabled, int val, string selected) {
            this.Text = text;
            this.Disabled = disabled;
            this.Val = val;
            this.Selected = selected;
        }
        public IEnumerable<convert> Options {
            get {
                return new List<convert>{
                    new convert("Метрический", "disabled", 0, ""),
                    new convert("Литров на км", "", 1, ""),
                    new convert("Литров на 10 км", "", 2, ""),
                    new convert("Литров на 100 км", "", 3, ""),
                    new convert("Километров на литр", "", 4, ""),
                    new convert("US (США)", "disabled", 0, ""),
                    new convert("Миль на галон", "", 5, ""),
                    new convert("Галонов на 100 миль", "", 6, ""),
                    new convert("UK (Англия)", "disabled", 0, ""),
                    new convert("Миль на галон", "", 7, ""),
                    new convert("Галонов на 100 миль", "", 8, ""),
                };
            }
        }
    }
    
}
