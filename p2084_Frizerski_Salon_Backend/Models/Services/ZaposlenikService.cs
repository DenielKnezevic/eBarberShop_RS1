using AutoMapper;
using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Microsoft.EntityFrameworkCore;
using Models.Helpers;
using Models.SearchObjects;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public class ZaposlenikService : GenericRepository<Zaposlenik , ZaposlenikVModel , BaseSearchObject> , IZaposlenikService 
    {

        ApplicationDbContext _db;
        public ZaposlenikService(ApplicationDbContext db, IMapper mapper):base(mapper,db)
        {
            _db = db;
        }

        public override PagedList<Zaposlenik> GetPaged(IQueryable<Zaposlenik> entity, BaseSearchObject search)
        {
            return PagedList<Zaposlenik>.ToPagedList(entity, search.PageNumber, search.PageSize);

        }

    }
}
