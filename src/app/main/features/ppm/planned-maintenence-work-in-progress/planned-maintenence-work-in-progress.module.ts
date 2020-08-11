import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { PlannedMaintenenceWorkInProgressComponent } from './components/planned-maintenence-work-in-progress/planned-maintenence-work-in-progress.component';

const routes: Route[] = [
  {
    path: '**',
    component: PlannedMaintenenceWorkInProgressComponent
  }
];

@NgModule({
  declarations: [PlannedMaintenenceWorkInProgressComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlannedMaintenenceWorkInProgressModule { }
