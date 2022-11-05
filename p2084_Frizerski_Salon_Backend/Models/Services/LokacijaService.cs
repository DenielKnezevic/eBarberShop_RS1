using AutoMapper;
using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public class LokacijaService : GenericRepository<Lokacija , LokacijaVModel , object> , ILokacijaService
    {

        public LokacijaService(ApplicationDbContext db , IMapper mapper):base(mapper,db)
        {

        }
    }
}
