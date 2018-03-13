import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DrawerService {
  private drawerOpenSubject = new BehaviorSubject<boolean>(false);
  private drawerOpen = false;

  constructor() { }

  toggleDrawer() {
    this.drawerOpen = !this.drawerOpen;
    this.drawerOpenSubject.next(this.drawerOpen);
  }

  getDrawerOpen() {
    return this.drawerOpenSubject.asObservable();
  }

}
