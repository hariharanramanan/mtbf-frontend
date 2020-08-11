import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { PlannedMaintenenceWorkOrderListComponent } from './components/planned-maintenence-work-order-list/planned-maintenence-work-order-list.component';

const routes: Route[] = [
  {
    path: '**',
    component: PlannedMaintenenceWorkOrderListComponent
  }
];

@NgModule({
  declarations: [PlannedMaintenenceWorkOrderListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlannedMaintenenceWorkOrderListModule { }
