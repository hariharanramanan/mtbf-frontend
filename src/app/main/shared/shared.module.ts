import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FuseSharedModule } from "@fuse/shared.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

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
        AmplifyUIAngularModule
    ],
    exports: [MaterialModule, FuseSharedModule, NgxDatatableModule, AmplifyUIAngularModule],
    entryComponents: [ErrorComponent]
})
export class SharedModule {}
