import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

import { AddUserComponent } from "../add-user/add-user.component";

@Component({
    selector: "app-users",
    templateUrl: "./users.component.html",
    styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
    constructor(private _bottomSheet: MatBottomSheet) {}

    ngOnInit(): void {}

    rows = [
        {
            username: "harryharanr",
            role: "Plant Lead",
        },
        {
            username: "johnsmith",
            role: "Shopfloor Lead",
        },
    ];

    ColumnMode = ColumnMode;

    openBottomSheet() {
        const bottomSheetRef = this._bottomSheet.open(AddUserComponent);

        bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
            this.rows = [
                ...this.rows,
                {
                    username: "markboucher",
                    role: "Shopfloor Lead",
                },
            ];
        });
    }
}
