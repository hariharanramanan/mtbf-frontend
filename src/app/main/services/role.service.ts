import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class RoleService {
    constructor(private http: HttpClient) {}

    addRole(role) {
        return this.http.post("http://localhost:3000/api/roles", role);
    }

    getRoles() {
        return this.http.get("http://localhost:3000/api/roles");
    }
}
