import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ZaposleniciService, Zaposlenik, ZaposlenikVModel} from "../Services/zaposlenici.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {ZModalComponent} from "./zmodal/zmodal.component";
import {ChartConfiguration, ChartType} from "chart.js";
import {SignalrService} from "../Services/signalr.service";

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

  constructor(private httpKlijent : HttpClient, private service : ZaposleniciService , public dialog : MatDialog , public signalRService: SignalrService) { }


  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.list = x;
      this.dataSource.data = this.list;
    })
  }


  Filtriraj(){
    if(this.imeprezime == null)
      return [];
    return this.dataSource.data.filter( (x:any) => x.ime.length == 0 || (x.ime + ' ' + x.prezime).toLowerCase().startsWith(this.imeprezime.toLowerCase()) || (x.prezime + ' ' + x.ime).toLowerCase().startsWith(this.imeprezime.toLowerCase()));
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
    })
  }

  Uredi(x:Zaposlenik) {
    this.odabraniZaposlenik = x;
    let dialogRef = this.dialog.open(ZModalComponent, {data:this.odabraniZaposlenik,  width:'30%',height:'90%'});

    dialogRef.afterClosed().subscribe(x => {
      if(x != "")
      {
        this.service.Update(x.id , x).subscribe(() =>{
          alert("uspjesno editovanje");
        })
      }
    })
  }

  Dodaj(x:Zaposlenik) {
    this.service.Add(x).subscribe(() => {
      this.dodajZaposlenika = <Zaposlenik>{};
      this.UcitajPodatke();
    })
  }
}
