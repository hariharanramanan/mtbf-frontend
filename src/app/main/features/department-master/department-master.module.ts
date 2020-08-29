import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { DepartmentMasterComponent } from './components/department-master/department-master.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { AddNewDepartmentComponent } from './components/add-new-department/add-new-department.component';

const routes: Route[] = [
  {
    path: '**',
    component: DepartmentMasterComponent
  }
];

@NgModule({
  declarations: [DepartmentMasterComponent, AddNewDepartmentComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DepartmentMasterModule { }
