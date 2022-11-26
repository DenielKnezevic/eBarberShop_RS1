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
using System.Threading.Tasks;

namespace Frizerski_Salon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DobavljacController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private readonly IDobavljacService _service;

        public DobavljacController(ApplicationDbContext db , IDobavljacService service)
        {
            _db = db;
            _service = service;
        }

        [HttpGet]

        public IEnumerable<Dobavljac> Get()
        {
            return _service.Get(null);
        }

        [HttpPost]

        public void Add([FromBody] DobavljacVModel x)
        {
            _service.Add(x);
        }
    }
}
