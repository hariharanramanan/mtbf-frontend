import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';

import { AddNewPlantComponent } from '../add-new-plant/add-new-plant.component';
import { EditPlantComponent } from '../edit-plant/edit-plant.component';

@Component({
  selector: 'app-plant-master',
  templateUrl: './plant-master.component.html',
  styleUrls: ['./plant-master.component.scss']
})
export class PlantMasterComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth,
        private _bottomSheet: MatBottomSheet) {
   
  }

  async ngOnInit() {
    const userData:firebase.User = await this.auth.currentUser;
    if(userData.uid) {
      this.itemsCollection = this.afs.collection<any>('plant_master', ref => ref.where('createdBy','==',userData.uid));
      this.items = this.itemsCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        })
      );
    }
  }
  
  addNewPlant() {
    this._bottomSheet.open(AddNewPlantComponent);
  }

  selectedItem(event) {
    if(event.type == 'click') {
      this._bottomSheet.open(EditPlantComponent, {
        data: event.row
      });
    }
  }

}
