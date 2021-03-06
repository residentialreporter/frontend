import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@residentialreporter/services/user/user.service';


@Component({
    selector: 'app-password-reset-page',
    templateUrl: 'password-reset-page.component.html',
    styleUrls: ['./password-reset-page.scss'],
})
export class PasswordResetPageComponent implements OnInit{
    resetForm: FormGroup = new FormGroup({
        address: new FormControl(),
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
        this.resetForm = this.fb.group({
            address: ['', Validators.required],
        });

        // if (await this.userService.checkAuthenticated()) {
        //    await this.router.navigate([this.returnUrl]);
        // }
    }

    async onSubmit() {
        this.formSubmitAttempt = false;
        if (this.resetForm.valid) {
            try {
                const address = this.resetForm.get('address').value;
                await this.userService.resetPassword(address);
            } catch (err) {
                this.addressInvalid = true;
            }
        } else {
            this.formSubmitAttempt = true;
        }
    }
}
