import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { MatBottomSheet } from "@angular/material/bottom-sheet";

import { AddRoleComponent } from "../add-role/add-role.component";
import { RoleService } from "../../../services";
import { IRoles, IRole } from "../../../models";

@Component({
    selector: "app-role",
    templateUrl: "./role.component.html",
    styleUrls: ["./role.component.scss"],
})
export class RoleComponent implements OnInit {
    rows: any[] = [];
    ColumnMode = ColumnMode;

    constructor(
        private _bottomSheet: MatBottomSheet,
        private roleService: RoleService
    ) {}

    ngOnInit(): void {
        this.roleService.getRoles().subscribe((data: IRoles) => {
            this.rows = data.roles.map((item) => {
                return {
                    role: item.role,
                    masters: item.masters.map((item) => item.mastername),
                };
            });
        });

        const response = {
            roles: [
                {
                    masters: [
                        {
                            _id: "",
                            mastername: "plant",
                        },
                        {
                            _id: "",
                            mastername: "line",
                        },
                    ],
                    role: "Vice President",
                    _id: "5defgg....tt",
                },
            ],
        };
        const sampleRole = [
            {
                role: "Supervisor",
                masters: ["plant", "equipment"],
            },
        ];
    }

    openBottomSheet() {
        const bottomSheetRef = this._bottomSheet.open(AddRoleComponent);

        bottomSheetRef.afterDismissed().subscribe((dataFromChild) => {});
    }
}
