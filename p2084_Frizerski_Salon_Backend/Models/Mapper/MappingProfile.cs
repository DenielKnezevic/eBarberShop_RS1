using AutoMapper;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Models.Model;
using Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.Mapper
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ZaposlenikVModel, Zaposlenik>();
            CreateMap<PonudaVModel, Ponuda>();
            CreateMap<DobavljacVModel, Dobavljac>();
            CreateMap<ProizvodVModel, Proizvod>();
            CreateMap<LokacijaVModel, Lokacija>();
            CreateMap<AdminVModel, Admin>();
            CreateMap<TerminVModel, Termin>();
        }
    }
}
