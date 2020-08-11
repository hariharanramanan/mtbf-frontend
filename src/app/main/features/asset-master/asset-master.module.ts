import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { AssetMasterComponent } from './components/asset-master/asset-master.component';

const routes: Route[] = [
  {
    path: '**',
    component: AssetMasterComponent
  }
];


@NgModule({
  declarations: [AssetMasterComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AssetMasterModule { }
