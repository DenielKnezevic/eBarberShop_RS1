import { Injectable } from '@angular/core';
import {APIService} from "./api.service";
import {Zaposlenik} from "./zaposlenici.service";
import {HttpClient} from "@angular/common/http";
import {Lokacija} from "./lokacije.service";

export interface Termini{
  id:number,
  datumTermina:Date,
  datumKreiranja:Date,
  vrijemeTermina:string,
  zaposlenikID:number,
  zaposlenik:Zaposlenik,
  lokacijaID:number,
  lokacija:Lokacija
}

@Injectable({
  providedIn: 'root'
})
export class TerminiService extends APIService<any>{

  constructor(httpKlijent:HttpClient) { super('Termin' , httpKlijent)}
}
