import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { OperationsMasterComponent } from './components/operations-master/operations-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: OperationsMasterComponent
  }
];

@NgModule({
  declarations: [OperationsMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OperationsMasterModule { }
