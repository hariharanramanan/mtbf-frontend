import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { AddShopfloorComponent } from "../add-shopfloor/add-shopfloor.component";
@Component({
    selector: "app-shopfloor",
    templateUrl: "./shopfloor.component.html",
    styleUrls: ["./shopfloor.component.scss"],
})
export class ShopfloorComponent implements OnInit {
    constructor(private _bottomSheet: MatBottomSheet) {}

    ngOnInit(): void {}

    rows = [
        {
            id: "1",
            shopfloorName: "Shopfloor 1",
            primaryContact: "Primary Contact 1",
            address: "Address 1",
        },
        {
            id: "2",
            shopfloorName: "Shopfloor 2",
            primaryContact: "Primary Contact 2",
            address: "Address 2",
        },
        {
            id: "3",
            shopfloorName: "Shopfloor 3",
            primaryContact: "Primary Contact 3",
            address: "Address 3",
        },
        {
            id: "4",
            shopfloorName: "Shopfloor 4",
            primaryContact: "Primary Contact 4",
            address: "Address 4",
        },
        {
            id: "5",
            shopfloorName: "Shopfloor 5",
            primaryContact: "Primary Contact 5",
            address: "Address 5",
        },
        {
            id: "6",
            shopfloorName: "Shopfloor 6",
            primaryContact: "Primary Contact 6",
            address: "Address 6",
        },
        {
            id: "7",
            shopfloorName: "Shopfloor 7",
            primaryContact: "Primary Contact 7",
            address: "Address 7",
        },
        {
            id: "8",
            shopfloorName: "Shopfloor 8",
            primaryContact: "Primary Contact 8",
            address: "Address 8",
        },
    ];

    ColumnMode = ColumnMode;

    openBottomSheet() {
        const bottomSheetRef = this._bottomSheet.open(AddShopfloorComponent);

        bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
            this.rows = [
                ...this.rows,
                {
                    id: "9",
                    shopfloorName: "Shopfloor 9",
                    primaryContact: "Primary Contact 9",
                    address: "Address 9",
                },
            ];
        });
    }
}
