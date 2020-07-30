import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

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
        path: "**",
        redirectTo: "auth/login",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
