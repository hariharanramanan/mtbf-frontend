import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from './main/services';

import { NotFoundComponent } from './main/shared/components/not-found/not-found.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: "auth",
        loadChildren: () =>
            import("./main/features/auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "dashboard",
        loadChildren: () =>
            import("./main/features/dashboard/dashboard.module").then(
                (m) => m.DashboardModule
            )
    },
    {
        path: "settings",
        loadChildren: () =>
            import("./main/settings/settings.module").then(
                (m) => m.SettingsModule
            )
    },
    {
        path: "effisense",
        loadChildren: () =>
        import("./main/features/effi-sense-data/effi-sense-data.module").then(
            (m) => m.EffiSenseDataModule
        ),
    },
    {
        path: "shift-master",
        loadChildren: () =>
        import("./main/features/shift-master/shift-master.module").then(
            (m) => m.ShiftMasterModule
        ),
    },
    {
        path: "department-master",
        loadChildren: () =>
        import("./main/features/department-master/department-master.module").then(
            (m) => m.DepartmentMasterModule
        ),
    },
    {
        path: "operations-master",
        loadChildren: () =>
        import("./main/features/operations-master/operations-master.module").then(
            (m) => m.OperationsMasterModule
        ),
    },
    {
        path: "equipment-type-master",
        loadChildren: () =>
        import("./main/features/equipment-type-master/equipment-type-master.module").then(
            (m) => m.EquipmentTypeMasterModule
        ),
    },
    {
        path: "uom-master",
        loadChildren: () =>
        import("./main/features/uom-master/uom-master.module").then(
            (m) => m.UomMasterModule
        ),
    },
    {
        path: "factory-master",
        loadChildren: () =>
        import("./main/features/factory-master/factory-master.module").then(
            (m) => m.FactoryMasterModule
        ),
    },
    {
        path: "plant-master",
        loadChildren: () =>
        import("./main/features/plant-master/plant-master.module").then(
            (m) => m.PlantMasterModule
        ),
    },
    {
        path: "shopfloor-master",
        loadChildren: () =>
        import("./main/features/shopfloor-master/shopfloor-master.module").then(
            (m) => m.ShopfloorMasterModule
        ),
    },
    {
        path: "line-master",
        loadChildren: () =>
        import("./main/features/line-master/line-master.module").then(
            (m) => m.LineMasterModule
        ),
    },
    {
        path: "equipment-master",
        loadChildren: () =>
        import("./main/features/equipment-master/equipment-master.module").then(
            (m) => m.EquipmentMasterModule
        ),
    },
    {
        path: "routine-master",
        loadChildren: () =>
        import("./main/features/routine-master/routine-master.module").then(
            (m) => m.RoutineMasterModule
        ),
    },
    {
        path: "asset-master",
        loadChildren: () =>
        import("./main/features/asset-master/asset-master.module").then(
            (m) => m.AssetMasterModule
        ),
    },
    {
        path: "ppm-dashboard",
        loadChildren: () =>
        import("./main/features/ppm/ppm-dashboard/ppm-dashboard.module").then(
            (m) => m.PpmDashboardModule
        ),
    },
    {
        path: "ppm-planned-maintenance-create-work-order",
        loadChildren: () =>
        import("./main/features/ppm/planned-maintenance-create-work-order/planned-maintenance-create-work-order.module").then(
            (m) => m.PlannedMaintenanceCreateWorkOrderModule
        ),
    },
    {
        path: "ppm-planned-maintenance-work-in-progress",
        loadChildren: () =>
        import("./main/features/ppm/planned-maintenence-work-in-progress/planned-maintenence-work-in-progress.module").then(
            (m) => m.PlannedMaintenenceWorkInProgressModule
        ),
    },
    {
        path: "ppm-planned-maintenance-work-order-list",
        loadChildren: () =>
        import("./main/features/ppm/planned-maintenence-work-order-list/planned-maintenence-work-order-list.module").then(
            (m) => m.PlannedMaintenenceWorkOrderListModule
        ),
    },
    {
        path: "ppm-unplanned-maintenance-create-work-order",
        loadChildren: () =>
        import("./main/features/ppm/unplanned-maintenance-create-work-order/unplanned-maintenance-create-work-order.module").then(
            (m) => m.UnplannedMaintenanceCreateWorkOrderModule
        ),
    },
    {
        path: "ppm-unplanned-maintenance-work-in-progress",
        loadChildren: () =>
        import("./main/features/ppm/unplanned-maintenance-work-in-progress/unplanned-maintenance-work-in-progress.module").then(
            (m) => m.UnplannedMaintenanceWorkInProgressModule
        ),
    },
    {
        path: "ppm-unplanned-maintenance-work-order-list",
        loadChildren: () =>
        import("./main/features/ppm/unplanned-maintenance-work-order-list/unplanned-maintenance-work-order-list.module").then(
            (m) => m.UnplannedMaintenanceWorkOrderListModule
        ),
    },
    {
        path: "ppm-routine-master",
        loadChildren: () =>
        import("./main/features/ppm/routine-management-routine-master/routine-management-routine-master.module").then(
            (m) => m.RoutineManagementRoutineMasterModule
        ),
    },
    {
        path: "ppm-checklist-master",
        loadChildren: () =>
        import("./main/features/ppm/routine-management-checklist-master/routine-management-checklist-master.module").then(
            (m) => m.RoutineManagementChecklistMasterModule
        ),
    },
    {
        path: "ppm-mtbf-reports",
        loadChildren: () =>
        import("./main/features/ppm/reports-mtbf/reports-mtbf.module").then(
            (m) => m.ReportsMtbfModule
        ),
    },
    {
        path: "ppm-mttr-reports",
        loadChildren: () =>
        import("./main/features/ppm/reports-mttr/reports-mttr.module").then(
            (m) => m.ReportsMttrModule
        ),
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
