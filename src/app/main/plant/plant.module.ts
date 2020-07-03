import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import * as fromComponents from "./components";

import { SharedModule } from "../shared/shared.module";

const routes: Route[] = [
    {
        path: "**",
        component: fromComponents.PlantComponent,
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
export class PlantModule {}
