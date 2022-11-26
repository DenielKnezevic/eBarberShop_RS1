import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ZaposleniciService, Zaposlenik} from "../../Services/zaposlenici.service";
import {HttpParams} from "@angular/common/http";
import {FormBuilder, Validators} from "@angular/forms";
import {Lokacija, LokacijeService} from "../../Services/lokacije.service";
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-tmodal',
  templateUrl: './tmodal.component.html',
  styleUrls: ['./tmodal.component.css']
})
export class TmodalComponent implements OnInit {

  list:Zaposlenik[] = [];
  listLokacije:Lokacija[] = [];
  profileForm = this.formBuilder.group({
    datum:['' , [CustomValidators.date,Validators.required]],
    zaposlenik:['' , Validators.required],
    lokacija:['' , Validators.required],
    vrijemeTermina:['' , [CustomValidators.rangeLength([5, 9]),Validators.required]],
  })

  constructor(public dialogRef: MatDialogRef<TmodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any , private ZaposlenikService:ZaposleniciService , private formBuilder:FormBuilder , private LokacijaService:LokacijeService) { }

  ngOnInit(): void {
    this.ZaposlenikService.Get(new HttpParams()).subscribe(x =>{
      this.list = x;
    })
    this.LokacijaService.Get(new HttpParams()).subscribe( x => {
      this.listLokacije = x;
    })
  }

  Save(){
    if(this.profileForm.valid)
    {
      this.dialogRef.close(this.data);
    }
    else{
      alert("Niste popunili sva obavezna polja");
    }
  }
}
