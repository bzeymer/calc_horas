import { Component, OnInit } from '@angular/core';

import { RequestService } from '../services/request.service';
import { Dia } from './models/dia';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.scss']
})
export class PontoComponent {
  displayedColumns = ['tipo', 'hora'];
  dias: Dia[] = [];
  startDate: Date;
  endDate: Date;

  constructor(
    private requestService: RequestService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.startDate = params['startDate'] ? new Date(params['startDate']) : undefined;
      this.endDate = params['endDate'] ? new Date(params['endDate']) : undefined;
      this.fillDias();
      this.requestService.req('get', 'batidas', {startDate: this.startDate, endDate: this.endDate});
    });

    this.requestService.getResponse().subscribe((state) => {
      this.dias = this.arrangeByDays(state.batidas.response.data);
    });
  }

  fillDias() {
    if (!this.startDate) {
      return;
    }

    const auxDate: Date = new Date(this.startDate.getTime());

    if (this.endDate) {
      let index = 0;
      while (auxDate.getTime() !== this.endDate.getTime()) {
        this.dias.push(new Dia(auxDate.getTime()));
        auxDate.setDate(auxDate.getDate() + 1);
        index++;
      }
    } else {
      for (let index = 0; index <= 30; index++) {
        this.dias.push(new Dia(auxDate.getTime()));
        auxDate.setDate(auxDate.getDate() + 1);
      }
    }
  }

  arrangeByDays(batidas): any[] {
    //this.dias.forEach



    return [];
  }
}
