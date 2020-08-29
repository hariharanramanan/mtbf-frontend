import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewOperationComponent } from '../add-new-operation/add-new-operation.component';

@Component({
  selector: 'app-operations-master',
  templateUrl: './operations-master.component.html',
  styleUrls: ['./operations-master.component.scss']
})
export class OperationsMasterComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  rows: any[] = [
    {
      sno: '1',
      operationName: 'Operation 1',
      equipmentType: 'Equipment Type 1',
      industry: 'Fired',
      description: 'Admin',
      status: 'Active'
    }
  ];

  ngOnInit(): void {
  }

  addNewOperation() {
    this._bottomSheet.open(AddNewOperationComponent);
  }

}
