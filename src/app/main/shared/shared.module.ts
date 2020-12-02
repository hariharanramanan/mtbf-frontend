import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FuseSharedModule } from "@fuse/shared.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";


import { MaterialModule } from "./material/material.module";
import { ErrorComponent } from './components/error/error.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
    declarations: [ErrorComponent, NotFoundComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FuseSharedModule,
        NgxDatatableModule,
    ],
    exports: [MaterialModule, FuseSharedModule, NgxDatatableModule],
    entryComponents: [ErrorComponent]
})
export class SharedModule {}
