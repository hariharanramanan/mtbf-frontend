import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { SharedModule } from '../shared/shared.module';
import { FuseSharedModule } from "@fuse/shared.module";

import { LoginComponent } from "./components/login/login.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";

const routes: Route[] = [
    {
        path: "login",
        component: LoginComponent,
    },
    {
        path: "forgot-password",
        component: ForgotPasswordComponent,
    },
];

@NgModule({
    declarations: [LoginComponent, ForgotPasswordComponent],
    imports: [
        CommonModule,
        SharedModule,
        FuseSharedModule,
        RouterModule.forChild(routes),
    ],
})
export class AuthModule {}
