using AutoMapper;
using Frizerski_Salon.Entity;
using Microsoft.EntityFrameworkCore;
using Models.Model;
using Models.SearchObjects;
using Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public class TerminService : GenericRepository<Termin, TerminVModel, TerminSearchObject>, ITerminService
    {
        public TerminService(ApplicationDbContext db , IMapper mapper):base(mapper,db)
        {

        }

        public override void BeforeInsert(ref Termin entity)
        {
            entity.DatumKreiranja = DateTime.Now;
        }

        public override IQueryable<Termin> AddQuery(IQueryable<Termin> query, TerminSearchObject search)
        {
            if(search.ZaposlenikID > 0)
            {
                query = query.Where(x => x.ZaposlenikID == search.ZaposlenikID);
            }

            if(search.Datum.Date > DateTime.Now)
            {
                query = query.Where(x => x.DatumTermina.Day == search.Datum.Day && x.DatumTermina.Month == search.Datum.Month && x.DatumTermina.Year == search.Datum.Year);
            }

            return query;
        }

        public override IQueryable<Termin> AddInclude(IQueryable<Termin> query)
        {
            query = query.Include(x => x.Zaposlenik);

            return query;
        }
    }
}
