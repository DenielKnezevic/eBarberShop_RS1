import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {Lokacija, LokacijeService} from "../Services/lokacije.service";
import {MatDialog} from "@angular/material/dialog";
import {LModalComponent} from "./lmodal/lmodal.component";

@Component({
  selector: 'app-lokacije',
  templateUrl: './lokacije.component.html',
  styleUrls: ['./lokacije.component.css']
})
export class LokacijeComponent implements OnInit {

  filter:string = '';
  dodajLokaciju:Lokacija = <Lokacija> {};
  displayedColumns: string[] = ['grad', 'drzava', 'adresa', 'akcija'];
  dataSource = new MatTableDataSource<Lokacija>();


  constructor(private httpKlijent : HttpClient, private service:LokacijeService , private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  UcitajLokacije()
  {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  Filtriraj() {
    if(this.filter == null)
      return [];
    return this.dataSource.data.filter((x:any) => x.grad.length == 0 || x.drzava.length == 0 || x.adresa.length == 0 ||
                                            x.grad.toLowerCase().startsWith(this.filter.toLowerCase()) ||
                                            x.drzava.toLowerCase().startsWith(this.filter.toLowerCase()) ||
                                            x.adresa.toLowerCase().startsWith(this.filter.toLowerCase()));
  }

  ObrisiLokaciju(x: Lokacija) {
    this.service.Delete(x.id).subscribe( () => {
      alert("Uspjesno brisanje lokacije");
      this.UcitajLokacije();
    })
  }

  Novi(){
    let dialogRef = this.dialog.open(LModalComponent,{data:this.dodajLokaciju,  width:'30%',height:'50%'})

    dialogRef.afterClosed().subscribe(x => {
      if(x != "")
      {
        this.Dodaj(x);
      }
    })
  }

  Uredi(x: Lokacija) {
    let dialogRef = this.dialog.open(LModalComponent , {data:x , width:'30%',height:'50%'});

    dialogRef.afterClosed().subscribe(x => {
      this.service.Update(x.id , x).subscribe( () => {
        if(x != "")
        {
          alert("Uspjesno editovanje lokacije");
          this.UcitajLokacije();
        }
      })
    })
  }

  Dodaj(x:Lokacija) {
    this.service.Add(x).subscribe(() => {
      alert("Uspjesno dodavanje lokacije");
      this.UcitajLokacije();
      this.dodajLokaciju = <Lokacija> {};
    })
  }
}
