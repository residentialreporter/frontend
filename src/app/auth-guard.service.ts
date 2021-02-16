import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './services/user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

    constructor(public userService: UserService, public router: Router) {
    }

    async canActivate() {
        if (!await this.userService.checkAuthenticated()) {
            await this.router.navigate(['login']);
            return false;
        }
        return true;
    }
}

