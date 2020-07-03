import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Route } from "@angular/router";

import { LineComponent } from "./components/line/line.component";

const routes: Route[] = [
    {
        path: "**",
        component: LineComponent,
    },
];

@NgModule({
    declarations: [LineComponent],
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LineModule {}
