import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";
import { UomMasterComponent } from './components/uom-master/uom-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: UomMasterComponent
  }
];

@NgModule({
  declarations: [UomMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UomMasterModule { }
