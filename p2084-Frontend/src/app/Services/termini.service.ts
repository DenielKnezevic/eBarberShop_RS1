import { Injectable } from '@angular/core';
import {APIService} from "./api.service";
import {Zaposlenik} from "./zaposlenici.service";
import {HttpClient} from "@angular/common/http";

export interface Termini{
  id:number,
  datumTermina:Date,
  datumKreiranja:Date,
  zaposlenikID:number,
  zaposlenik:Zaposlenik
}

@Injectable({
  providedIn: 'root'
})
export class TerminiService extends APIService<any>{

  constructor(httpKlijent:HttpClient) { super('Termin' , httpKlijent)}
}
