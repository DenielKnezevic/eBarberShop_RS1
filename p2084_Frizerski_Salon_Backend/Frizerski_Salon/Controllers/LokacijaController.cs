using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Helpers;
using Models.SearchObjects;
using Models.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Frizerski_Salon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LokacijaController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly ILokacijaService _service;

        public LokacijaController(ApplicationDbContext db , ILokacijaService service)
        {
            _db = db;
            _service = service;
        }

        [HttpGet]

        public IEnumerable<Lokacija> Get()
        {
            return _service.Get(null);
        }

        [Route("GetPaged")]
        [HttpGet]

        public PagedList<Lokacija> Get([FromQuery] BaseSearchObject search)
        {
            var entity = this._service.GetPaged(search);

            var metaData = new
            {
                entity.TotalCount,
                entity.PageSize,
                entity.CurrentPage,
                entity.HasNext,
                entity.HasPrevious
            };

            Response.Headers.Add("X-Pagination", JsonConvert.SerializeObject(metaData));

            return entity;
        }
        [HttpPost]

        public async void Add([FromBody] LokacijaVModel x)
        {
            _service.Add(x);
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:60669/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage msg = await client.GetAsync("api/chart");
            }
        }

        [HttpPatch("{id}")]

        public void Update(int id, [FromBody] LokacijaVModel x)
        {
            _service.Update(id, x);
        }

        [HttpPost("{id}")]

        public async void Delete(int id)
        {
            _service.Delete(id);
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:60669/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage msg = await client.GetAsync("api/chart");
            }
        }
    }
}
