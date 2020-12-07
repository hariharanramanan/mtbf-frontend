import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

import * as firebase from 'firebase/app';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';


@Component({
  selector: 'app-edit-shop-floor',
  templateUrl: './edit-shop-floor.component.html',
  styleUrls: ['./edit-shop-floor.component.scss']
})
export class EditShopFloorComponent implements OnInit {

  editShopfloorForm: FormGroup;
  private plantCollection: AngularFirestoreCollection<any>;
  private plantItems: Observable<any[]>;
  plantOptions:any[];
  userId: any;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<EditShopFloorComponent>,
    private formBuilder: FormBuilder,
    private afs: AngularFirestore, 
    private auth: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.auth.currentUser.then(userData => {
      this.userId = userData.uid;
      this.plantCollection = this.afs.collection<any>('plant_master', ref => ref.where('createdBy','==',userData.uid));
      this.getPlantOptions();
      
    });

    this.editShopfloorForm = this.formBuilder.group({
      shopfloorName: [this.data.shopfloorName, Validators.required],
      plantName: [this.data.plantName, Validators.required],
      description: [this.data.description, Validators.required],
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

  async updateShopfloor() {
    const { plantName, shopfloorName, description } = this.editShopfloorForm.value;
    await this.afs.collection('shopfloor_master').doc(this.data.id).update({
      'plantName': plantName,
      'shopfloorName': shopfloorName,
      'description': description,
      'createdBy': this.userId
    });
    this._bottomSheetRef.dismiss();
  }


}
