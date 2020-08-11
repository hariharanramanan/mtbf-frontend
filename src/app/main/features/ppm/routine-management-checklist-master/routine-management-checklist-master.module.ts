import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { RoutineManagementChecklistMasterComponent } from './components/routine-management-checklist-master/routine-management-checklist-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: RoutineManagementChecklistMasterComponent
  }
];

@NgModule({
  declarations: [RoutineManagementChecklistMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutineManagementChecklistMasterModule { }
