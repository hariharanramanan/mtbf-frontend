import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { PlannedMaintenanceCreateWorkOrderComponent } from './components/planned-maintenance-create-work-order/planned-maintenance-create-work-order.component';

const routes: Route[] = [
  {
    path: '**',
    component: PlannedMaintenanceCreateWorkOrderComponent
  }
];

@NgModule({
  declarations: [PlannedMaintenanceCreateWorkOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlannedMaintenanceCreateWorkOrderModule { }
