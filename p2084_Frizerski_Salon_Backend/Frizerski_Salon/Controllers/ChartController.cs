using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Models.DataStorage;
using Models.HubConfig;
using Models.Model;
using Models.SearchObjects;
using Models.Services;
using Models.TimerFeatures;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ChartController : ControllerBase
    {
        private readonly IHubContext<ChartHub> _hub;
        private readonly TimerManager _timer;
        private readonly ITerminService _termin;
        private readonly IProizvodiService _proizvodi;
        private readonly IZaposlenikService _zaposlenici;
        private readonly IPonudaService _ponuda;
        private readonly ILokacijaService _lokacija;

        public ChartController(IHubContext<ChartHub> hub, TimerManager timer, ITerminService termin , IProizvodiService proizvodi , IZaposlenikService zaposlenici , IPonudaService ponuda, ILokacijaService lokacija)
        {
            _hub = hub;
            _timer = timer;
            _termin = termin;
            _proizvodi = proizvodi;
            _zaposlenici = zaposlenici;
            _ponuda = ponuda;
            _lokacija = lokacija;
        }
        [HttpGet]
        public IActionResult Get()
        {

            var list = new List<ChartModel>{
                new ChartModel { Data = new List<int> { _termin.Get(new TerminSearchObject()).Count() }, Label = "Termini", BackgroundColor = "#5491DA" },
                new ChartModel { Data = new List<int> { _proizvodi.Get(new ProizvodiSearchObject()).Count() }, Label = "Proizvodi", BackgroundColor = "#E74C3C" },
                new ChartModel { Data = new List<int> { _ponuda.Get(null).Count() }, Label = "Ponuda", BackgroundColor = "#82E0AA" },
                new ChartModel { Data = new List<int> { _zaposlenici.Get(null).Count() }, Label = "Zaposlenici", BackgroundColor = "#E5E7E9" },
                new ChartModel { Data = new List<int> { _lokacija.Get(null).Count() }, Label = "Lokacije", BackgroundColor = "#A408BF" }
            };

            _hub.Clients.All.SendAsync("TransferChartData", list);
            return Ok(new { Message = "Request Completed" });
        }
    }
}
