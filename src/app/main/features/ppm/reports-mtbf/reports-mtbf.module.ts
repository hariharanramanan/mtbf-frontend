import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { ReportsMtbfComponent } from './components/reports-mtbf/reports-mtbf.component';

const routes: Route[] = [
  {
    path: '**',
    component: ReportsMtbfComponent
  }
];

@NgModule({
  declarations: [ReportsMtbfComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportsMtbfModule { }
