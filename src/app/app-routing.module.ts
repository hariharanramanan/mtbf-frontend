import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo, idTokenResult, customClaims } from '@angular/fire/auth-guard';
import { AuthGuard } from './main/services/auth.guard';

import { NotFoundComponent } from './main/shared/components/not-found/not-found.component';
const redirectUnauthorizedToAuth = () => redirectUnauthorizedTo(['auth']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['dashboard']);
// const superAdminOnly = () => pipe(customClaims, map(claims => claims.superadmin === true));

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: "auth",
        loadChildren: () =>
            import("./main/features/auth/auth.module").then(
                (m) => m.AuthModule
            ),
            canActivate: [AngularFireAuthGuard],
            data: {
                authGuardPipe: redirectLoggedInToDashboard,
            }
    },
    {
        path: "dashboard",
        loadChildren: () =>
            import("./main/features/dashboard/dashboard.module").then(
                (m) => m.DashboardModule
            ),
            canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "settings",
        loadChildren: () =>
            import("./main/settings/settings.module").then(
                (m) => m.SettingsModule
            ),
            canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "effisense",
        loadChildren: () =>
        import("./main/features/effi-sense-data/effi-sense-data.module").then(
            (m) => m.EffiSenseDataModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "shift-master",
        loadChildren: () =>
        import("./main/features/shift-master/shift-master.module").then(
            (m) => m.ShiftMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "department-master",
        loadChildren: () =>
        import("./main/features/department-master/department-master.module").then(
            (m) => m.DepartmentMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "operations-master",
        loadChildren: () =>
        import("./main/features/operations-master/operations-master.module").then(
            (m) => m.OperationsMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "equipment-type-master",
        loadChildren: () =>
        import("./main/features/equipment-type-master/equipment-type-master.module").then(
            (m) => m.EquipmentTypeMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "uom-master",
        loadChildren: () =>
        import("./main/features/uom-master/uom-master.module").then(
            (m) => m.UomMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "factory-master",
        loadChildren: () =>
        import("./main/features/factory-master/factory-master.module").then(
            (m) => m.FactoryMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "plant-master",
        loadChildren: () =>
        import("./main/features/plant-master/plant-master.module").then(
            (m) => m.PlantMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "shopfloor-master",
        loadChildren: () =>
        import("./main/features/shopfloor-master/shopfloor-master.module").then(
            (m) => m.ShopfloorMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "line-master",
        loadChildren: () =>
        import("./main/features/line-master/line-master.module").then(
            (m) => m.LineMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "equipment-master",
        loadChildren: () =>
        import("./main/features/equipment-master/equipment-master.module").then(
            (m) => m.EquipmentMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "routine-master",
        loadChildren: () =>
        import("./main/features/routine-master/routine-master.module").then(
            (m) => m.RoutineMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "asset-master",
        loadChildren: () =>
        import("./main/features/asset-master/asset-master.module").then(
            (m) => m.AssetMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-dashboard",
        loadChildren: () =>
        import("./main/features/ppm/ppm-dashboard/ppm-dashboard.module").then(
            (m) => m.PpmDashboardModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-planned-maintenance-create-work-order",
        loadChildren: () =>
        import("./main/features/ppm/planned-maintenance-create-work-order/planned-maintenance-create-work-order.module").then(
            (m) => m.PlannedMaintenanceCreateWorkOrderModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-planned-maintenance-work-in-progress",
        loadChildren: () =>
        import("./main/features/ppm/planned-maintenence-work-in-progress/planned-maintenence-work-in-progress.module").then(
            (m) => m.PlannedMaintenenceWorkInProgressModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-planned-maintenance-work-order-list",
        loadChildren: () =>
        import("./main/features/ppm/planned-maintenence-work-order-list/planned-maintenence-work-order-list.module").then(
            (m) => m.PlannedMaintenenceWorkOrderListModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-unplanned-maintenance-create-work-order",
        loadChildren: () =>
        import("./main/features/ppm/unplanned-maintenance-create-work-order/unplanned-maintenance-create-work-order.module").then(
            (m) => m.UnplannedMaintenanceCreateWorkOrderModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-unplanned-maintenance-work-in-progress",
        loadChildren: () =>
        import("./main/features/ppm/unplanned-maintenance-work-in-progress/unplanned-maintenance-work-in-progress.module").then(
            (m) => m.UnplannedMaintenanceWorkInProgressModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-unplanned-maintenance-work-order-list",
        loadChildren: () =>
        import("./main/features/ppm/unplanned-maintenance-work-order-list/unplanned-maintenance-work-order-list.module").then(
            (m) => m.UnplannedMaintenanceWorkOrderListModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-routine-master",
        loadChildren: () =>
        import("./main/features/ppm/routine-management-routine-master/routine-management-routine-master.module").then(
            (m) => m.RoutineManagementRoutineMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-checklist-master",
        loadChildren: () =>
        import("./main/features/ppm/routine-management-checklist-master/routine-management-checklist-master.module").then(
            (m) => m.RoutineManagementChecklistMasterModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-mtbf-reports",
        loadChildren: () =>
        import("./main/features/ppm/reports-mtbf/reports-mtbf.module").then(
            (m) => m.ReportsMtbfModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: "ppm-mttr-reports",
        loadChildren: () =>
        import("./main/features/ppm/reports-mttr/reports-mttr.module").then(
            (m) => m.ReportsMttrModule
        ),
        canActivate: [AngularFireAuthGuard, AuthGuard],
            data: {
                authGuardPipe: redirectUnauthorizedToAuth,
            }
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
