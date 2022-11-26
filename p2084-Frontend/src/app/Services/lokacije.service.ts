import { Injectable } from '@angular/core';
import {HttpClient, HttpXhrBackend} from "@angular/common/http";
import {APIService} from "./api.service";

export interface Lokacija{
  id:number,
  grad:string,
  drzava:string,
  adresa:string
}

@Injectable({
  providedIn: 'root'
})
export class LokacijeService extends APIService<Lokacija>{

  constructor(httpKlijent:HttpClient) { super('Lokacija' , httpKlijent); }


}
