import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

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
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.createForm();
    }

    permissions: any[] = [
        { value: "Shopfloor Lead" },
        { value: "Plant Lead" },
        { value: "Storekeeper" },
    ];

    createForm() {
        this.addRoleForm = this.formBuilder.group({
            roleName: ["", Validators.required],
            permissions: ["", Validators.required],
        });
    }

    cancel(): void {
        this.addRoleForm.reset();
        this._bottomSheetRef.dismiss();
    }

    addRole(): void {
        this.form.resetForm();
        this._bottomSheetRef.dismiss({ test: "wow" });
    }
}
