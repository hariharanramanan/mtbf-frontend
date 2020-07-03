import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { RoutineComponent } from "./components/routine/routine.component";

const routes: Route[] = [
    {
        path: "**",
        component: RoutineComponent,
    },
];

@NgModule({
    declarations: [RoutineComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class RoutineModule {}
