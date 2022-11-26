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
    public class PonudaService : GenericRepository<Ponuda , PonudaVModel , BaseSearchObject> , IPonudaService
    {
        ApplicationDbContext _db;
        public PonudaService(ApplicationDbContext db , IMapper mapper):base(mapper,db)
        {
            _db = db;
        }

        public override PagedList<Ponuda> GetPaged(IQueryable<Ponuda> entity, BaseSearchObject search)
        {
            return PagedList<Ponuda>.ToPagedList(entity, search.PageNumber, search.PageSize);

        }
    }
}
