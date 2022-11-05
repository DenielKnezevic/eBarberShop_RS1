import { Component,Input , OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-edit-proizvodi',
  templateUrl: './edit-proizvodi.component.html',
  styleUrls: ['./edit-proizvodi.component.css']
})
export class EditProizvodiComponent implements OnInit {
@Input()
editProizvod:any;
  constructor(private httpKlijent : HttpClient) { }

  ngOnInit(): void {
  }

  Ugasi() {
    this.editProizvod = null;
  }

  Spasi(x: any) {
    this.httpKlijent.patch('https://api.p2084.app.fit.ba/api/Proizvod/' + x.id, x).subscribe(x => {
      alert('Proizvod uspjesno editovan');
      this.editProizvod = null;

    })
  }
}
