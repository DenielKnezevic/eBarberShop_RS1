using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public interface IZaposlenikService : IGenericRepository<Zaposlenik , ZaposlenikVModel , object>
    {
    }
}
