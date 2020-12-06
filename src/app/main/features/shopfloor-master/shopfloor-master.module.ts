import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { ShopfloorComponent } from './components/shopfloor/shopfloor.component';
import { AddShopFloorComponent } from './components/add-shop-floor/add-shop-floor.component';
import { EditShopFloorComponent } from './components/edit-shop-floor/edit-shop-floor.component';
import { SharedModule } from '../../shared/shared.module';

const routes: Route[] = [
  {
    path: '**',
    component: ShopfloorComponent
  }
];


@NgModule({
  declarations: [ShopfloorComponent, AddShopFloorComponent, EditShopFloorComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ShopfloorMasterModule { }
