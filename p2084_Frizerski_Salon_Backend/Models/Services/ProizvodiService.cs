using AutoMapper;
using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
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
    public class ProizvodiService : GenericRepository<Proizvod, ProizvodVModel , ProizvodiSearchObject>, IProizvodiService
    {
        ApplicationDbContext _db;

        public ProizvodiService(ApplicationDbContext db, IMapper mapper) : base(mapper, db)
        {
            _db = db;
        }

        public override IQueryable<Proizvod> AddInclude(IQueryable<Proizvod> query)
        {
            query = query.Include(x => x.Dobavljac);

            return query;
        }

        public override void BeforeInsert(ref Proizvod entity)
        {
            entity.SerijskiBroj = Guid.NewGuid().ToString();
        }

        public override IQueryable<Proizvod> AddQuery(IQueryable<Proizvod> query , ProizvodiSearchObject search)
        {
            if(!string.IsNullOrWhiteSpace(search.Naziv))
            {
                query = query.Where(x => x.NazivProizvoda.ToLower().StartsWith(search.Naziv.ToLower()));
            }

            if(search.DobavljacSearch > 0)
            {
                query = query.Where(x => x.Dobavljac.ID == search.DobavljacSearch);
            }

            if(search.ComboBoxSearch == "AbecedaUnazad")
            {
                query = query.OrderByDescending(x => x.NazivProizvoda);
            }

            if(search.ComboBoxSearch == "Abeceda")
            {
                query = query.OrderBy(x => x.NazivProizvoda);
            }

            if(search.ComboBoxSearch == "CijenaNajskuplje")
            {
                query = query.OrderByDescending(x => x.Cijena);
            }

            if(search.ComboBoxSearch == "CijenaJeftino")
            {
                query = query.OrderBy(x => x.Cijena);
            }

            return query;
        }

        public override PagedList<Proizvod> GetPaged(IQueryable<Proizvod> entity, ProizvodiSearchObject search)
        {
            return PagedList<Proizvod>.ToPagedList(entity, search.PageNumber, search.PageSize);

        }
    }
       
}
