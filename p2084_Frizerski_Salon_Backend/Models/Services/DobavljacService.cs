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
    public class DobavljacService : GenericRepository<Dobavljac , DobavljacVModel , object> , IDobavljacService
    {
        public DobavljacService(ApplicationDbContext db , IMapper mapper):base(mapper,db)
        {

        }
    }
}
