import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { ShiftMasterComponent } from './components/shift-master/shift-master.component';
import { SharedModule } from '../../shared/shared.module';
import { AddNewShiftComponent } from './components/add-new-shift/add-new-shift.component';

const routes: Route[] = [
  {
    path: '**',
    component: ShiftMasterComponent
  }
];

@NgModule({
  declarations: [ShiftMasterComponent, AddNewShiftComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ShiftMasterModule { }
