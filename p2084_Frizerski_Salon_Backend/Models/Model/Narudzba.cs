using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Narudzba
    {
        [Key]
        public int ID { get; set; }
        public DateTime DatumNarudzbe { get; set; }
        [ForeignKey(nameof(Korisnik))]
        public int? KorisnikID { get; set; }
        public Korisnik Korisnik { get; set; }
        [ForeignKey(nameof(Proizvod))]
        public int? ProizvodID { get; set; }
        public Proizvod Proizvod { get; set; }
        [ForeignKey(nameof(Racun))]
        public int? RacunID { get; set; }
        public Racun Racun { get; set; }
    }
}
