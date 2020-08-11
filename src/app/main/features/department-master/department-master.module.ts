import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { DepartmentMasterComponent } from './components/department-master/department-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: DepartmentMasterComponent
  }
];

@NgModule({
  declarations: [DepartmentMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DepartmentMasterModule { }
