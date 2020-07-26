import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseConfigService } from "@fuse/services/config.service";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FuseNavigation } from "@fuse/types";

import { AuthService } from "../../../main/services";

@Component({
    selector: "vertical-layout-1",
    templateUrl: "./layout-1.component.html",
    styleUrls: ["./layout-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class VerticalLayout1Component implements OnInit, OnDestroy {
    fuseConfig: any;
    navigation: any;
    masters: any;
    isLoggedIn: boolean;
    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseNavigationService: FuseNavigationService,
        private authService: AuthService
    ) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        console.log("ngOnInit - Layout1Component");
        this.authService.getUserData().subscribe((data: any) => {
            console.log(data);
            this.masters = data.masters;
        });
        this.authService.getLoggedInStatus().subscribe((isLoggedIn) => {
            console.log("Logged in status in layout component", isLoggedIn);
            // Based on the login status , we need to bring in the sidemenu
            if (isLoggedIn) {
                console.log("Inside LoggedIn - Layout1Component");
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
                                hidden: this.toBeHidden("dashboard"),
                            },
                            {
                                id: "settings",
                                title: "Settings",
                                type: "item",
                                url: "/settings",
                                icon: "settings",
                                hidden: this.toBeHidden("settings"),
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
                                        hidden: this.toBeHidden("plant"),
                                    },
                                    {
                                        id: "shopfloormaster",
                                        title: "Shopfloor Master",
                                        type: "item",
                                        url: "/shopfloor",
                                        icon: "navigate_next",
                                        hidden: this.toBeHidden("shopfloor"),
                                    },
                                    {
                                        id: "linemaster",
                                        title: "Line Master",
                                        type: "item",
                                        url: "/line",
                                        icon: "navigate_next",
                                        hidden: this.toBeHidden("line"),
                                    },
                                    {
                                        id: "equipmentmaster",
                                        title: "Equipment Master",
                                        type: "item",
                                        url: "/equipment",
                                        icon: "navigate_next",
                                        hidden: this.toBeHidden("equipment"),
                                    },
                                    {
                                        id: "routinemaster",
                                        title: "Routine Master",
                                        type: "item",
                                        url: "/routine",
                                        icon: "navigate_next",
                                        hidden: this.toBeHidden("routine"),
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
                                        id: "approvals",
                                        title: "Pending Approvals",
                                        type: "item",
                                        url: "/approval",
                                        icon: "navigate_next",
                                        hidden: this.toBeHidden("approval"),
                                    },
                                    {
                                        id: "usermaster",
                                        title: "User Master",
                                        type: "item",
                                        url: "/users",
                                        icon: "navigate_next",
                                        hidden: this.toBeHidden("users"),
                                    },
                                    {
                                        id: "rolemaster",
                                        title: "Role Master",
                                        type: "item",
                                        url: "/role",
                                        icon: "navigate_next",
                                        hidden: this.toBeHidden("role"),
                                    },
                                ],
                            },
                        ],
                    },
                ];
                this._fuseNavigationService.unregister("sidemenu");
                this._fuseNavigationService.register("sidemenu", sidemenu);
                console.log("Navigation registered!!");
                this._fuseNavigationService.setCurrentNavigation("sidemenu");
            }
        });
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.fuseConfig = config;
            });
    }

    toBeHidden(master): boolean {
        if (this.masters) {
            const mastersList = this.masters.map((item) => item.mastername);
            const hasAccess = mastersList.includes(master);
            return !hasAccess;
        } else {
            return true;
        }
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
