import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { UnplannedMaintenenceWorkInProgressComponent } from './components/unplanned-maintenence-work-in-progress/unplanned-maintenence-work-in-progress.component';

const routes: Route[] = [
  {
    path: '**',
    component: UnplannedMaintenenceWorkInProgressComponent
  }
];

@NgModule({
  declarations: [UnplannedMaintenenceWorkInProgressComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnplannedMaintenanceWorkInProgressModule { }
