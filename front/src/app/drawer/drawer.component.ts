import { Component, OnInit, Input } from '@angular/core';
import { DrawerService } from './drawer.service';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent implements OnInit {
  open = false;

  constructor(
    private drawerService: DrawerService
  ) {
    this.drawerService.getDrawerOpen().subscribe((value) => {
      this.open = value;
    });
  }

  ngOnInit() {
  }

  toggleDrawer() {
    this.drawerService.toggleDrawer();
  }

  drawerClick(e: Event) {
    e.stopPropagation();
  }
}
