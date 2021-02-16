import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-registration-component',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
    registrationForm: FormGroup = new FormGroup({
        address: new FormControl(),
        username: new FormControl(),
        password: new FormControl(),
        passwordConfirm: new FormControl(),
    });
    public addressInvalid: boolean;
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
        this.registrationForm = this.fb.group({
            address: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', Validators.required],
            passwordConfirm: ['', Validators.required],
        });

        // if (await this.userService.checkAuthenticated()) {
        //    await this.router.navigate([this.returnUrl]);
        // }
    }

    async onSubmit() {
        this.formSubmitAttempt = false;
        if (this.registrationForm.valid) {
            try {
                const address = this.registrationForm.get('address').value;
                const username = this.registrationForm.get('username').value;
                const password = this.registrationForm.get('password').value;
                const passwordConfirm = this.registrationForm.get('passwordConfirm').value;

                await this.userService.register(address, username, password, passwordConfirm);
            } catch (err) {
                this.addressInvalid = true;
            }
        } else {
            this.formSubmitAttempt = true;
        }
    }
}

