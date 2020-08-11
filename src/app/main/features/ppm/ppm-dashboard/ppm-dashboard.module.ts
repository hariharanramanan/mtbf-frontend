import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { PpmDashboardComponent } from './components/ppm-dashboard/ppm-dashboard.component';

const routes: Route[] = [
  {
    path: '**',
    component: PpmDashboardComponent
  }
];

@NgModule({
  declarations: [PpmDashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PpmDashboardModule { }
