import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private userDetails = new BehaviorSubject<any>({});

    getUser() {
        return this.userDetails.asObservable();
    }

    setUser(userData) {
        this.userDetails.next(userData);
    }
}
