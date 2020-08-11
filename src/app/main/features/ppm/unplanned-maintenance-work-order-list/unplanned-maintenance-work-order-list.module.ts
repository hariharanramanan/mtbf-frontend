import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { UnplannedMaintenenceWorkOrderListComponent } from './components/unplanned-maintenence-work-order-list/unplanned-maintenence-work-order-list.component';

const routes: Route[] = [
  {
    path: '**',
    component: UnplannedMaintenenceWorkOrderListComponent
  }
];

@NgModule({
  declarations: [UnplannedMaintenenceWorkOrderListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnplannedMaintenanceWorkOrderListModule { }
