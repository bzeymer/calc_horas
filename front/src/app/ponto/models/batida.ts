import * as moment from 'moment';

export class Batida {
    id: string;
    tipo: string;
    hora: moment.Moment;
    hora_registro: moment.Moment;

    constructor(batida?) {
        if (batida) {
            this.id = batida._id;
            this.tipo = batida.tipo;
            this.hora = moment(batida.hora);
            this.hora_registro = moment(batida.hora_registro) || moment(batida.hora);
        } else {
            this.id = '';
            this.tipo = '';
            this.hora = undefined;
            this.hora_registro = undefined;
        }
    }
}
