import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";

@Component({
    selector: "app-factory",
    templateUrl: "./factory.component.html",
    styleUrls: ["./factory.component.scss"],
})
export class FactoryComponent implements OnInit {
    loadingIndicator: boolean;
    reorderable: boolean;
    rows = [
        {
            id: "1",
            factoryName: "Ashok Leyland",
            factoryAdmin: "John",
            email: "john@ashokleyland.com",
            plants: 5,
            shopfloors: 20,
            lines: 300,
            machines: 10000,
            isPremium: "Yes",
        },
        {
            id: "2",
            factoryName: "L&T",
            factoryAdmin: "Mark",
            email: "mark@lt.com",
            plants: 0,
            shopfloors: 0,
            lines: 0,
            machines: 3,
            isPremium: "No",
        },
        {
            id: "3",
            factoryName: "MLP",
            factoryAdmin: "Ricky",
            email: "ricky@mlp.com",
            plants: 9,
            shopfloors: 189,
            lines: 1234,
            machines: 72455,
            isPremium: "Yes",
        },
        {
            id: "4",
            factoryName: "GMS",
            factoryAdmin: "Daniel",
            email: "daniel@mlp.com",
            plants: 5,
            shopfloors: 789,
            lines: 98765,
            machines: 164532,
            isPremium: "Yes",
        },
        {
            id: "5",
            factoryName: "Ashok Leyland",
            factoryAdmin: "John",
            email: "john@ashokleyland.com",
            plants: 5,
            shopfloors: 20,
            lines: 300,
            machines: 10000,
            isPremium: "Yes",
        },
        {
            id: "6",
            factoryName: "L&T",
            factoryAdmin: "Mark",
            email: "mark@lt.com",
            plants: 0,
            shopfloors: 0,
            lines: 0,
            machines: 3,
            isPremium: "No",
        },
        {
            id: "7",
            factoryName: "MLP",
            factoryAdmin: "Ricky",
            email: "ricky@mlp.com",
            plants: 9,
            shopfloors: 189,
            lines: 1234,
            machines: 72455,
            isPremium: "Yes",
        },
        {
            id: "8",
            factoryName: "GMS",
            factoryAdmin: "Daniel",
            email: "daniel@mlp.com",
            plants: 5,
            shopfloors: 789,
            lines: 98765,
            machines: 164532,
            isPremium: "Yes",
        },
    ];

    ColumnMode = ColumnMode;

    constructor() {
        this.loadingIndicator = true;
        this.reorderable = true;
    }

    ngOnInit(): void {}

    openBottomSheet(value) {
        console.log(value);
    }
}
