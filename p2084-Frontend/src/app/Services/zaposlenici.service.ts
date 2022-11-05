import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APIService} from "./api.service";

export interface Zaposlenik {
  id:number,
  ime:string,
  prezime:string,
  datumRodjenja:Date,
  grad:string,
  drzava:string,
  brojTelefona:string
  adresa:string,

}

export interface ZaposlenikVModel {
  ime:string,
  prezime:string,
  datumRodjenja:Date,
  grad:string,
  drzava:string,
  brojTelefona:string
  adresa:string,

}



@Injectable({
  providedIn: 'root'
})
export class ZaposleniciService extends APIService<Zaposlenik>{

  constructor(httpKlijent : HttpClient) { super('Zaposlenik' , httpKlijent) }

}
