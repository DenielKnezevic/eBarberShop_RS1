import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ZaposleniciService, Zaposlenik, ZaposlenikVModel} from "../Services/zaposlenici.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ZModalComponent} from "./zmodal/zmodal.component";
import {ChartConfiguration, ChartType} from "chart.js";
import {SignalrService} from "../Services/signalr.service";
import {MatPaginator} from "@angular/material/paginator";
import * as events from "events";

@Component({
  selector: 'app-zaposlenici',
  templateUrl: './zaposlenici.component.html',
  styleUrls: ['./zaposlenici.component.css']
})
export class ZaposleniciComponent implements OnInit {

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        min: 0
      }
    }
  };
  chartLabels: string[] = ['Real time data for the chart'];
  chartType: ChartType = 'bar';
  chartLegend: boolean = true;

  imeprezime:string = '';
  odabraniZaposlenik:Zaposlenik = <Zaposlenik>{};
  dodajZaposlenika:Zaposlenik = <Zaposlenik>{};
  list!:Zaposlenik[];
  displayedColumns: string[] = ['ime', 'prezime', 'datumRodjenja', 'grad','drzava', 'adresa', 'brojTelefona', 'akcija'];
  dataSource = new MatTableDataSource<Zaposlenik>();
  @ViewChild('paginator') paginator: MatPaginator;

  ngAfterViewInit(){
    let x ;
    this.service.Get(new HttpParams()).subscribe( y => {
      x = y;
    })
    this.dataSource = new MatTableDataSource(x);
    this.dataSource.paginator = this.paginator;
  }

  constructor(private httpKlijent : HttpClient, private service : ZaposleniciService , public dialog : MatDialog , public signalRService: SignalrService) { }


  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.list = x;
      this.dataSource.data = this.list;
    })
    this.dataSource.paginator = this.paginator;
  }


  Filtriraj(event:Event){
    const filvalue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filvalue;
  }

  OpenDialog()
  {
    let dialogRef = this.dialog.open(ZModalComponent, {data:this.dodajZaposlenika,  width:'30%',height:'90%'});

    dialogRef.afterClosed().subscribe(x => {
      if(x != "")
      {
        this.Dodaj(x);
      }
    })
  }

  UcitajPodatke()
  {
    this.service.Get(new HttpParams()).subscribe( x => {
      this.dataSource.data = x;
    })
  }

  ObrisiZaposlenika(x:any) {
    this.service.Delete(x.id).subscribe( () => {
      this.UcitajPodatke();
      alert("Uspjesno brisanje zaposlenika");
    })
  }

  Uredi(x:Zaposlenik) {
    this.odabraniZaposlenik = x;
    let dialogRef = this.dialog.open(ZModalComponent, {data:this.odabraniZaposlenik,  width:'30%',height:'90%'});

    dialogRef.afterClosed().subscribe(x => {
      if(x != "")
      {
        this.service.Update(x.id , x).subscribe(() =>{
          alert("Uspjesno editovanje zaposlenika");
        })
      }
    })
  }

  Dodaj(x:Zaposlenik) {
    this.service.Add(x).subscribe(() => {
      this.dodajZaposlenika = <Zaposlenik>{};
      this.UcitajPodatke();
      alert("Uspjesno dodavanje zaposlenika");
    })
  }
}
