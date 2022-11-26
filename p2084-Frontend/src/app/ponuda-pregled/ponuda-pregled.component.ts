import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ProizvodiSearchObject} from "../proizvodi-pregled/proizvodi-pregled.component";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {Proizvod, ProizvodiService} from "../Services/proizvodi.service";
import {Termini, TerminiService} from "../Services/termini.service";
import {Dobavljac, DobavljacService} from "../Services/dobavljac.service";
import {Ponuda, PonudaService} from "../Services/ponuda.service";
import {HttpParams} from "@angular/common/http";
import {ZaposleniciService, Zaposlenik} from "../Services/zaposlenici.service";
import {Lokacija, LokacijeService} from "../Services/lokacije.service";

export interface TerminiSearchObject{
  ZaposlenikID:number,
  LokacijaID:number,
  Datum:Date
}

@Component({
  selector: 'app-ponuda-pregled',
  templateUrl: './ponuda-pregled.component.html',
  styleUrls: ['./ponuda-pregled.component.css']
})
export class PonudaPregledComponent implements OnInit {

  listZaposlenik:Zaposlenik[] = [];
  listLokacije:Lokacija[] = [];
  search:TerminiSearchObject = <TerminiSearchObject>{};
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Termini> = new MatTableDataSource<Termini>();

  constructor(private TerminiService:TerminiService , private ZaposleniciService:ZaposleniciService , private changeDetectorRef: ChangeDetectorRef , private LokacijaService:LokacijeService) { }

  ngOnInit(): void {
    this.TerminiService.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
    this.ZaposleniciService.Get(new HttpParams()).subscribe( x => {
      this.listZaposlenik = x;
    })
    this.LokacijaService.Get(new HttpParams()).subscribe( x => {
      this.listLokacije = x;
    })
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  Filtriraj()
  {
    let params = new HttpParams();
    var date = new Date(this.search.Datum);
    var datum = `${date.getUTCFullYear().toString()}-${(date.getMonth()+1).toString()}-${date.getDate().toString()}`
    if(this.search.Datum != undefined)
    {
      params = params.append('Datum' , datum);
    }
    if(this.search.ZaposlenikID != undefined)
    {
      params = params.append('ZaposlenikID' , this.search.ZaposlenikID);
    }
    if(this.search.LokacijaID != undefined)
    {
      params = params.append('LokacijaID' , this.search.LokacijaID);
    }
    this.TerminiService.Get(params).subscribe(x => {
      this.dataSource.data = x;
    })
  }

}
