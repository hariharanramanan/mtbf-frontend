import { Injectable } from "@angular/core";
import * as jwtDecode from "jwt-decode";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    isLoggedIn() {
        if(this.getToken()) {
            return true;
        } else {
            return false;
        }
    }

    getToken() {
        const token = localStorage.getItem('token');
        if(token) {
            return JSON.parse(token);
        }
    }
}
