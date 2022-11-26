import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, Validators} from "@angular/forms";
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-ponuda-modal',
  templateUrl: './ponuda-modal.component.html',
  styleUrls: ['./ponuda-modal.component.css']
})
export class PonudaModalComponent implements OnInit {

  profileForm = this.formBuilder.group({
    naziv:['' , [Validators.minLength(3),Validators.required]],
    cijena:['' , [CustomValidators.digits,Validators.required]],
  })

  constructor(private dialog:MatDialogRef<PonudaModalComponent> ,
              @Inject(MAT_DIALOG_DATA) public data:any , private formBuilder:FormBuilder) { }

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
