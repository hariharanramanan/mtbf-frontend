import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { RoutineManagementRoutineMasterComponent } from './components/routine-management-routine-master/routine-management-routine-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: RoutineManagementRoutineMasterComponent
  }
];

@NgModule({
  declarations: [RoutineManagementRoutineMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutineManagementRoutineMasterModule { }
