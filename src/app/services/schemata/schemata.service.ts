import { Injectable } from '@angular/core';

import { SocketClientService } from '../socket-client/socket-client.service';
import { UserService } from '../user/user.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SchemataService {
    socket: SocketClientService;
    user: UserService;
    public schemata: any;
    schemataUpdate: BehaviorSubject<object>;

    constructor(
        private Socket: SocketClientService,
        private User: UserService) {
        console.log('[SCHEMATA] Constructing');
        this.socket = Socket;
        this.user = User;
        this.schemataUpdate = new BehaviorSubject({});

        this.socket.subscribe('isomer.events.schemamanager').subscribe(message => {
            console.log('[SCHEMATA] Received schemata:', message);
            this.schemata = message.data;
            this.schemataUpdate.next(this.schemata);
        });

        this.user.isAuthenticated.subscribe(authenticated => {
            if (authenticated) {
                const request = {
                    component: 'isomer.events.schemamanager',
                    action: 'all'
                };
                this.socket.sendMessage(request);
            }
        });


    }
}
