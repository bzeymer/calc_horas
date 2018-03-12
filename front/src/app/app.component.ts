import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  http = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000
  });

  ngOnInit() {
    this.http.get('/').then((res) => {
      console.log(res);
      this.title = res.data;
    });
  }
}
