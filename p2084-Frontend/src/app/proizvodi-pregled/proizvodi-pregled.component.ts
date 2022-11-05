import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {Proizvod, ProizvodiService} from "../Services/proizvodi.service";
import {Dobavljac, DobavljacService} from "../Services/dobavljac.service";
import {HttpParams} from "@angular/common/http";
import {MatPaginator} from "@angular/material/paginator";
import {Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";


interface Sort{
  value:string,
  viewValue:string
}

export interface ProizvodiSearchObject{
  Naziv:string,
  ComboBoxSearch:string,
  DobavljacSearch:number
}

@Component({
  selector: 'app-proizvodi-pregled',
  templateUrl: './proizvodi-pregled.component.html',
  styleUrls: ['./proizvodi-pregled.component.css']
})

export class ProizvodiPregledComponent implements OnInit {

  search:ProizvodiSearchObject = <ProizvodiSearchObject>{};
  listDobavljaci:Dobavljac[] = [];
  listSort:Sort[] = [
    {value: 'Abeceda' , viewValue: 'A-Z'},
    {value: 'AbecedaUnazad' , viewValue: 'Z-A'},
    {value: 'CijenaNajskuplje' , viewValue: 'Po najvisoj cijeni'},
    {value: 'CijenaJeftino' , viewValue: 'Po najnizoj cijeni'}
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obs: Observable<any>;
  dataSource: MatTableDataSource<Proizvod> = new MatTableDataSource<Proizvod>();

  constructor(private ProizvodService:ProizvodiService , private DobavljaciService:DobavljacService , private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.ProizvodService.Get(new HttpParams()).subscribe(x => {
      this.dataSource.data = x;
    })
    this.DobavljaciService.Get(new HttpParams()).subscribe( x => {
      this.listDobavljaci = x;
    })
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.obs = this.dataSource.connect();
  }

  Filtriraj()
  {
    let params = new HttpParams();
    if(this.search.Naziv != undefined)
    {
      params = params.append('Naziv' , this.search.Naziv);
    }
    if(this.search.ComboBoxSearch != undefined)
    {
      params = params.append('ComboBoxSearch' , this.search.ComboBoxSearch);
    }
    if(this.search.DobavljacSearch != undefined)
    {
      params = params.append('DobavljacSearch' , this.search.DobavljacSearch);
    }
    this.ProizvodService.Get(params).subscribe(x => {
      this.dataSource.data = x;
    })
  }
}
