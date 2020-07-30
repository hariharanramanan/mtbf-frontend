import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    canActivate(route: ActivatedRouteSnapshot) {
        console.log(route.url);
        if(this.authService.isLoggedIn()) {
            return true;
        }
        this.router.navigate(['/dashboard']);
        return false;
    }
}
