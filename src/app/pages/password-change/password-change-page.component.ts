import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@residentialreporter/services/user/user.service';

import {AbstractControl} from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        let password = AC.get('password').value;
        let passwordConfirm = AC.get('passwordConfirm').value;

        if(password != passwordConfirm) {
            console.log('false');
            AC.get('passwordConfirm').setErrors( {MatchPassword: true} )
        } else {
            console.log('true');
            return null
        }
    }
}

@Component({
    selector: 'app-password-change-page',
    templateUrl: 'password-change-page.component.html',
    styleUrls: ['./password-change-page.scss'],
})
export class PasswordChangePageComponent implements OnInit{
    passwordChangeForm: FormGroup = new FormGroup({
        password: new FormControl(),
        passwordConfirm: new FormControl(),
    });
    public passwordInvalid: boolean;
    private formSubmitAttempt: boolean;
    private returnUrl: string;

    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) {
    }

    async ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/home';
        this.passwordChangeForm = this.fb.group({
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required],
        }, {
            validator: PasswordValidation.MatchPassword
        });

        // if (await this.userService.checkAuthenticated()) {
        //    await this.router.navigate([this.returnUrl]);
        // }
    }

    async onSubmit() {
        this.formSubmitAttempt = false;
        if (this.passwordChangeForm.valid) {
            try {
                const password = this.passwordChangeForm.get('password').value;
                await this.userService.changePassword(password);
            } catch (err) {
                this.passwordInvalid = true;
            }
        } else {
            this.formSubmitAttempt = true;
        }
    }
}
