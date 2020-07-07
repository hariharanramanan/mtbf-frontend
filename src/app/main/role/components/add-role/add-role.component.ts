import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

import { MasterService, RoleService } from "../../../services";

@Component({
    selector: "app-add-role",
    templateUrl: "./add-role.component.html",
    styleUrls: ["./add-role.component.scss"],
})
export class AddRoleComponent implements OnInit {
    addRoleForm: FormGroup;
    @ViewChild("form") form;

    constructor(
        private _bottomSheetRef: MatBottomSheetRef<AddRoleComponent>,
        private formBuilder: FormBuilder,
        private masterService: MasterService,
        private roleService: RoleService
    ) {}

    ngOnInit() {
        this.createForm();
        this.masterService.getAllMasters().subscribe((data: any) => {
            this.permissions = data.masters;
        });
    }

    permissions: any[] = [
        { value: "Shopfloor Lead" },
        { value: "Plant Lead" },
        { value: "Storekeeper" },
    ];

    createForm() {
        this.addRoleForm = this.formBuilder.group({
            role: ["", Validators.required],
            masters: ["", Validators.required],
        });
    }

    cancel(): void {
        this.addRoleForm.reset();
        this._bottomSheetRef.dismiss();
    }

    addRole(): void {
        if (this.addRoleForm.valid) {
            this.roleService
                .addRole(this.addRoleForm.value)
                .subscribe((data) => console.log(data));
        }
        this.form.resetForm();
        this._bottomSheetRef.dismiss();
    }
}
