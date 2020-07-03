import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";

import { FactoryComponent } from "./components/factory/factory.component";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseCountdownModule } from "@fuse/components";

const routes: Route[] = [
    {
        path: "**",
        component: FactoryComponent,
    },
];

@NgModule({
    declarations: [FactoryComponent],
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatIconModule,
        NgxDatatableModule,
        CommonModule,
        RouterModule.forChild(routes),
        FuseSharedModule,
        FuseCountdownModule,
    ],
})
export class FactoryModule {}
