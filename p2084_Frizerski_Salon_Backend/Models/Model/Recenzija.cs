using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Recenzija
    {
        [Key]
        public int ID { get; set; }
        public int Ocjena { get; set; }
        public string Sadrzaj { get; set; }
        [ForeignKey(nameof(Korisnik))]
        public int? KorisnikID { get; set; }
        public Korisnik Korisnik { get; set; }
    }
}
