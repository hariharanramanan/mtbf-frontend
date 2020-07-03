import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";

import { SharedModule } from "../shared/shared.module";

import * as fromComponents from "./components";

const routes: Route[] = [
    {
        path: "**",
        component: fromComponents.ShopfloorComponent,
    },
];

@NgModule({
    declarations: [...fromComponents.components],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
})
export class ShopfloorModule {}
