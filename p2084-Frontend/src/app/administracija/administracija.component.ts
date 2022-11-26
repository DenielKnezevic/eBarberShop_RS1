import { Component, OnInit } from '@angular/core';
import {ChartConfiguration, ChartType} from "chart.js";
import {HttpClient} from "@angular/common/http";
import {ZaposleniciService} from "../Services/zaposlenici.service";
import {MatDialog} from "@angular/material/dialog";
import {SignalrService} from "../Services/signalr.service";

@Component({
  selector: 'app-administracija',
  templateUrl: './administracija.component.html',
  styleUrls: ['./administracija.component.css']
})
export class AdministracijaComponent implements OnInit {

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      y: {
        min: 0
      }
    }
  };
  chartLabels: string[] = ['Real time chartovi - SignalR'];
  chartType: ChartType = 'bar';
  chartLegend: boolean = true;

  constructor(public signalRService: SignalrService) { }

  ngOnInit(): void {
  }

}
