import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-add-new-department',
  templateUrl: './add-new-department.component.html',
  styleUrls: ['./add-new-department.component.scss']
})
export class AddNewDepartmentComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<AddNewDepartmentComponent>) { }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
  }

}
