import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LokacijeComponent} from "../lokacije.component";
import {FormBuilder, Validators} from "@angular/forms";
import {CustomValidators} from "ngx-custom-validators";

@Component({
  selector: 'app-lmodal',
  templateUrl: './lmodal.component.html',
  styleUrls: ['./lmodal.component.css']
})
export class LModalComponent implements OnInit {

  profileForm = this.formBuilder.group({
    grad:['' , [Validators.minLength(3),Validators.required]],
    drzava:['' , [Validators.minLength(3),Validators.required]],
    adresa:['' , [Validators.minLength(5),Validators.required]],
  })

  constructor(private dialog:MatDialogRef<LokacijeComponent> ,
              @Inject(MAT_DIALOG_DATA) public data : any , private formBuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  Save() {
    if(this.profileForm.valid)
    {
      this.dialog.close(this.data);
    }
    else{
      alert("Niste popunili sva obavezna polja");
    }
  }
}
