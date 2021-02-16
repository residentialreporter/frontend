import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SocketClientService } from '../socket-client/socket-client.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocketClientState } from '@residentialreporter/services/socket-client/socket-client-state';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    public isAuthenticated = new BehaviorSubject<boolean>(false);
    public isOffline = new BehaviorSubject<boolean>(false);
    private socket: SocketClientService;
    private authenticated = false;
    roles: String[] = [];

    constructor(
        private Socket: SocketClientService,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {
        console.log('[USER] Constructing');
        this.socket = Socket;

        this.selectLanguage("de");

        this.socket.subscribe('auth').subscribe(msg => {
            console.log('[USER] Service got some message:', msg);
            if (msg.action === 'login') {
                console.log('[USER] Logged in');
                this.authenticated = true;
                this.roles = msg.data.roles;
                this.isAuthenticated.next(true);
            } else if (msg.action === 'fail') {
                console.log('[USER] Could not log in');
                const snackBarRef = this._snackBar.open('Login fehlgeschlagen. Bitte prüfe Deine Zugangsdaten.', 'Passwort zurücksetzen',{
                    duration: 5000,
                    horizontalPosition: 'start',
                    verticalPosition: 'bottom'
                });
                snackBarRef.onAction().subscribe(() => {
                    console.log('Password reset is being requested');
                    this.router.navigate(['/password-reset']);
                });
            }
        });

        this.socket.state.subscribe(
            state => {
                this.isOffline.next(state === SocketClientState.OFFLINE);
            }
        )

    }

    selectLanguage(language) {
        const request = {
            component: "isomer.ui.clientmanager.languages",
            action: "selectlanguage",
            data: "de"
        }

        this.socket.sendMessage(request);
    }

    async checkAuthenticated() {
        return this.authenticated;
    }

    async login(username: string, password: string) {
        const authpacket = {
            'component': 'auth', 'action': 'login',
            'data': {
                'username': username,
                'password': password
            }
        };

        this.socket.sendMessage(authpacket);

        this.isAuthenticated.subscribe(status => {
            if (status) {
                console.log('Logged in, switching to home');
                this.router.navigate(['home']);
            } else {
                console.log('Log in status update negative.');
            }
        });

    }

    async logout(redirect: string) {
        try {
            this.socket.sendMessage({
                'component': 'auth',
                'action': 'logout',
            });
            this.roles = [];
            this.isAuthenticated.next(false);
            await this.router.navigate([redirect]);
        } catch (err) {
            console.error(err);
        }
    }

    isUser() {
        return this.roles.indexOf('user') !== -1;
    }

    isModerator() {
        return this.roles.indexOf('moderator') !== -1;
    }

    isAdmin() {
        return this.roles.indexOf('admin') !== -1;
    }


    reset_password(address: string) {
        this._snackBar.open('Baustelle - dieser Vorgang wird noch entwickelt..', '',{
            duration: 5000,
            horizontalPosition: 'start',
            verticalPosition: 'bottom'
        });
    }

    register(address: string, username: string, password: string, passwordConfirm: string) {
        this._snackBar.open('Baustelle - dieser Vorgang wird noch entwickelt..', '',{
            duration: 5000,
            horizontalPosition: 'start',
            verticalPosition: 'bottom'
        });
    }
}
