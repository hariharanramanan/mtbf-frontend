import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewEquipmentTypeComponent } from '../add-new-equipment-type/add-new-equipment-type.component';

@Component({
  selector: 'app-equipment-type',
  templateUrl: './equipment-type.component.html',
  styleUrls: ['./equipment-type.component.scss']
})
export class EquipmentTypeComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  rows: any[] = [
    {
      sno: '1',
      equipmentType: 'Department 1',
      industry: 'Description 1',
      description: 'Admin',
      status: 'Active'
    }
  ];

  ngOnInit(): void {
  }

  addNewEquipmentType() {
    this._bottomSheet.open(AddNewEquipmentTypeComponent);
  }

}
