import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseConfigService } from "@fuse/services/config.service";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FuseNavigation } from "@fuse/types";

const sidemenu: FuseNavigation[] = [
    {
        id: "generalsetup",
        title: "General Setup",
        type: "group",
        children: [
            {
                id: "dashboard",
                title: "Dashboard",
                type: "item",
                url: "/dashboard",
                icon: "dashboard",
            },
            {
                id: "settings",
                title: "Settings",
                type: "item",
                url: "/settings",
                icon: "settings",
            },
            {
                id: "masters",
                title: "Masters",
                type: "collapsable",
                icon: "toys",
                children: [
                    {
                        id: "plantmaster",
                        title: "Plant Master",
                        type: "item",
                        url: "/plant",
                        icon: "navigate_next",
                    },
                    {
                        id: "shopfloormaster",
                        title: "Shopfloor Master",
                        type: "item",
                        url: "/shopfloor",
                        icon: "navigate_next",
                    },
                    {
                        id: "linemaster",
                        title: "Line Master",
                        type: "item",
                        url: "/line",
                        icon: "navigate_next",
                    },
                    {
                        id: "equipmentmaster",
                        title: "Equipment Master",
                        type: "item",
                        url: "/equipment",
                        icon: "navigate_next",
                    },
                    {
                        id: "routinemaster",
                        title: "Routine Master",
                        type: "item",
                        url: "/routine",
                        icon: "navigate_next",
                    },
                ],
            },
            {
                id: "usermanagement",
                title: "User Management",
                type: "collapsable",
                icon: "perm_identity",
                children: [
                    {
                        id: "usermaster",
                        title: "Users",
                        type: "item",
                        url: "/users",
                        icon: "navigate_next",
                    },
                ],
            },
        ],
    },
    {
        id: "infrastructure",
        title: "Infrastructure",
        type: "group",
        children: [
            {
                id: "assetmanagement",
                title: "Asset Management",
                type: "item",
                url: "/asset-management",
                icon: "build",
            },
            {
                id: "assetdecommissioning",
                title: "Asset Decommissioning",
                type: "item",
                url: "/asset-decommissioning",
                icon: "assignment_return",
            },
        ],
    },
];

@Component({
    selector: "vertical-layout-1",
    templateUrl: "./layout-1.component.html",
    styleUrls: ["./layout-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class VerticalLayout1Component implements OnInit, OnDestroy {
    fuseConfig: any;
    navigation: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService
    ) {
        this._fuseNavigationService.register("sidemenu", sidemenu);

        this._fuseNavigationService.setCurrentNavigation("sidemenu");

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Subscribe to config changes
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
