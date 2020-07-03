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
    },
    {
        path: "settings",
        loadChildren: () =>
            import("./main/settings/settings.module").then(
                (m) => m.SettingsModule
            ),
    },
    {
        path: "factory",
        loadChildren: () =>
            import("./main/factory/factory.module").then(
                (m) => m.FactoryModule
            ),
    },
    {
        path: "plant",
        loadChildren: () =>
            import("./main/plant/plant.module").then((m) => m.PlantModule),
    },
    {
        path: "shopfloor",
        loadChildren: () =>
            import("./main/shopfloor/shopfloor.module").then(
                (m) => m.ShopfloorModule
            ),
    },
    {
        path: "line",
        loadChildren: () =>
            import("./main/line/line.module").then((m) => m.LineModule),
    },
    {
        path: "equipment",
        loadChildren: () =>
            import("./main/equipment/equipment.module").then(
                (m) => m.EquipmentModule
            ),
    },
    {
        path: "routine",
        loadChildren: () =>
            import("./main/routine/routine.module").then(
                (m) => m.RoutineModule
            ),
    },
    {
        path: "machine",
        loadChildren: () =>
            import("./main/machine/machine.module").then(
                (m) => m.MachineModule
            ),
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
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
