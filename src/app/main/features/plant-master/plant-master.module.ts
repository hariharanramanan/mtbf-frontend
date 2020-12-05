import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";
import { SharedModule } from '../../shared/shared.module';

import { PlantMasterComponent } from './components/plant-master/plant-master.component';
import { AddNewPlantComponent } from './components/add-new-plant/add-new-plant.component';

const routes: Route[] = [
  {
    path: "**",
    component: PlantMasterComponent
  }
];


@NgModule({
  declarations: [PlantMasterComponent, AddNewPlantComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class PlantMasterModule { }
