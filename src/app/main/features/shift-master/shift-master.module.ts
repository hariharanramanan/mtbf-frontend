import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { ShiftMasterComponent } from './components/shift-master/shift-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: ShiftMasterComponent
  }
];

@NgModule({
  declarations: [ShiftMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ShiftMasterModule { }
