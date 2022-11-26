import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-zmodal',
  templateUrl: './zmodal.component.html',
  styleUrls: ['./zmodal.component.css']
})
export class ZModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ZModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any , private formBuilder:FormBuilder) { }

  profileForm = this.formBuilder.group({
    ime:['' , [Validators.minLength(3),Validators.required]],
    prezime:['' , [Validators.minLength(3),Validators.required]],
    datum:['' , [CustomValidators.date,Validators.required]],
    grad:['' , [Validators.minLength(3),Validators.required]],
    drzava:['' , [Validators.minLength(3),Validators.required]],
    adresa:['' , [Validators.minLength(5),Validators.required]],
    brojTelefona:['' , [Validators.minLength(6),Validators.required]],
  })

  ngOnInit(): void {
  }

  Save(){
    if(this.profileForm.valid)
    {
      this.dialogRef.close(this.data);
    }
    else {
      alert("Niste popunili sva obavezna polja");
    }
  }

}
