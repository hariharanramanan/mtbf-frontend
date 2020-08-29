import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewUomComponent } from '../add-new-uom/add-new-uom.component';

@Component({
  selector: 'app-uom-master',
  templateUrl: './uom-master.component.html',
  styleUrls: ['./uom-master.component.scss']
})
export class UomMasterComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  rows: any[] = [
    {
      sno: '1',
      unitName: 'Operation 1',
      description: 'Equipment Type 1',
      status: 'Active'
    }
  ];

  ngOnInit(): void {
  }

  addNewUoM() {
    this._bottomSheet.open(AddNewUomComponent);
  }
}
