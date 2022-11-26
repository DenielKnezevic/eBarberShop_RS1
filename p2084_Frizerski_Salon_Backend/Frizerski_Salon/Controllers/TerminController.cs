using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Models.Helpers;
using Models.Model;
using Models.SearchObjects;
using Models.Services;
using Models.ViewModels;
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
    public class TerminController : ControllerBase
    {
        ITerminService _service;
        public TerminController(ITerminService service)
        {
            _service = service;
        }
        [HttpGet]
        public IEnumerable<Termin> Get([FromQuery] TerminSearchObject search , string test)
        {
            return _service.Get(search);
        }

        [Route("GetPaged")]
        [HttpGet]

        public PagedList<Termin> Get([FromQuery] TerminSearchObject search)
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
        public async void Add(TerminVModel x)
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
        public void Update(int id , TerminVModel x)
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
