using Frizerski_Salon.Entity;
using Frizerski_Salon.Models;
using Frizerski_Salon.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public AdminController(ApplicationDbContext db)
        {
            _db = db;
        }

        [HttpGet]

        public IEnumerable<Admin> Get()
        {
            var model = _db.Admin.AsQueryable().ToList();
            return model;
        }

        [HttpPost]

        public void Add([FromBody] AdminVModel x)
        {
            var admin = new Admin
            {
                Ime = x.Ime,
                Prezime = x.Prezime
            };

            _db.Add(admin);
            _db.SaveChanges();
        }
    }
}
