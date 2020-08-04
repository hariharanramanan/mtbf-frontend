import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from "@angular/material/tabs";
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        MatTabsModule,
        MatDialogModule
    ],
    exports: [
        MatBottomSheetModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatListModule,
        MatSelectModule,
        MatTabsModule,
        MatDialogModule
    ],
})
export class MaterialModule {}
