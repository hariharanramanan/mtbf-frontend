import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FuseSharedModule } from "@fuse/shared.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { MaterialModule } from "./material/material.module";

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MaterialModule,
        FuseSharedModule,
        NgxDatatableModule,
    ],
    exports: [MaterialModule, FuseSharedModule, NgxDatatableModule],
})
export class SharedModule {}
