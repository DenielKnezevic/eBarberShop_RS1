using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Services
{
    public interface IGenericRepository<T , TModel , TSearch>
    {
        IEnumerable<T> Get(TSearch search);
        void Add(TModel x);
        void Update(int id, TModel z);
        void Delete(int id);
    }
}
