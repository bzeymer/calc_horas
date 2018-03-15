import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { NOT_FOUND, UNAUTHORIZED } from '../../shared/config';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html'
})
export class ErrorPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}

  errorInfo: any;
  errors = {
    'not-found': {
      number: 404,
      message: NOT_FOUND
    },
    'unauthorized': {
      number: 401,
      message: UNAUTHORIZED
    }
  };

  ngOnInit() {
    this.errorInfo = this.errors['not-found'];

    this.route
      .params
      .subscribe(params => {
        if (params.error) {
          this.errorInfo = this.errors[params.error];
        }
    });
  }

}

