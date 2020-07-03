import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { ShopfloorComponent } from "./components/shopfloor/shopfloor.component";

const routes: Route[] = [
    {
        path: "**",
        component: ShopfloorComponent,
    },
];

@NgModule({
    declarations: [ShopfloorComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ShopfloorModule {}
