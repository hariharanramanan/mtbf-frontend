import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { UsersComponent } from "./components/users/users.component";

const routes: Route[] = [
    {
        path: "**",
        component: UsersComponent,
    },
];

@NgModule({
    declarations: [UsersComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
