import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class ApprovalService {
    constructor(private http: HttpClient) {}

    approvals() {
        return this.http.get("http://localhost:3000/api/approvals");
    }

    approve(id) {
        return this.http.put(`http://localhost:3000/api/approvals/${id}`, {});
    }
}
