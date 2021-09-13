import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from './dialog.component';

/** @title Basic date range picker */
@Component({
  selector: 'date-range-picker-overview-example',
  templateUrl: 'date-range-picker-overview-example.html',
  styleUrls: ['date-range-picker-overview-example.css']
})
export class DateRangePickerOverviewExample implements OnInit {
  constructor(private readonly dialog: MatDialog) {}

  ngOnInit() {
  }

clicked() {
  const dialogRef = this.dialog.open(Dialog, {
    position: {
      top: '300px'
    },
    width: '250px',
    height:'auto',
  });
}

}

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
