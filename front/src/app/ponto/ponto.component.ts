import { Component, OnInit } from '@angular/core';

import http from '../services/requests.service';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.scss']
})
export class PontoComponent implements OnInit {
  displayedColumns = ['tipo', 'hora'];
  batidas = [];

  constructor() { }

  ngOnInit() {
    http.get('batidas').then((response) => {
      console.log(response);
      this.batidas = response.data;
    }).catch((error) => {
      // TODO Treat error!
      this.batidas = [];
      console.log(error);
    });
  }

}
