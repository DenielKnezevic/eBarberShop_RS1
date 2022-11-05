import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Proizvod, ProizvodiService} from "../Services/proizvodi.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PModalComponent} from "./pmodal/pmodal.component";

@Component({
  selector: 'app-proizvodi',
  templateUrl: './proizvodi.component.html',
  styleUrls: ['./proizvodi.component.css']
})
export class ProizvodiComponent implements OnInit {
  proizvodi: any;
  filter: string = '';
  odabraniProizvod:any;
  dodajProizvod:Proizvod = <Proizvod>{};
  displayedColumns: string[] = ['nazivProizvoda', 'cijena', 'serijskiBroj', 'dobavljac', 'opis', 'slika','akcija'];
  dataSource = new MatTableDataSource<Proizvod>();

  constructor(private httpKlijent: HttpClient, private service:ProizvodiService , private dialog:MatDialog) {
  }

  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  Filtriraj() {
    if (this.filter == null)
      return [];
    return this.dataSource.data.filter((x: any) => x.nazivProizvoda.length == 0 || x.nazivProizvoda.toLowerCase().startsWith(this.filter.toLowerCase()));

  }

  ObrisiProizvod(x: Proizvod) {
    this.service.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Proizvod) {
    let dialogRef = this.dialog.open(PModalComponent, {data:x,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.service.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje proizvoda");
        this.UcitajPodatke();
      })
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(PModalComponent, {data:this.dodajProizvod,  width:'30%',height:'70%'})

    dialogRef.afterClosed().subscribe(x => {
      this.Dodaj(x);
    })
  }

  UcitajPodatke() {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  Dodaj(x: Proizvod) {
    this.service.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje proizvoda");
      this.UcitajPodatke();
      this.dodajProizvod = <Proizvod>{};
    })
  }
}
