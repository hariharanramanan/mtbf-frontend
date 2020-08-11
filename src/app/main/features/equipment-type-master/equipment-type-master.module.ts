import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { EquipmentTypeComponent } from './components/equipment-type/equipment-type.component';

const routes: Route[] = [
  {
    path: '**',
    component: EquipmentTypeComponent
  }
];

@NgModule({
  declarations: [EquipmentTypeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EquipmentTypeMasterModule { }
