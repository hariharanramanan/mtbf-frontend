import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-add-shop-floor',
  templateUrl: './add-shop-floor.component.html',
  styleUrls: ['./add-shop-floor.component.scss']
})
export class AddShopFloorComponent implements OnInit {
  
  addShopfloorForm: FormGroup;
  private plantCollection: AngularFirestoreCollection<any>;
  private plantItems: Observable<any[]>;
  plantOptions:any[];
  plants: any[];
  userId: any;
  
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<AddShopFloorComponent>,
    private formBuilder: FormBuilder,
    private afs: AngularFirestore, private auth: AngularFireAuth,
  ) { }

  ngOnInit() {

    this.auth.currentUser.then(userData => {
      this.userId = userData.uid;
      this.plantCollection = this.afs.collection<any>('plant_master', ref => ref.where('createdBy','==',userData.uid));
      this.getPlantOptions();
    });

    this.addShopfloorForm = this.formBuilder.group({
      plantName: ['', Validators.required],
      shopfloorName: ['', Validators.required],
      description: ['', Validators.required],
    });
  }


  private getPlantOptions() {
    this.plantItems = this.plantCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.plantItems.subscribe(data => {
      this.plantOptions = data;
    });
  }

  async addNewShopfloor() {
    const { plantName, shopfloorName, description } = this.addShopfloorForm.value;
    const timestamp = firebase.default.firestore.FieldValue.serverTimestamp();
    await this.afs.collection('shopfloor_master').add({
      'plantName': plantName,
      'shopfloorName': shopfloorName,
      'description': description,
      'createdAt': timestamp,
      'createdBy': this.userId
    });
    this._bottomSheetRef.dismiss();
  }

}
