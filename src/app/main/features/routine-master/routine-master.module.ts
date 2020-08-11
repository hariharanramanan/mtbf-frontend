import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { RoutineMasterComponent } from './components/routine-master/routine-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: RoutineMasterComponent
  }
];

@NgModule({
  declarations: [RoutineMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RoutineMasterModule { }
