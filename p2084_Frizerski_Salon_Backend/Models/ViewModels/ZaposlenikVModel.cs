using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.ViewModels
{
    public class ZaposlenikVModel
    {
        public string Ime { get; set; }
        public string Prezime { get; set; }
        public DateTime DatumRodjenja { get; set; }
        public string Grad { get; set; }
        public string Drzava { get; set; }
        public string BrojTelefona { get; set; }
        public string Adresa { get; set; }
        public int? AdminID { get; set; }
    }
}
