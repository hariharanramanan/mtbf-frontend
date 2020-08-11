import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { ReportsMttrComponent } from './components/reports-mttr/reports-mttr.component';

const routes: Route[] = [
  {
    path: '**',
    component: ReportsMttrComponent
  }
];

@NgModule({
  declarations: [ReportsMttrComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportsMttrModule { }
