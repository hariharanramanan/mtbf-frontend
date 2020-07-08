import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { SharedModule } from "../shared/shared.module";
import { ApprovalComponent } from "./components/approval/approval.component";

const routes: Route[] = [
    {
        path: "**",
        component: ApprovalComponent,
    },
];

@NgModule({
    declarations: [ApprovalComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes),
        SharedModule,
    ],
})
export class ApprovalModule {}
