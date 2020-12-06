import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import firebase from 'firebase/app';

import { AddShopFloorComponent } from '../add-shop-floor/add-shop-floor.component';
import { EditShopFloorComponent } from '../edit-shop-floor/edit-shop-floor.component';

@Component({
  selector: 'app-shopfloor',
  templateUrl: './shopfloor.component.html',
  styleUrls: ['./shopfloor.component.scss']
})
export class ShopfloorComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth,
    private _bottomSheet: MatBottomSheet) { }

    async ngOnInit() {
      const userData:firebase.User = await this.auth.currentUser;
      if(userData.uid) {
        this.itemsCollection = this.afs.collection<any>('shopfloor_master', ref => ref.where('createdBy','==',userData.uid));
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

    addShopfloor() {
      this._bottomSheet.open(AddShopFloorComponent);
    }

    selectedItem(event) {
      if(event.type == 'click') {
        this._bottomSheet.open(EditShopFloorComponent, {
          data: event.row
        });
      }
    }

}
