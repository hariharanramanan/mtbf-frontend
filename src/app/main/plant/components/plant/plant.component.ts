import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { fuseAnimations } from "@fuse/animations";

import { AddPlantComponent } from "../add-plant/add-plant.component";
import { AuthService } from "app/main/services/auth/auth.service";
@Component({
    selector: "app-plant",
    templateUrl: "./plant.component.html",
    styleUrls: ["./plant.component.scss"],
    animations: fuseAnimations,
})
export class PlantComponent implements OnInit {
    constructor(
        private _bottomSheet: MatBottomSheet,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.authService.getUser().subscribe((data) => {
            console.log(data);
        });
    }

    rows = [
        {
            id: "1",
            plantName: "Plant 1",
            primaryContact: "Primary Contact 1",
            address: "Address 1",
        },
        {
            id: "2",
            plantName: "Plant 2",
            primaryContact: "Primary Contact 2",
            address: "Address 2",
        },
        {
            id: "3",
            plantName: "Plant 3",
            primaryContact: "Primary Contact 3",
            address: "Address 3",
        },
        {
            id: "4",
            plantName: "Plant 4",
            primaryContact: "Primary Contact 4",
            address: "Address 4",
        },
        {
            id: "5",
            plantName: "Plant 5",
            primaryContact: "Primary Contact 5",
            address: "Address 5",
        },
        {
            id: "6",
            plantName: "Plant 6",
            primaryContact: "Primary Contact 6",
            address: "Address 6",
        },
        {
            id: "7",
            plantName: "Plant 7",
            primaryContact: "Primary Contact 7",
            address: "Address 7",
        },
        {
            id: "8",
            plantName: "Plant 8",
            primaryContact: "Primary Contact 8",
            address: "Address 8",
        },
    ];

    ColumnMode = ColumnMode;

    openBottomSheet() {
        const bottomSheetRef = this._bottomSheet.open(AddPlantComponent);

        bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
            this.rows = [
                ...this.rows,
                {
                    id: "9",
                    plantName: "Plant 9",
                    primaryContact: "Primary Contact 9",
                    address: "Address 9",
                },
            ];
        });
    }
}
