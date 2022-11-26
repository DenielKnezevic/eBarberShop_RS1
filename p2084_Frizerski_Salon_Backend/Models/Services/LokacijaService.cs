using AutoMapper;
using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Models.Helpers;
using Models.SearchObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public class LokacijaService : GenericRepository<Lokacija , LokacijaVModel , BaseSearchObject> , ILokacijaService
    {
        ApplicationDbContext _db;
        public LokacijaService(ApplicationDbContext db , IMapper mapper):base(mapper,db)
        {
            _db = db;
        }

        public override PagedList<Lokacija> GetPaged(IQueryable<Lokacija> entity, BaseSearchObject search)
        {
            return PagedList<Lokacija>.ToPagedList(entity, search.PageNumber, search.PageSize);

        }
    }
}
