import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { TranslateModule } from "@ngx-translate/core";
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import {
    FuseProgressBarModule,
    FuseSidebarModule,
    FuseThemeOptionsModule,
} from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { AuthGuard } from "./main/services";
import { AuthModule } from "./main/auth/auth.module";
const appRoutes: Routes = [
    {
        path: "auth",
        loadChildren: () =>
            import("./main/auth/auth.module").then((m) => m.AuthModule),
    },
    {
        path: "dashboard",
        loadChildren: () =>
            import("./main/dashboard/dashboard.module").then(
                (m) => m.DashboardModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "settings",
        loadChildren: () =>
            import("./main/settings/settings.module").then(
                (m) => m.SettingsModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "factory",
        loadChildren: () =>
            import("./main/factory/factory.module").then(
                (m) => m.FactoryModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "plant",
        loadChildren: () =>
            import("./main/plant/plant.module").then((m) => m.PlantModule),
        canLoad: [AuthGuard],
    },
    {
        path: "shopfloor",
        loadChildren: () =>
            import("./main/shopfloor/shopfloor.module").then(
                (m) => m.ShopfloorModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "line",
        loadChildren: () =>
            import("./main/line/line.module").then((m) => m.LineModule),
        canLoad: [AuthGuard],
    },
    {
        path: "equipment",
        loadChildren: () =>
            import("./main/equipment/equipment.module").then(
                (m) => m.EquipmentModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "routine",
        loadChildren: () =>
            import("./main/routine/routine.module").then(
                (m) => m.RoutineModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "machine",
        loadChildren: () =>
            import("./main/machine/machine.module").then(
                (m) => m.MachineModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "users",
        loadChildren: () =>
            import("./main/users/users.module").then((m) => m.UsersModule),
        canLoad: [AuthGuard],
    },
    {
        path: "role",
        loadChildren: () =>
            import("./main/role/role.module").then((m) => m.RoleModule),
        canLoad: [AuthGuard],
    },
    {
        path: "approval",
        loadChildren: () =>
            import("./main/approval/approval.module").then(
                (m) => m.ApprovalModule
            ),
        canLoad: [AuthGuard],
    },
    {
        path: "**",
        redirectTo: "auth/login",
    },
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AuthModule,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
