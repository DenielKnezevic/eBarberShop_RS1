import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {SignalrService} from "./Services/signalr.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public signalRService: SignalrService, private http: HttpClient) { }
  ngOnInit() {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
    this.startHttpRequest();
  }

  private startHttpRequest = () => {
    this.http.get('http://localhost:60669/api/chart')
      .subscribe(res => {
        console.log(res);
      })
  }
}
