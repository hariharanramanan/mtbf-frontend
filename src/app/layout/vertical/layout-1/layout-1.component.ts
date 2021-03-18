import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseConfigService } from "@fuse/services/config.service";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FuseNavigationItem } from "@fuse/types";

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

import { User } from '../../../main/models';

@Component({
    selector: "vertical-layout-1",
    templateUrl: "./layout-1.component.html",
    styleUrls: ["./layout-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class VerticalLayout1Component implements OnInit, OnDestroy {

    private itemsCollection: AngularFirestoreCollection<any>;
    items: Observable<any[]>;

    fuseConfig: any;
    navigation: FuseNavigationItem[];
    menuItems: string[];
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private angularAuth: AngularFireAuth,
        private afs: AngularFirestore
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {  
        this.angularAuth.authState.subscribe(authResult => {
            if(authResult && authResult.uid) {
                this.afs.collection<User>('users').doc(authResult.uid).valueChanges().subscribe((userData: User) => {
                    this.navigation = userData.menus;
                    this._fuseNavigationService.unregister('main');
                    this._fuseNavigationService.register('main', this.navigation);
                    this._fuseNavigationService.setCurrentNavigation('main');
                });
            }
        });

        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
