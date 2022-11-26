using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Ponuda
    {
        [Key]
        public int ID { get; set; }
        public string NazivPonude { get; set; }
        public double Cijena { get; set; }
        [ForeignKey(nameof(Admin))]
        public int? AdminID { get; set; }
        public Admin Admin { get; set; }
    }
}
