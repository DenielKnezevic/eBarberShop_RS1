using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
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
    public class ProizvodController : ControllerBase
    {
        private IProizvodiService _repository;

        public ProizvodController(IProizvodiService repository)
        {
            _repository = repository;
        }

        [HttpGet]

        public IEnumerable<Proizvod> Get([FromQuery] ProizvodiSearchObject search , int test , string naziv , string comboboxsearc)
        {
            return this._repository.Get(search);
        }

        [Route("GetPaged")]
        [HttpGet]

        public PagedList<Proizvod> Get([FromQuery] ProizvodiSearchObject search)
        {
            var entity = this._repository.GetPaged(search);

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

        public async void Add([FromBody] ProizvodVModel x)
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

        public void Update(int id ,[FromBody] ProizvodVModel x)
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
