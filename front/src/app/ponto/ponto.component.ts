import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { RequestService } from '../services/request.service';
import { Batida } from './models/batida';
import { Dia } from './models/dia';

@Component({
  selector: 'app-ponto',
  templateUrl: './ponto.component.html',
  styleUrls: ['./ponto.component.scss']
})
export class PontoComponent {
  displayedColumns = ['dia', 'diaSemana', 'entrada1', 'saida1', 'entrada2', 'saida2', 'total'];
  dias: Dia[] = [];
  diasStream = new BehaviorSubject<any[]>([]);
  startDate;
  endDate;

  constructor(
    private requestService: RequestService,
    private activatedRoute: ActivatedRoute
  ) {
    moment.locale(window.navigator.language);
    this.activatedRoute.queryParams.subscribe(params => {
      this.getParamsDate(params);
      this.fillDias();
      this.requestService.req('get', 'batidas', {startDate: this.startDate, endDate: this.endDate});
    });

    this.requestService.getResponse().subscribe((state) => {
      this.arrangeByDays(state.batidas.response.data);
    });
  }

  fillDias() {
    if (!this.startDate) {
      return;
    }

    let auxDate = this.startDate;

    if (this.endDate) {
      let index = 0;
      while (auxDate < this.endDate) {
        this.dias.push(new Dia(moment(auxDate)));
        auxDate = moment(auxDate).add(1, 'd').valueOf();
        index++;
      }
    }
  }

  arrangeByDays(batidas) {
    this.dias.forEach(dia => {
      batidas.forEach(batida => {
        if (this.belongsTo(batida.hora, dia.dia)) {
          this.addToDay(batida, dia);
        }
      });
      this.calculateTotal(dia);
    });
    this.diasStream.next(this.dias);
  }

  belongsTo(batida, dia) {
    return (moment(batida).startOf('day').valueOf() === dia.startOf('day').valueOf());
  }

  addToDay(batida, dia) {
    if (batida.tipo === 'Entrada') {
      if (!dia.entrada1.id) {
        dia.entrada1 = new Batida(batida);
      } else {
        dia.entrada2 = new Batida(batida);
      }
    } else if (batida.tipo === 'Saída') {
      if (!dia.saida1.id) {
        dia.saida1 = new Batida(batida);
      } else {
        dia.saida2 = new Batida(batida);
      }
    }
  }

  calculateTotal(dia) {
    let total = 0;
    if (dia.entrada1.hora && dia.saida1.hora) {
      total = dia.saida1.hora.diff(dia.entrada1.hora);
    }

    if (dia.entrada2.hora && dia.saida2.hora) {
      total += dia.saida2.hora.diff(dia.entrada2.hora);
    }

    if (total > 0 ) {
      dia.total = moment.duration(total);
    } else {
      dia.total = undefined;
    }
  }

  getParamsDate(params) {
    if (params['startDate'] && params['endDate']) {
      this.startDate = moment(params['startDate']).startOf('day').valueOf();
      this.endDate = moment(params['endDate']).startOf('day').valueOf();

    } else if (params['startDate']) {
      const paramDate = moment(params['startDate']);
      this.startDate = paramDate.startOf('day').valueOf();
      this.endDate = paramDate.add(1, 'M').startOf('day').valueOf();

    } else if (params['endDate']) {
      const paramDate = moment(params['endDate']);
      this.endDate = paramDate.startOf('day').valueOf();
      this.startDate = paramDate.subtract(1, 'M').startOf('day').valueOf();

    } else {
      const today = moment();
      this.endDate = today.startOf('day').valueOf();
      this.startDate = today.subtract(1, 'M').startOf('day').valueOf();
    }
  }
}
