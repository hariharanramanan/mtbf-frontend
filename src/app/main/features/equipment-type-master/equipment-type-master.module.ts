import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { EquipmentTypeComponent } from './components/equipment-type/equipment-type.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { AddNewEquipmentTypeComponent } from './components/add-new-equipment-type/add-new-equipment-type.component';

const routes: Route[] = [
  {
    path: '**',
    component: EquipmentTypeComponent
  }
];

@NgModule({
  declarations: [EquipmentTypeComponent, AddNewEquipmentTypeComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class EquipmentTypeMasterModule { }
