import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";
import { UomMasterComponent } from './components/uom-master/uom-master.component';
import { SharedModule } from 'app/main/shared/shared.module';
import { AddNewUomComponent } from './components/add-new-uom/add-new-uom.component';

const routes: Route[] = [
  {
    path: '**',
    component: UomMasterComponent
  }
];

@NgModule({
  declarations: [UomMasterComponent, AddNewUomComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UomMasterModule { }
