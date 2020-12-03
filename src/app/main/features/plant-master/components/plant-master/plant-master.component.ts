import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';


@Component({
  selector: 'app-plant-master',
  templateUrl: './plant-master.component.html',
  styleUrls: ['./plant-master.component.scss']
})
export class PlantMasterComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
   
  }

  async ngOnInit() {
    const userData:firebase.User = await this.auth.currentUser;
    if(userData.uid) {
      this.itemsCollection = this.afs.collection<any>('plant_master', ref => ref.where('createdBy','==',userData.uid));
      this.items = this.itemsCollection.valueChanges();
    }
  }
  
  addNewPlant() {

  }

}
