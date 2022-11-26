import {Component, OnInit, ViewChild} from '@angular/core';
import {Zaposlenik} from "../Services/zaposlenici.service";
import {MatTableDataSource} from "@angular/material/table";
import {Termini, TerminiService} from "../Services/termini.service";
import {HttpParams} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {TmodalComponent} from "./tmodal/tmodal.component";
import {Proizvod} from "../Services/proizvodi.service";
import {PModalComponent} from "../proizvodi/pmodal/pmodal.component";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-termini-edit',
  templateUrl: './termini-edit.component.html',
  styleUrls: ['./termini-edit.component.css']
})
export class TerminiEditComponent implements OnInit {

  dodajTermin:Termini = <Termini>{};
  displayedColumns: string[] = ['Zaposlenik','datumTermina', 'vrijemeTermina','datumKreiranja', 'Lokacija' , 'akcija'];
  dataSource = new MatTableDataSource<Termini>();
  imeprezime: string = "";
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.TerminiService.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private TerminiService:TerminiService , public dialog : MatDialog) { }

  ngOnInit(): void {
    this.TerminiService.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }

  Filtriraj(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  OpenDialog() {
    let dialogRef = this.dialog.open(TmodalComponent, {data:this.dodajTermin,  width:'30%',height:'60%'});

    dialogRef.afterClosed().subscribe(x => {
      if(x != "")
      {
        this.Dodaj(x);
      }
    })
  }

  ObrisiTermin(x:Termini) {
    this.TerminiService.Delete(x.id).subscribe(() => {
      alert("Uspjesno brisanje");
      this.UcitajPodatke();
    })
  }

  Uredi(x: Termini) {
    let dialogRef = this.dialog.open(TmodalComponent, {data:x,  width:'30%',height:'60%'})

    dialogRef.afterClosed().subscribe(x => {
      this.TerminiService.Update(x.id , x).subscribe( () =>{
        alert("Uspjesno editovanje termina");
        this.UcitajPodatke();
      })
    })
  }


  private Dodaj(x: Termini) {
    this.TerminiService.Add(x).subscribe(x => {
      alert("Uspjesno dodavanje termina");
      this.dodajTermin = <Termini>{};
      this.UcitajPodatke();
    })

  }

  UcitajPodatke() {
    this.TerminiService.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
  }
}
