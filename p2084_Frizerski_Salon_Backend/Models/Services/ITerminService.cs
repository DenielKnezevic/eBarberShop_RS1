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
    public interface ITerminService : IGenericRepository<Termin,TerminVModel, TerminSearchObject>
    {
    }
}
