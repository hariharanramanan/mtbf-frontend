import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { PlantMasterComponent } from './components/plant-master/plant-master.component';

const routes: Route[] = [
  {
    path: "**",
    component: PlantMasterComponent
  }
];


@NgModule({
  declarations: [PlantMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlantMasterModule { }
