using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class ProizvodVModel
    {
        public string NazivProizvoda { get; set; }
        public double Cijena { get; set; }
        public int? AdminID { get; set; }
        public int? DobavljacID { get; set; }
        public string Opis { get; set; }
        public string Slika { get; set; }
    }
}
