import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { BreakdownDataAcquisitionComponent } from './components/breakdown-data-acquisition/breakdown-data-acquisition.component';

const routes: Route[] = [
  {
    path: '**',
    component: BreakdownDataAcquisitionComponent
  }
];

@NgModule({
  declarations: [BreakdownDataAcquisitionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BreakdownDataAcquisitionModule { }
