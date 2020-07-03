import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { EquipmentComponent } from "./components/equipment/equipment.component";

const routes: Route[] = [
    {
        path: "**",
        component: EquipmentComponent,
    },
];

@NgModule({
    declarations: [EquipmentComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class EquipmentModule {}
