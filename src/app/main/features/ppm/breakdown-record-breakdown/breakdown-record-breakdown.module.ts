import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { BreakdownRecordBreakdownComponent } from './components/breakdown-record-breakdown/breakdown-record-breakdown.component';

const routes: Route[] = [
  {
    path: '**',
    component: BreakdownRecordBreakdownComponent
  }
];

@NgModule({
  declarations: [BreakdownRecordBreakdownComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BreakdownRecordBreakdownModule { }
