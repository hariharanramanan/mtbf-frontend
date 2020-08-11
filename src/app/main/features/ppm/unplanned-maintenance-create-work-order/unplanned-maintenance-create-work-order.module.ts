import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { UnplannedMaintenenceCreateWorkOrderComponent } from './components/unplanned-maintenence-create-work-order/unplanned-maintenence-create-work-order.component';

const routes: Route[] = [
  {
    path: '**',
    component: UnplannedMaintenenceCreateWorkOrderComponent
  }
];


@NgModule({
  declarations: [UnplannedMaintenenceCreateWorkOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UnplannedMaintenanceCreateWorkOrderModule { }
