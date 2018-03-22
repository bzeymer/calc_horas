import { Batida } from './batida';
import * as moment from 'moment';

export class Dia {
    dia: moment.Moment;
    entrada1: Batida;
    saida1: Batida;
    entrada2: Batida;
    saida2: Batida;
    total: moment.Moment;
    especial: string;

    constructor(time: moment.Moment) {
        this.dia = time;
        this.entrada1 = new Batida();
        this.saida1 = new Batida();
        this.entrada2 = new Batida();
        this.saida2 = new Batida();
        this.total = moment(0);
        this.especial = '';
    }
}
