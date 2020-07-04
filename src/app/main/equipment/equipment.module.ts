import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";

import * as fromComponents from "./components";

const routes: Route[] = [
    {
        path: "**",
        component: fromComponents.EquipmentComponent,
    },
];

@NgModule({
    declarations: [...fromComponents.components],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        RouterModule.forChild(routes),
    ],
})
export class EquipmentModule {}
