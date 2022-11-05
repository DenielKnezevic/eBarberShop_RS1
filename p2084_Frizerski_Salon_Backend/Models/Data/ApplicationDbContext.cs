using Frizerski_Salon.Models;
using Microsoft.EntityFrameworkCore;
using Models.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Frizerski_Salon.Entity
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Admin> Admin { get; set; }
        public DbSet<Arhiva> Arhiva { get; set; }
        public DbSet<Dobavljac> Dobavljac { get; set; }
        public DbSet<Fotografija> Fotografija { get; set; }
        public DbSet<KorisnickiNalog> KorisnickiNalog { get; set; }
        public DbSet<Korisnik> Korisnik { get; set; }
        public DbSet<Lokacija> Lokacija { get; set; }
        public DbSet<Narudzba> Narudzba { get; set; }
        public DbSet<Novost> Novost { get; set; }
        public DbSet<Ponuda> Ponuda { get; set; }
        public DbSet<Proizvod> Proizvod { get; set; }
        public DbSet<Racun> Racun { get; set; }
        public DbSet<Recenzija> Recenzija { get; set; }
        public DbSet<Rezervacija> Rezervacija { get; set; }
        public DbSet<Zaposlenik> Zaposlenik { get; set; }
        public DbSet<Termin> Termin { get; set; }

        public ApplicationDbContext(
             DbContextOptions options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);


        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            //ovdje pise FluentAPI konfiguraciju

            //modelBuilder.Entity<Student>().ToTable("Student");
            //modelBuilder.Entity<Nastavnik>().ToTable("Nastavnik");
        }

    }
}
