using AutoMapper;
using Frizerski_Salon.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public class GenericRepository<T, TModel, TSearch> : IGenericRepository<T, TModel, TSearch> where T : class where TModel : class where TSearch : class
    {
        IMapper _mapper;
        ApplicationDbContext _context;

        public GenericRepository(IMapper mapper, ApplicationDbContext dbContext)
        {
            _mapper = mapper;
            _context = dbContext;
        }
        public void Add(TModel x)
        {
            var set = _context.Set<T>();

            var entity = _mapper.Map<T>(x);

            set.Add(entity);

            BeforeInsert(ref entity);

            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var set = _context.Set<T>();

            var entity = set.Find(id);

            set.Remove(entity);

            _context.SaveChanges();
        }

        public IEnumerable<T> Get(TSearch search = null)
        {
            var entity = _context.Set<T>().AsQueryable();

            entity = AddInclude(entity);

            entity = AddQuery(entity, search);

            return entity.ToList();

        }

        public void Update(int id, TModel z)
        {
            var set = _context.Set<T>();

            var entity = set.Find(id);

            _mapper.Map(z, entity);

            _context.SaveChanges();
        }

        virtual public IQueryable<T> AddInclude(IQueryable<T> query)
        {
            return query;
        }

        virtual public IQueryable<T> AddQuery(IQueryable<T> query, TSearch search)
        {
            return query;
        }

        virtual public void BeforeInsert(ref T entity)
        {
        }
    }
}
