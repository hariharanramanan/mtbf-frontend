import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class RegisterService {
    constructor(private http: HttpClient) {}

    register(registerData) {
        return this.http.post(
            "http://localhost:3000/api/approvals",
            registerData
        );
    }
}
