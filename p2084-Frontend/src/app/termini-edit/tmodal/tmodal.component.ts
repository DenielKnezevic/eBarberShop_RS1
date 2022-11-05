import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ZaposleniciService, Zaposlenik} from "../../Services/zaposlenici.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-tmodal',
  templateUrl: './tmodal.component.html',
  styleUrls: ['./tmodal.component.css']
})
export class TmodalComponent implements OnInit {

  list:Zaposlenik[] = [];

  constructor(public dialogRef: MatDialogRef<TmodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any , private ZaposlenikService:ZaposleniciService) { }

  ngOnInit(): void {
    this.ZaposlenikService.Get(new HttpParams()).subscribe(x =>{
      this.list = x;
    })
  }

  Save(){
    this.dialogRef.close(this.data);
  }
}
