using Frizerski_Salon.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Model
{
    public class Termin
    {
        [Key]
        public int ID { get; set; }
        public DateTime DatumTermina { get; set; }
        public DateTime DatumKreiranja { get; set; }
        [ForeignKey(nameof(Zaposlenik))]
        public int ZaposlenikID { get; set; }
        public Zaposlenik Zaposlenik { get; set; }
    }
}
