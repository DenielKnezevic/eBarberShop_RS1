using Frizerski_Salon.Models;
using Models.Helpers;
using Models.SearchObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public interface IProizvodiService : IGenericRepository<Proizvod, ProizvodVModel , ProizvodiSearchObject>
    {
    }
}
