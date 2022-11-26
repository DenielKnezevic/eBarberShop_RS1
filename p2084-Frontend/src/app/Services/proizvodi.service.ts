import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Dobavljac} from "./dobavljac.service";
import {APIService} from "./api.service";

export interface Proizvod
{
  id:number,
  nazivProizvoda:string,
  serijskiBroj:string,
  cijena:number,
  dobavljacID:number,
  dobavljac:Dobavljac,
  slika:Blob,
  opis:string
}


@Injectable({
  providedIn: 'root'
})
export class ProizvodiService extends APIService<Proizvod>{

  constructor(httpKlijent : HttpClient) { super('Proizvod' , httpKlijent)}

}
