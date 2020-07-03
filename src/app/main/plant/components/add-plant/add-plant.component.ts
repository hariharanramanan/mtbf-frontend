import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatBottomSheetRef } from "@angular/material/bottom-sheet";

@Component({
    selector: "app-add-plant",
    templateUrl: "./add-plant.component.html",
    styleUrls: ["./add-plant.component.scss"],
})
export class AddPlantComponent implements OnInit {
    addPlantForm: FormGroup;
    @ViewChild("form") form;
    constructor(
        private _bottomSheetRef: MatBottomSheetRef<AddPlantComponent>,
        private formBuilder: FormBuilder
    ) {}

    ngOnInit() {
        this.createForm();
    }

    createForm() {
        this.addPlantForm = this.formBuilder.group({
            plantName: ["", Validators.required],
            primaryContact: ["", Validators.required],
            address: ["", Validators.required],
        });
    }

    cancel(): void {
        this.addPlantForm.reset();
        this._bottomSheetRef.dismiss();
    }

    addPlant(): void {
        this.form.resetForm();
        this._bottomSheetRef.dismiss({ test: "wow" });
    }
}
