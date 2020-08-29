import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewDepartmentComponent } from '../add-new-department/add-new-department.component';

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.scss']
})
export class DepartmentMasterComponent implements OnInit {
  
  constructor(private _bottomSheet: MatBottomSheet) { }

  rows: any[] = [
    {
      sno: '1',
      department: 'Department 1',
      description: 'Description 1',
      isAdminFactory: 'Admin',
      status: 'Active'
    }
  ];


  ngOnInit(): void {
  }

  addNewDepartment() {
    this._bottomSheet.open(AddNewDepartmentComponent);
  }
}
