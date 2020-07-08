import { Component, OnInit } from "@angular/core";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { ApprovalService } from "../../../services";
@Component({
    selector: "app-approval",
    templateUrl: "./approval.component.html",
    styleUrls: ["./approval.component.scss"],
})
export class ApprovalComponent implements OnInit {
    rows = [];
    ColumnMode = ColumnMode;

    constructor(private approvalService: ApprovalService) {}

    ngOnInit(): void {
        this.getApprovals();
    }

    private getApprovals() {
        this.approvalService.approvals().subscribe((data: any) => {
            console.log(data);
            this.rows = data.approvals;
        });
    }

    approve(id) {
        this.approvalService.approve(id).subscribe((data: any) => {
            console.log(data);
        });
    }
}
