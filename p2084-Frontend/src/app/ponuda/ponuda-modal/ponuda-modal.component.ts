import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-ponuda-modal',
  templateUrl: './ponuda-modal.component.html',
  styleUrls: ['./ponuda-modal.component.css']
})
export class PonudaModalComponent implements OnInit {

  constructor(private dialog:MatDialogRef<PonudaModalComponent> ,
              @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
  }

  Save() {
    this.dialog.close(this.data);
  }
}
