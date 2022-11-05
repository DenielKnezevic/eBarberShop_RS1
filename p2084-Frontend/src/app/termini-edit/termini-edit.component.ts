import { Component, OnInit } from '@angular/core';
import {Zaposlenik} from "../Services/zaposlenici.service";
import {MatTableDataSource} from "@angular/material/table";
import {Termini, TerminiService} from "../Services/termini.service";
import {HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {TmodalComponent} from "./tmodal/tmodal.component";

@Component({
  selector: 'app-termini-edit',
  templateUrl: './termini-edit.component.html',
  styleUrls: ['./termini-edit.component.css']
})
export class TerminiEditComponent implements OnInit {

  dodajTermin:Termini = <Termini>{};
  displayedColumns: string[] = ['datumTermina', 'datumKreiranja', 'Zaposlenik',  'akcija'];
  dataSource = new MatTableDataSource<Termini>();
  imeprezime: string = "";

  constructor(private TerminiService:TerminiService , public dialog : MatDialog) { }

  ngOnInit(): void {
    this.TerminiService.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  Filtriraj(){
    if(this.imeprezime == null)
      return [];
    return this.dataSource.data.filter( (x:any) => x.zaposlenik.ime.length == 0 || (x.zaposlenik.ime + ' ' + x.zaposlenik.prezime).toLowerCase().startsWith(this.imeprezime.toLowerCase()) || (x.zaposlenik.prezime + ' ' + x.zaposlenik.ime).toLowerCase().startsWith(this.imeprezime.toLowerCase()));
  }

  OpenDialog() {
    let dialogRef = this.dialog.open(TmodalComponent, {data:this.dodajTermin,  width:'30%',height:'40%'});

    dialogRef.afterClosed().subscribe(x => {
      if(x != "")
      {
        this.Dodaj(x);
      }
    })
  }

  ObrisiZaposlenika(element) {

  }

  Uredi(element) {

  }

  private Dodaj(x: Termini) {
    this.TerminiService.Add(x).subscribe(x => {
      alert("Uspjesno dodavanje termina");
      this.dodajTermin = <Termini>{};
    })

  }
}
