import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { OperationsMasterComponent } from './components/operations-master/operations-master.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { AddNewOperationComponent } from './components/add-new-operation/add-new-operation.component';

const routes: Route[] = [
  {
    path: '**',
    component: OperationsMasterComponent
  }
];

@NgModule({
  declarations: [OperationsMasterComponent, AddNewOperationComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class OperationsMasterModule { }
