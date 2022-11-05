using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Models
{
    public class Dobavljac
    {
        [Key]
        public int ID { get; set; }
        public string NazivDobavljaca { get; set; }
        public string BrojTelefona { get; set; }
    }
}
