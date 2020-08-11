import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { LineMasterComponent } from './components/line-master/line-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: LineMasterComponent
  }
];


@NgModule({
  declarations: [LineMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LineMasterModule { }
