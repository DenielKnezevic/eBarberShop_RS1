import { Component, OnInit , Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-zmodal',
  templateUrl: './zmodal.component.html',
  styleUrls: ['./zmodal.component.css']
})
export class ZModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ZModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  Save(){
    this.dialogRef.close(this.data);
  }

}
