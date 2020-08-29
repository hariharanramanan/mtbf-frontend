import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-new-shift',
  templateUrl: './add-new-shift.component.html',
  styleUrls: ['./add-new-shift.component.scss']
})
export class AddNewShiftComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<AddNewShiftComponent>) { }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
