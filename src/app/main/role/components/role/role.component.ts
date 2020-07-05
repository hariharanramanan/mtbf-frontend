import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

import { AddRoleComponent } from "../add-role/add-role.component";

@Component({
    selector: "app-role",
    templateUrl: "./role.component.html",
    styleUrls: ["./role.component.scss"],
})
export class RoleComponent implements OnInit {
    constructor(private _bottomSheet: MatBottomSheet) {}

    ngOnInit(): void {}

    rows = [
        {
            roleName: "Role 1",
            permissions: ["Shopfloor Master", "Line Master"],
        },
        {
            roleName: "Role 2",
            permissions: ["Equipment Master", "Spare Master"],
        },
    ];

    ColumnMode = ColumnMode;

    openBottomSheet() {
        const bottomSheetRef = this._bottomSheet.open(AddRoleComponent);

        bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {
            this.rows = [
                ...this.rows,
                {
                    roleName: "Role 3",
                    permissions: ["Shift Master", "UoM Master"],
                },
            ];
        });
    }
}
