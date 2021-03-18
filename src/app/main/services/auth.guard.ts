import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { FuseNavigationItem } from "../../../@fuse/types";
import { User } from '../models';

@Injectable({
    providedIn: 'root'
  })
  export class AuthGuard implements CanActivate {

    pathFromFirestore: any;
    navigation: FuseNavigationItem[];
    items: any[];

    constructor(
        private router: Router,
        private afs: AngularFirestore,
        private angularFireAuth: AngularFireAuth
    ) { }
  
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
        return this.angularFireAuth.authState.pipe(
            mergeMap((authResult) => this.afs.collection<User>('users').doc(authResult.uid).valueChanges()),
        ).pipe(
            map(user => {
                const navItems = user.menus.map(navItem => {
                    return navItem.url.substring(1);
                });
                if(navItems.includes(route.routeConfig.path)) {
                    return true;
                } else {
                    this.router.navigate(['no']);
                    return false;
                }
            })
        );
    }
}
