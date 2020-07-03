import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component({
    selector: "app-add-shopfloor",
    templateUrl: "./add-shopfloor.component.html",
    styleUrls: ["./add-shopfloor.component.scss"],
})
export class AddShopfloorComponent implements OnInit {
    addShopfloorForm: FormGroup;
    @ViewChild("form") form;

    constructor(
        private _bottomSheetRef: MatBottomSheetRef<AddShopfloorComponent>,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.createForm();
    }

    plants: any[] = [
        { value: "plant1", viewValue: "Plant 1" },
        { value: "plant2", viewValue: "Plant 2" },
        { value: "plant3", viewValue: "Plant 3" },
    ];

    createForm() {
        this.addShopfloorForm = this.formBuilder.group({
            plantName: ["", Validators.required],
            shopfloorName: ["", Validators.required],
            primaryContact: ["", Validators.required],
            address: ["", Validators.required],
        });
    }

    cancel(): void {
        this.addShopfloorForm.reset();
        this._bottomSheetRef.dismiss();
    }

    addShopfloor(): void {
        this.form.resetForm();
        this._bottomSheetRef.dismiss({ test: "wow" });
    }
}
