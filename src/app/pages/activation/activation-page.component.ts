import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@residentialreporter/services/user/user.service';
import { Observable } from 'rxjs';


@Component({
    selector: 'app-activation-page',
    templateUrl: 'activation-page.component.html',
    styleUrls: ['./activation-page.scss'],
})
export class ActivationPageComponent implements OnInit {

    public addressInvalid: boolean;
    public activated: Observable<boolean>;
    private returnUrl: string;
    activationUuid: Observable<string>;

    constructor(
        private activatedRoute: ActivatedRoute,
        public userService: UserService
    ) {
    }

    async ngOnInit() {
        this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/home';

        this.activatedRoute.params
            .subscribe(params => {
                console.log('Activating UUID:', params.uuid);
                return this.userService.activate(params.uuid);
            });

        // if (await this.userService.checkAuthenticated()) {
        //    await this.router.navigate([this.returnUrl]);
        // }
    }
}
