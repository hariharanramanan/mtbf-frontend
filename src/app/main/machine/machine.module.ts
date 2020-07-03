import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { MachineComponent } from "./components/machine/machine.component";

const routes: Route[] = [
    {
        path: "**",
        component: MachineComponent,
    },
];

@NgModule({
    declarations: [MachineComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MachineModule {}
