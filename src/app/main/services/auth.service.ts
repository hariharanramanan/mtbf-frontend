import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private userDetails = new BehaviorSubject<any>({});

    constructor(private http: HttpClient) {}

    getAllPosts() {
        return this.http.get("https://jsonplaceholder.typicode.com/posts");
    }

    getUser() {
        return this.userDetails.asObservable();
    }

    setUser(userData) {
        this.userDetails.next(userData);
    }
}
