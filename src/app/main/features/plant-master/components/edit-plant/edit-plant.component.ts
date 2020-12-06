import { Component, OnInit, Inject } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.scss']
})
export class EditPlantComponent implements OnInit {

  editPlantForm: FormGroup;
  userId: any;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<EditPlantComponent>,
    private formBuilder: FormBuilder,
    private afs: AngularFirestore, 
    private auth: AngularFireAuth
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.then(userData => {
      this.userId = userData.uid;
    });

    this.editPlantForm = this.formBuilder.group({
      plantName: [this.data.plantName, Validators.required],
      address: [this.data['address'], Validators.required],
      primaryContact: [this.data['primaryContact'], Validators.required],
    });
  }

  async updatePlant() {
    const { plantName, primaryContact, address } = this.editPlantForm.value;
    await this.afs.collection('plant_master').doc(this.data.id).update({
      'plantName': plantName,
      'primaryContact': primaryContact,
      'address': address,
      'createdBy': this.userId
    });
    this._bottomSheetRef.dismiss();
  }

}
