import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as jwtDecode from "jwt-decode";

const tokenKey = "token";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private userData = new BehaviorSubject<any>({});
    private isLoggedIn = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient) {}

    login(formData) {
        return this.http.post("http://localhost:3000/api/auth", formData);
    }

    setTokenToStorage(token) {
        localStorage.setItem(tokenKey, token);
        this.setLoggedInStatus();
    }

    decodeJwt() {
        return jwtDecode(localStorage.getItem(tokenKey));
    }

    setUser(userData) {
        this.userData.next(userData);
    }

    getUserData() {
        return this.userData.asObservable();
    }

    setLoggedInStatus() {
        const isLoggedIn = this.decodeJwt();
        if (isLoggedIn) this.isLoggedIn.next(true);
        else this.isLoggedIn.next(false);
    }

    getLoggedInStatus() {
        return this.isLoggedIn.asObservable();
    }
}
