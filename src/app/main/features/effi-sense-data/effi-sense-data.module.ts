import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { EffiSenseDataComponent } from './components/effi-sense-data/effi-sense-data.component';

const routes: Route[] = [
  {
    path: '**',
    component: EffiSenseDataComponent
  }
];

@NgModule({
  declarations: [EffiSenseDataComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class EffiSenseDataModule { }
