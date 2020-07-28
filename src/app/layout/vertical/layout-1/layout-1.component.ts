import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { FuseConfigService } from "@fuse/services/config.service";
import { FuseNavigationService } from "@fuse/components/navigation/navigation.service";
import { FuseNavigation } from "@fuse/types";
import { FuseNavigationItem } from "@fuse/types";
import { AuthService } from "../../../main/services";

@Component({
    selector: "vertical-layout-1",
    templateUrl: "./layout-1.component.html",
    styleUrls: ["./layout-1.component.scss"],
    encapsulation: ViewEncapsulation.None,
})
export class VerticalLayout1Component implements OnInit, OnDestroy {
    fuseConfig: any;
    navigation: FuseNavigationItem[];
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
        this.navigation = [
            {
                id: "dashboard",
                title: "Dashboard",
                type: "item",
                url: "/dashboard",
                icon: "keyboard_arrow_right",
            },
            {
                id: "settings",
                title: "Settings",
                type: "item",
                url: "/settings",
                icon: "keyboard_arrow_right",
            },
            {
                id: "deviceDataManagement",
                title: "Device Data Management",
                type: "group",
                children: [
                    {
                        id: "effisenceData",
                        title: "EffiSense Data",
                        type: "item",
                        url: "/effisense",
                        icon: "keyboard_arrow_right",
                    },
                ],
            },
            {
                id: "generalMasters",
                title: "General Masters",
                type: "group",
                children: [
                    {
                        id: "shiftMaster",
                        title: "Shift Master",
                        type: "item",
                        url: "/shift-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "departmentMaster",
                        title: "Department Master",
                        type: "item",
                        url: "/department-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "operationsMaster",
                        title: "Operations Master",
                        type: "item",
                        url: "/operations-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "equipmentTypeMaster",
                        title: "Equipment Type Master",
                        type: "item",
                        url: "/equipment-type-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "uomMaster",
                        title: "UoM Master",
                        type: "item",
                        url: "/uom-master",
                        icon: "keyboard_arrow_right",
                    },
                ],
            },
            {
                id: "infraManagement",
                title: "Infrastructure Management",
                type: "group",
                children: [
                    {
                        id: "plantMaster",
                        title: "Plant Master",
                        type: "item",
                        url: "/plant-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "shopfloorMaster",
                        title: "Shopfloor Master",
                        type: "item",
                        url: "/shopfloor-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "lineMaster",
                        title: "Line Master",
                        type: "item",
                        url: "/line-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "equipmentMaster",
                        title: "Equipment Master",
                        type: "item",
                        url: "/equipment-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "routineMaster",
                        title: "Routine Master",
                        type: "item",
                        url: "/routine-master",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "assetMaster",
                        title: "Asset Master",
                        type: "item",
                        url: "/asset-master",
                        icon: "keyboard_arrow_right",
                    },
                ],
            },
            {
                id: "ppm",
                title: "Preventive Planned Maintenance",
                type: "group",
                children: [
                    {
                        id: "ppm-dashboard",
                        title: "Dashboard",
                        type: "item",
                        url: "/ppm-dashboard",
                        icon: "keyboard_arrow_right",
                    },
                    {
                        id: "ppm-planned-maintenance",
                        title: "Planned Maintenence",
                        type: "collapsable",
                        icon: "keyboard_arrow_right",
                        children: [
                            {
                                id: "ppm-planned-maintenance-create-work-order",
                                title: "Create Work Order",
                                type: "item",
                                url:
                                    "ppm-planned-maintenance-create-work-order",
                                icon: "keyboard_arrow_right",
                            },
                            {
                                id: "ppm-planned-maintenance-work-in-progress",
                                title: "Work In Progress",
                                type: "item",
                                url: "ppm-planned-maintenance-work-in-progress",
                                icon: "keyboard_arrow_right",
                            },
                            {
                                id: "ppm-planned-maintenance-work-order-list",
                                title: "List Of Work Order",
                                type: "item",
                                url: "ppm-planned-maintenance-work-order-list",
                                icon: "keyboard_arrow_right",
                            },
                        ],
                    },
                    {
                        id: "ppm-unplanned-maintenance",
                        title: "Unplanned Maintenence",
                        type: "collapsable",
                        icon: "keyboard_arrow_right",
                        children: [
                            {
                                id:
                                    "ppm-unplanned-maintenance-create-work-order",
                                title: "Create Work Order",
                                type: "item",
                                url:
                                    "ppm-unplanned-maintenance-create-work-order",
                                icon: "keyboard_arrow_right",
                            },
                            {
                                id:
                                    "ppm-unplanned-maintenance-work-in-progress",
                                title: "Work In Progress",
                                type: "item",
                                url:
                                    "ppm-unplanned-maintenance-work-in-progress",
                                icon: "keyboard_arrow_right",
                            },
                            {
                                id: "ppm-unplanned-maintenance-work-order-list",
                                title: "List Of Work Order",
                                type: "item",
                                url:
                                    "ppm-unplanned-maintenance-work-order-list",
                                icon: "keyboard_arrow_right",
                            },
                        ],
                    },
                    {
                        id: "ppm-routine-management",
                        title: "Routine Management",
                        type: "collapsable",
                        icon: "keyboard_arrow_right",
                        children: [
                            {
                                id: "ppm-routine-master",
                                title: "Routine Master",
                                type: "item",
                                url: "/ppm-routine-master",
                                icon: "keyboard_arrow_right",
                            },
                            {
                                id: "ppm-checklist-master",
                                title: "Checklist Master",
                                type: "item",
                                url: "ppm-checklist-master",
                                icon: "keyboard_arrow_right",
                            },
                        ],
                    },
                    {
                        id: "ppm-reports",
                        title: "Reports",
                        type: "collapsable",
                        icon: "keyboard_arrow_right",
                        children: [
                            {
                                id: "ppm-mtbf",
                                title: "MTBF Reports",
                                type: "item",
                                url: "/ppm-mtbf-reports",
                                icon: "keyboard_arrow_right",
                            },
                            {
                                id: "ppm-mttr",
                                title: "MTTR Reports",
                                type: "item",
                                url: "ppm-mttr-reports",
                                icon: "keyboard_arrow_right",
                            },
                        ],
                    },
                    {
                        id: "ppm-breakdown",
                        title: "Breakdown",
                        type: "collapsable",
                        icon: "keyboard_arrow_right",
                        children: [
                            {
                                id: "ppm-record-breakdown",
                                title: "Record Breakdown",
                                type: "item",
                                icon: "keyboard_arrow_right",
                                url: "/ppm-record-breakdown",
                            },
                            {
                                id: "ppm-data-acquisition",
                                title: "Data Acquisition",
                                type: "item",
                                icon: "keyboard_arrow_right",
                                url: "ppm-data-acquisition",
                            },
                        ],
                    },
                    {
                        id: "ppm-run-to-failure",
                        title: "Run To Failure",
                        type: "collapsable",
                        icon: "keyboard_arrow_right",
                        children: [
                            {
                                id: "ppm-run-to-failure-work-order-list",
                                title: "List Of Work Orders",
                                type: "item",
                                icon: "keyboard_arrow_right",
                                url: "/ppm-run-to-failure-work-order-list",
                            },
                            {
                                id: "ppm-run-to-failure-work-in-progress",
                                title: "Work In Progress",
                                type: "item",
                                icon: "keyboard_arrow_right",
                                url: "ppm-run-to-failure-work-in-progress",
                            },
                        ],
                    },
                ],
            },
        ];
        this._fuseNavigationService.register("main", this.navigation);
        this._fuseNavigationService.setCurrentNavigation("main");

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
