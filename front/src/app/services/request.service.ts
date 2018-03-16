import { Injectable } from '@angular/core';
import axios from 'axios';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestService {
    private reqResponseStream = new Subject<any>();
    private http: any;

    constructor() {
        this.http = axios.create({
            baseURL: 'http://localhost:3000/',
            timeout: 10000,
        });
    }

    req(method, url, params): any {
        this.http[method](url, {params}).then((response) => {
            this.reqResponseStream.next({[url]: {response: response}});
        }).catch((error) => {
            // TODO Treat error!
            console.log(error);
        });
    }

    getResponse(): Observable<any> {
        return this.reqResponseStream.asObservable();
    }
}
