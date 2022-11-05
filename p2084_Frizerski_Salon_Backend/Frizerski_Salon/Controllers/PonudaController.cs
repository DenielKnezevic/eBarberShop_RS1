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
    public class PonudaController : ControllerBase
    {
        private IPonudaService _repository;

        public PonudaController(IPonudaService repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public IEnumerable<Ponuda> Get()
        {
            return this._repository.Get(null);
        }

        [HttpPost]

        public async void Add([FromBody] PonudaVModel x)
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

        public void Update(int id , [FromBody] PonudaVModel x)
        {
            this._repository.Update(id, x);

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
