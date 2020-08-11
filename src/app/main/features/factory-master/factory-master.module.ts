import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";
import { FactoryMasterComponent } from './components/factory-master/factory-master.component';


const routes: Route[] = [
  {
    path: '**',
    component: FactoryMasterComponent
  }
];

@NgModule({
  declarations: [FactoryMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FactoryMasterModule { }
