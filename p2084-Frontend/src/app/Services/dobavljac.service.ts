import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {APIService} from "./api.service";

export interface Dobavljac{
  id:number,
  nazivDobavljaca:string,
  brojTelefona:string
}

@Injectable({
  providedIn: 'root'
})
export class DobavljacService extends APIService<Dobavljac>{

  constructor(httpKlijent:HttpClient) { super('Dobavljac' , httpKlijent) }

}
