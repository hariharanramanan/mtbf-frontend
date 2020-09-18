import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewShiftComponent } from '../add-new-shift/add-new-shift.component';

import { API, graphqlOperation } from 'aws-amplify';
import { listShiftMasters } from '../../../../../../graphql/queries';
import { onCreateShiftMaster } from '../../../../../../graphql/subscriptions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shift-master',
  templateUrl: './shift-master.component.html',
  styleUrls: ['./shift-master.component.scss']
})
export class ShiftMasterComponent implements OnInit {
  
  shiftMasterList: any;
  createShiftMasterListener: any;

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

  ngOnInit() {
    this.getShiftMasters();
    this.createShiftMasterListener = API.graphql(graphqlOperation(onCreateShiftMaster));
    this.createShiftMasterListener.subscribe(data => {
      // console.log(data.value.data.onCreateShiftMaster);
      const newShiftMaster = data.value.data.onCreateShiftMaster;
      const prevShiftMasters = this.shiftMasterList.filter(master => master.id !== newShiftMaster.id);
      const updatedShiftMasters = [newShiftMaster, ...prevShiftMasters];
      this.shiftMasterList = updatedShiftMasters;
    });
  }

  async getShiftMasters() {
    const result:any = await API.graphql(graphqlOperation(listShiftMasters));
    this.shiftMasterList = result.data.listShiftMasters.items;
  }

  addNewShift() {
    this._bottomSheet.open(AddNewShiftComponent);
  }

}
