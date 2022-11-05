﻿// <auto-generated />
using System;
using Frizerski_Salon.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Models.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20221104092555_add_termin_dataset")]
    partial class add_termin_dataset
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.13")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Frizerski_Salon.Models.Admin", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Admin");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Arhiva", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("RezervacijaID")
                        .HasColumnType("int");

                    b.Property<int?>("ZaposlenikID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("RezervacijaID");

                    b.HasIndex("ZaposlenikID");

                    b.ToTable("Arhiva");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Dobavljac", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("BrojTelefona")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("NazivDobavljaca")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Dobavljac");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Fotografija", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminID")
                        .HasColumnType("int");

                    b.Property<string>("Slika")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("AdminID");

                    b.ToTable("Fotografija");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.KorisnickiNalog", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("KorisnickoIme")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("KorisnickiNalog");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Korisnik", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BrojTelefona")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DatumRodjenja")
                        .HasColumnType("datetime2");

                    b.Property<string>("Drzava")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Korisnik");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Lokacija", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminID")
                        .HasColumnType("int");

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Drzava")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("AdminID");

                    b.ToTable("Lokacija");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Narudzba", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DatumNarudzbe")
                        .HasColumnType("datetime2");

                    b.Property<int?>("KorisnikID")
                        .HasColumnType("int");

                    b.Property<int?>("ProizvodID")
                        .HasColumnType("int");

                    b.Property<int?>("RacunID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("KorisnikID");

                    b.HasIndex("ProizvodID");

                    b.HasIndex("RacunID");

                    b.ToTable("Narudzba");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Novost", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminID")
                        .HasColumnType("int");

                    b.Property<DateTime>("DatumDodavanja")
                        .HasColumnType("datetime2");

                    b.Property<string>("Sadrzaj")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("AdminID");

                    b.ToTable("Novost");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Ponuda", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminID")
                        .HasColumnType("int");

                    b.Property<double>("Cijena")
                        .HasColumnType("float");

                    b.Property<string>("NazivPonude")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("AdminID");

                    b.ToTable("Ponuda");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Proizvod", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminID")
                        .HasColumnType("int");

                    b.Property<double>("Cijena")
                        .HasColumnType("float");

                    b.Property<int?>("DobavljacID")
                        .HasColumnType("int");

                    b.Property<string>("NazivProizvoda")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Opis")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("SerijskiBroj")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Slika")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("AdminID");

                    b.HasIndex("DobavljacID");

                    b.ToTable("Proizvod");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Racun", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DatumIzdavanja")
                        .HasColumnType("datetime2");

                    b.Property<double>("Iznos")
                        .HasColumnType("float");

                    b.HasKey("ID");

                    b.ToTable("Racun");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Recenzija", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("KorisnikID")
                        .HasColumnType("int");

                    b.Property<int>("Ocjena")
                        .HasColumnType("int");

                    b.Property<string>("Sadrzaj")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.HasIndex("KorisnikID");

                    b.ToTable("Recenzija");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Rezervacija", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DatumRezervacije")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DatumRezerviranja")
                        .HasColumnType("datetime2");

                    b.Property<int?>("KorisnikID")
                        .HasColumnType("int");

                    b.Property<int?>("LokacijaID")
                        .HasColumnType("int");

                    b.Property<int?>("PonudaID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("KorisnikID");

                    b.HasIndex("LokacijaID");

                    b.HasIndex("PonudaID");

                    b.ToTable("Rezervacija");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Zaposlenik", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("AdminID")
                        .HasColumnType("int");

                    b.Property<string>("Adresa")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("BrojTelefona")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("DatumRodjenja")
                        .HasColumnType("datetime2");

                    b.Property<string>("Drzava")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Grad")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Ime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Prezime")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Prikaz")
                        .HasColumnType("bit");

                    b.HasKey("ID");

                    b.HasIndex("AdminID");

                    b.ToTable("Zaposlenik");
                });

            modelBuilder.Entity("Models.Model.Termin", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("DatumKreiranja")
                        .HasColumnType("datetime2");

                    b.Property<DateTime>("DatumTermina")
                        .HasColumnType("datetime2");

                    b.Property<int>("ZaposlenikID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("ZaposlenikID");

                    b.ToTable("Termin");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Arhiva", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Rezervacija", "Rezervacija")
                        .WithMany()
                        .HasForeignKey("RezervacijaID");

                    b.HasOne("Frizerski_Salon.Models.Zaposlenik", "Zaposlenik")
                        .WithMany()
                        .HasForeignKey("ZaposlenikID");

                    b.Navigation("Rezervacija");

                    b.Navigation("Zaposlenik");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Fotografija", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminID");

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Lokacija", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminID");

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Narudzba", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Korisnik", "Korisnik")
                        .WithMany()
                        .HasForeignKey("KorisnikID");

                    b.HasOne("Frizerski_Salon.Models.Proizvod", "Proizvod")
                        .WithMany()
                        .HasForeignKey("ProizvodID");

                    b.HasOne("Frizerski_Salon.Models.Racun", "Racun")
                        .WithMany()
                        .HasForeignKey("RacunID");

                    b.Navigation("Korisnik");

                    b.Navigation("Proizvod");

                    b.Navigation("Racun");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Novost", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminID");

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Ponuda", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminID");

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Proizvod", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminID");

                    b.HasOne("Frizerski_Salon.Models.Dobavljac", "Dobavljac")
                        .WithMany()
                        .HasForeignKey("DobavljacID");

                    b.Navigation("Admin");

                    b.Navigation("Dobavljac");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Recenzija", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Korisnik", "Korisnik")
                        .WithMany()
                        .HasForeignKey("KorisnikID");

                    b.Navigation("Korisnik");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Rezervacija", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Korisnik", "Korisnik")
                        .WithMany()
                        .HasForeignKey("KorisnikID");

                    b.HasOne("Frizerski_Salon.Models.Lokacija", "Lokacija")
                        .WithMany()
                        .HasForeignKey("LokacijaID");

                    b.HasOne("Frizerski_Salon.Models.Ponuda", "Ponuda")
                        .WithMany()
                        .HasForeignKey("PonudaID");

                    b.Navigation("Korisnik");

                    b.Navigation("Lokacija");

                    b.Navigation("Ponuda");
                });

            modelBuilder.Entity("Frizerski_Salon.Models.Zaposlenik", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Admin", "Admin")
                        .WithMany()
                        .HasForeignKey("AdminID");

                    b.Navigation("Admin");
                });

            modelBuilder.Entity("Models.Model.Termin", b =>
                {
                    b.HasOne("Frizerski_Salon.Models.Zaposlenik", "Zaposlenik")
                        .WithMany()
                        .HasForeignKey("ZaposlenikID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Zaposlenik");
                });
#pragma warning restore 612, 618
        }
    }
}
