import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, Route, CanLoad } from "@angular/router";
import { AuthService } from "./auth.service";
import { BehaviorSubject } from "rxjs";
import * as jwtDecode from "jwt-decode";

const tokenKey = "token";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanLoad {
    private userData = new BehaviorSubject<any>({});

    constructor(private router: Router, private authService: AuthService) {}

    canLoad(route: Route): boolean {
        console.log(route.path);
        let canAccess: boolean;
        let url = route.path;
        this.authService.getUserData().subscribe((data) => {
            if (data && data.masters) {
                const masters = data.masters.map((item) => item.mastername);
                if (masters.indexOf(url) !== -1) {
                    canAccess = true;
                    return;
                }
            }
            canAccess = false;
            this.router.navigate(["/auth/login"]);
        });
        return canAccess;
    }
}
