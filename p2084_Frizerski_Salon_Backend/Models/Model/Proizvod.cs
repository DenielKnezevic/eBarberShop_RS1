using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Proizvod
    {
        [Key]
        public int ID { get; set; }
        public string NazivProizvoda { get; set; }
        public double Cijena { get; set; }
        public string Opis { get; set; }
        public string Slika { get; set; }
        public string SerijskiBroj { get; set; }
        [ForeignKey(nameof(Admin))]
        public int? AdminID { get; set; }
        public Admin Admin { get; set; }
        [ForeignKey(nameof(Dobavljac))]
        public int? DobavljacID { get; set; }
        public Dobavljac Dobavljac { get; set; }
    }
}
