import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { EquipmentMasterComponent } from './components/equipment-master/equipment-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: EquipmentMasterComponent
  }
];

@NgModule({
  declarations: [EquipmentMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EquipmentMasterModule { }
