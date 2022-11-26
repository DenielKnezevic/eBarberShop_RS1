using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.SearchObjects
{
    public class TerminSearchObject : BaseSearchObject
    {
        public int ZaposlenikID { get; set; }
        public int LokacijaID { get; set; }
        public DateTime Datum { get; set; }
    }
}
