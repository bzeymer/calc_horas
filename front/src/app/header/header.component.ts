import { Component, OnInit } from '@angular/core';
import { DrawerService } from '../drawer/drawer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(
    private drawerService: DrawerService
  ) {}

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }

}
