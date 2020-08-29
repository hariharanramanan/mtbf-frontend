import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewShiftComponent } from '../add-new-shift/add-new-shift.component';
@Component({
  selector: 'app-shift-master',
  templateUrl: './shift-master.component.html',
  styleUrls: ['./shift-master.component.scss']
})
export class ShiftMasterComponent implements OnInit {
  
  constructor(private _bottomSheet: MatBottomSheet) { }

  rows: any[] = [
    {
      sno: '1',
      shiftName: 'Shift Name 1',
      shiftStartTime: '10:00 AM',
      shiftEndTime: '10:00 PM',
      breakName: 'Break Name 1',
      breakStartTime: '12:00 PM',
      breakEndTime: '12.30 PM',
      status: 'Active'
    }
  ];

  ngOnInit(): void {
  }

  addNewShift() {
    this._bottomSheet.open(AddNewShiftComponent);
  }

}
