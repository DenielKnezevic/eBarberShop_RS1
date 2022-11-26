using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Racun
    {
        [Key]
        public int ID { get; set; }
        public DateTime DatumIzdavanja { get; set; }
        public double Iznos { get; set; }
    }
}
