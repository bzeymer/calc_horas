import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  private _show: boolean;
  private _lastShow: boolean;

  @Input()
  set show(show: boolean) {
    this._lastShow = this._show;
    this._show = show;
  }

  @Output()
  clicked = new EventEmitter();

  callback() {
    this.clicked.emit();
  }
}
