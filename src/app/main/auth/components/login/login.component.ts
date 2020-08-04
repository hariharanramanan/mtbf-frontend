import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';

import { FuseConfigService } from "@fuse/services/config.service";
import { fuseAnimations } from "@fuse/animations";
import { AuthService } from "../../../services/";
import { LOGIN } from '../../../queries';

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations,
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private apollo: Apollo,
        private authService: AuthService
    ) {
        if(this.authService.isLoggedIn()) {
            this.router.navigate(['/dashboard']);
        }
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true,
                },
                toolbar: {
                    hidden: true,
                },
                footer: {
                    hidden: true,
                },
                sidepanel: {
                    hidden: true,
                },
            },
        };
    }

    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            email: ["", [Validators.required, Validators.email]],
            password: ["", Validators.required],
        });
    }

    login() {
        const { email, password } = this.loginForm.value;

        this.apollo
            .watchQuery({
                query: LOGIN,
                variables: { email, password}
            })
            .valueChanges.pipe(
                map(( { data: { login }}: any ) => {
                    console.log('Inside pipe', login);
                    localStorage.setItem('token', JSON.stringify(login));
                    return login;
                })
            )
            .subscribe(data => {
                console.log('Inside subscribe', data);
                this.router.navigate(['/dashboard']);
            },);
    }
}
