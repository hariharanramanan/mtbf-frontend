import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

import { AddEquipmentComponent } from "../add-equipment/add-equipment.component";
@Component({
    selector: "app-equipment",
    templateUrl: "./equipment.component.html",
    styleUrls: ["./equipment.component.scss"],
})
export class EquipmentComponent implements OnInit {
    constructor(private _bottomSheet: MatBottomSheet) {}

    ngOnInit(): void {}

    rows = [
        {
            id: "1",
            equipmentName: "Equipment 1",
            make: "Make 1",
            model: "Model 1",
        },
        {
            id: "2",
            equipmentName: "Equipment 2",
            make: "Make 2",
            model: "Model 2",
        },
        {
            id: "3",
            equipmentName: "Equipment 3",
            make: "Make 3",
            model: "Model 3",
        },
        {
            id: "4",
            equipmentName: "Equipment 4",
            make: "Make 4",
            model: "Model 4",
        },
        {
            id: "5",
            equipmentName: "Equipment 5",
            make: "Make 5",
            model: "Model 5",
        },
        {
            id: "6",
            equipmentName: "Equipment 6",
            make: "Make 6",
            model: "Model 6",
        },
        {
            id: "7",
            equipmentName: "Equipment 7",
            make: "Make 7",
            model: "Model 7",
        },
        {
            id: "8",
            equipmentName: "Equipment 8",
            make: "Make 8",
            model: "Model 8",
        },
    ];

    ColumnMode = ColumnMode;

    openBottomSheet() {
        const bottomSheetRef = this._bottomSheet.open(AddEquipmentComponent);

        bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
            this.rows = [
                ...this.rows,
                {
                    id: "9",
                    equipmentName: "Equipment 9",
                    make: "Make 9",
                    model: "Model 9",
                },
            ];
        });
    }
}
