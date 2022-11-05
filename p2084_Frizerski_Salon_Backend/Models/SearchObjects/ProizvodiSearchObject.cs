using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.SearchObjects
{
    public class ProizvodiSearchObject : BaseSearchObject
    {
        public string Naziv { get; set; }
        public string ComboBoxSearch { get; set; }
        public int DobavljacSearch { get; set; }
    }
}
