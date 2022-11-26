using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Rezervacija
    {
        [Key]
        public int ID { get; set; }
        public DateTime DatumRezerviranja { get; set; }
        public DateTime DatumRezervacije { get; set; }
        [ForeignKey(nameof(Korisnik))]
        public int? KorisnikID { get; set; }
        public Korisnik Korisnik { get; set; }
        [ForeignKey(nameof(Lokacija))]
        public int? LokacijaID { get; set; }
        public Lokacija Lokacija { get; set; }
        [ForeignKey(nameof(Ponuda))]
        public int? PonudaID { get; set; }
        public Ponuda Ponuda { get; set; }
    }
}
