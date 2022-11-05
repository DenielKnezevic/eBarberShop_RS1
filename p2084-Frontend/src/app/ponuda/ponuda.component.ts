import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {Ponuda, PonudaService} from "../Services/ponuda.service";
import {MatDialog} from "@angular/material/dialog";
import {PonudaModalComponent} from "./ponuda-modal/ponuda-modal.component";

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit {
  filter:string = '';
  dodajPonudu:Ponuda = <Ponuda> {};
  displayedColumns: string[] = ['nazivPonude', 'cijena', 'akcija'];
  dataSource = new MatTableDataSource<Ponuda>();

  constructor( private httpKlijent : HttpClient , private service:PonudaService , private dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe( x => {
      this.dataSource.data = x;
    })
  }

  UcitajPonudu(){
    this.service.Get(new HttpParams()).subscribe( x => {
      this.dataSource.data = x;
    })
  }

  Filtriraj() {
    if(this.filter == null)
      return [];
    return this.dataSource.data.filter((x:any) => x.nazivPonude.length == 0 || x.nazivPonude.toLowerCase().startsWith(this.filter.toLowerCase()))
  }

  ObrisiPonudu(x: Ponuda) {
    this.service.Delete(x.id).subscribe( () => {
      alert("Uspjesno brisanje ponude");
      this.UcitajPonudu();
    })
  }

  Uredi(x: Ponuda) {
    let dialogRef = this.dialog.open(PonudaModalComponent , {data:x,  width:'30%',height:'40%'})

    dialogRef.afterClosed().subscribe( x => {
      this.service.Update(x.id , x).subscribe( () => {
        if(x != "")
        {
          alert("uspjesno editovanje ponude");
          this.UcitajPonudu();
        }
      })
    })
  }

  Novi() {
    let dialogRef = this.dialog.open(PonudaModalComponent , {data:this.dodajPonudu,  width:'30%',height:'40%'})

    dialogRef.afterClosed().subscribe( x => {
      this.service.Add(x).subscribe( () => {
        alert('Uspjesno dodana nova ponuda');
        this.UcitajPonudu();
        this.dodajPonudu = <Ponuda> {};
      })
    })
  }

}
