using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Models.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Frizerski_Salon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ZaposlenikController : ControllerBase
    {
        private IZaposlenikService _repository;
        public ZaposlenikController(IZaposlenikService repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public IEnumerable<Zaposlenik> Get(string ime_prezime)
        {
            return this._repository.Get(null);
        }

        [HttpPost]

        public async void Add([FromBody] ZaposlenikVModel x)
        {
            this._repository.Add(x);
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:60669/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new System.Net.Http.Headers.MediaTypeWithQualityHeaderValue("application/json"));

                HttpResponseMessage msg = await client.GetAsync("api/chart");
            }
        }

        [HttpPatch("{id}")]

        public void Update(int id , [FromBody] ZaposlenikVModel z)
        {
            this._repository.Update(id, z);
        }

        [HttpPost("{id}")]

        public async void Delete(int id)
        {
            this._repository.Delete(id);
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
