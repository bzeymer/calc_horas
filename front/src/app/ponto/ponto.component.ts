import { Component, OnInit } from '@angular/core';

import http from '../services/requests.service';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.scss']
})
export class PontoComponent implements OnInit {
  batidas = [];

  constructor() { }

  ngOnInit() {
    http.get('batidas').then((response) => {
      this.batidas = response.data;
    }).catch((error) => {
      // TODO Treat error!
      console.log(error);
    });
  }

}
