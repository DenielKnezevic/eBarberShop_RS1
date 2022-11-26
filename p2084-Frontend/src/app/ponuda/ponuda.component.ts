import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {Ponuda, PonudaService} from "../Services/ponuda.service";
import {MatDialog} from "@angular/material/dialog";
import {PonudaModalComponent} from "./ponuda-modal/ponuda-modal.component";
import {MatPaginator} from "@angular/material/paginator";

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
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.service.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

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

  Filtriraj(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
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
          alert("Uspjesno editovanje ponude");
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
