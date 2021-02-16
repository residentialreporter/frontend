import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '@residentialreporter/services/user/user.service';

@Component({
    selector: 'app-registration-page',
    templateUrl: 'registration-page.component.html',
})
export class RegistrationPageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}
