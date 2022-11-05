import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APIService} from "./api.service";

export interface Ponuda {
  id:number,
  nazivPonude:string,
  cijena:number
}

@Injectable({
  providedIn: 'root'
})
export class PonudaService extends APIService<Ponuda>{

  constructor(httpKlijent:HttpClient) { super('Ponuda' , httpKlijent)}

}
