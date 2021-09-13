import {Component, OnInit} from '@angular/core';

/** @title Basic date range picker */
@Component({
  selector: 'dialog-2',
  templateUrl: './dialog.component.html',
})
export class Dialog  implements OnInit {
    ngOnInit() {

    }

    onOpened(e: any) {
     setTimeout(() => {
      e.popup.element.style.setProperty('position', 'absolute');
    });
    }
}
