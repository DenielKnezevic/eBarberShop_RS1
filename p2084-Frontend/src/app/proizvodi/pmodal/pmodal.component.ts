import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Dobavljac, DobavljacService} from "../../Services/dobavljac.service";
import {Observable, Subscriber} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-pmodal',
  templateUrl: './pmodal.component.html',
  styleUrls: ['./pmodal.component.css']
})
export class PModalComponent implements OnInit {

  dobavljaci!:Dobavljac[];

  constructor(private dialog:MatDialogRef<PModalComponent>, private service:DobavljacService,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    this.service.Get(new HttpParams()).subscribe(x => {
      this.dobavljaci = x;
    })
  }

  Save() {
    this.dialog.close(this.data);
  }


  onSelectedNewFile($event:Event) {
    const file:any = ($event.target as HTMLInputElement)?.files?.[0];
    console.log(file);
    this.convertToBase64(file);
  }

  convertToBase64(file:File){
    const observable = new Observable((subscriber:Subscriber<any>)=> {
      this.readFile(file,subscriber);
    })
    observable.subscribe((d) => {
      this.data.slika = d;
    })
  }

  readFile(file:File,subscriber:Subscriber<any>){
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload= () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    }

    filereader.onerror= (error) => {
      subscriber.error(error);
    }

  }

}
