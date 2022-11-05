using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Arhiva
    {
        [Key]
        public int ID { get; set; }
        [ForeignKey(nameof(Rezervacija))]
        public int? RezervacijaID { get; set; }
        public Rezervacija Rezervacija { get; set; }
        [ForeignKey(nameof(Zaposlenik))]
        public int? ZaposlenikID { get; set; }
        public Zaposlenik Zaposlenik { get; set; }
    }
}
