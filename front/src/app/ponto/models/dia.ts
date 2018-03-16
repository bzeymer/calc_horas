import { Batida } from './batida';

export class Dia {
    dia: Date;
    batidas: Batida[];
    total: Date;
    especial: string;

    constructor(time: number) {
        this.dia = new Date(time);
    }
}
