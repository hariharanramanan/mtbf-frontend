import { Component, OnInit } from '@angular/core';
import {MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-new-plant',
  templateUrl: './add-new-plant.component.html',
  styleUrls: ['./add-new-plant.component.scss']
})
export class AddNewPlantComponent implements OnInit {

  addPlantForm: FormGroup;
  userId: any;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AddNewPlantComponent>,
    private formBuilder: FormBuilder,
    private afs: AngularFirestore, private auth: AngularFireAuth,
  ) { }

  async addNewShift() {
    const { plantName, primaryContact, address } = this.addPlantForm.value;
    const timestamp = firebase.default.firestore.FieldValue.serverTimestamp();
    await this.afs.collection('plant_master').add({
      'plantName': plantName,
      'primaryContact': primaryContact,
      'address': address,
      'createdAt': timestamp,
      'createdBy': this.userId
    });
    this._bottomSheetRef.dismiss();
  }

  ngOnInit() {
    this.auth.currentUser.then(userData => {
      this.userId = userData.uid;
    });

    this.addPlantForm = this.formBuilder.group({
      plantName: ['', Validators.required],
      address: ['', Validators.required],
      primaryContact: ['', Validators.required],
    });
  }

}
