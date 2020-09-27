import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup } from '@angular/forms';

import { API, graphqlOperation } from 'aws-amplify';
import { createShiftMaster } from '../../../../../../graphql/mutations';

@Component({
  selector: 'app-add-new-shift',
  templateUrl: './add-new-shift.component.html',
  styleUrls: ['./add-new-shift.component.scss']
})
export class AddNewShiftComponent implements OnInit {

  addShiftForm: FormGroup;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AddNewShiftComponent>,
    private formBuilder: FormBuilder
  ) { }

  async addNewShift() {
    await API.graphql(graphqlOperation(createShiftMaster,{ input: this.addShiftForm.value }));
    this._bottomSheetRef.dismiss();
  }

  close(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit(): void {
    this.addShiftForm = this.formBuilder.group({
      shiftName: [''],
      shiftStartTime: [''],
      shiftEndTime: [''],
      breakName: [''],
      breakStartTime: [''],
      breakEndTime: [''],
      status: ['active']
    });
  }

}
