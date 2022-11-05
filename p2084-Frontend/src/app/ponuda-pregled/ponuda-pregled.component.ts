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

export interface TerminiSearchObject{
  ZaposlenikID:number,
  Datum:Date
}

@Component({
  selector: 'app-ponuda-pregled',
  templateUrl: './ponuda-pregled.component.html',
  styleUrls: ['./ponuda-pregled.component.css']
})
export class PonudaPregledComponent implements OnInit {

  listZaposlenik:Zaposlenik[] = [];
  search:TerminiSearchObject = <TerminiSearchObject>{};
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Termini> = new MatTableDataSource<Termini>();

  constructor(private TerminiService:TerminiService , private ZaposleniciService:ZaposleniciService , private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.TerminiService.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
    this.ZaposleniciService.Get(new HttpParams()).subscribe( x => {
      this.listZaposlenik = x;
    })
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  Filtriraj()
  {
    let params = new HttpParams();
    var date = `${this.search.Datum.getFullYear().toString()}-${(this.search.Datum.getMonth()+1).toString()}-${this.search.Datum.getDate().toString()}`
    if(this.search.Datum != undefined)
    {
      params = params.append('Datum' , date);
    }
    if(this.search.ZaposlenikID != undefined)
    {
      params = params.append('ZaposlenikID' , this.search.ZaposlenikID);
    }
    this.TerminiService.Get(params).subscribe(x => {
      this.dataSource.data = x;
    })
  }

}
