import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

import { RoleService } from "../../../services";
@Component({
    selector: "app-add-user",
    templateUrl: "./add-user.component.html",
    styleUrls: ["./add-user.component.scss"],
})
export class AddUserComponent implements OnInit {
    addUserForm: FormGroup;
    @ViewChild("form") form;

    constructor(
        private _bottomSheetRef: MatBottomSheetRef<AddUserComponent>,
        private formBuilder: FormBuilder,
        private roleService: RoleService
    ) {}

    ngOnInit() {
        this.createForm();
        this.getRoles();
    }

    roles: any[] = [];

    createForm() {
        this.addUserForm = this.formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required],
            role: ["", Validators.required],
        });
    }

    cancel(): void {
        this.addUserForm.reset();
        this._bottomSheetRef.dismiss();
    }

    addUser(): void {
        this.form.resetForm();
        this._bottomSheetRef.dismiss();
    }

    private getRoles() {
        this.roleService.getRoles().subscribe((data: any) => {
            this.roles = data.roles;
        });
    }
}
