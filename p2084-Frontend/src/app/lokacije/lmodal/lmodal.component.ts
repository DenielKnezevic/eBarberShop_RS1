import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LokacijeComponent} from "../lokacije.component";

@Component({
  selector: 'app-lmodal',
  templateUrl: './lmodal.component.html',
  styleUrls: ['./lmodal.component.css']
})
export class LModalComponent implements OnInit {

  constructor(private dialog:MatDialogRef<LokacijeComponent> ,
              @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  Save() {
    this.dialog.close(this.data);
  }
}
