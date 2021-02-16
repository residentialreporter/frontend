import { Injectable, OnDestroy } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { SocketClientState } from './socket-client-state';
import { environment } from '../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

export class SocketMessage {
    public component: string;
    public action: string;
    public data: object;
}

@Injectable({
    providedIn: 'root'
})
export class SocketClientService implements OnDestroy {
    public socket: WebSocketSubject<any>;
    public state: BehaviorSubject<SocketClientState>;
    private connected = false;
    private hostname: string = window.location.hostname;
    private port: string = window.location.port;
    private requestId = 0;
    private protocol: string;
    private url: string;
    private observers: Object = {};
    private requests: Object = {};


    constructor(private _snackBar: MatSnackBar) {
        this.url = environment.API_URL;

        console.log('[SOCKET] Websocket url', this.url);
        this.socket = webSocket(this.url);

        this.state = new BehaviorSubject(SocketClientState.ATTEMPTING)

        this.socket.asObservable().subscribe(
            message => {
                console.log('[SOCKET] Data:', message);
                this.connected = true;

                if (Object.keys(this.observers).indexOf(message.component) >= 0) {
                    console.log('[SOCKET] Observed component sends something');
                    const observer = this.observers[message.component];
                    console.log('[SOCKET] Handing over to observer:', observer);
                    observer.next(message);
                } else if (message.data.hasOwnProperty('req') &&
                    this.requests.hasOwnProperty(message.data.req)) {
                    console.log('[SOCKET] Request returned');
                    if (message.action === 'search') {
                        console.log('[SOCKET] Search results:', message.data.list);
                        this.requests[message.data.req].next(message.data.list);
                    } else if (message.action === 'delete') {
                        this.requests[message.data.req].next({});
                    } else if (message.action === 'put') {
                        console.log(message.data.object);
                        this.requests[message.data.req].next(message.data.object);
                    } else {
                        this.requests[message.data.req].next(message);
                    }
                } else {
                    console.warn('[SOCKET] No handler for message registered:', message);
                }
            },
            err => {
                console.error('[SOCKET] Error:', err);
                const snackBarRef = this._snackBar.open('Das Backend mit den Daten kann nicht erreicht werden.',
                    'Nochmal versuchen (WiP)',
                    {
                        duration: 5000,
                        horizontalPosition: 'start',
                        verticalPosition: 'bottom'
                    });
                this.state.next(SocketClientState.OFFLINE);
            });
    }

    constructSocketUrl() {
        this.hostname = window.location.hostname;
        this.port = window.location.port;

        // TODO: Remove and make configurable
        this.protocol = 'ws';
        this.port = '8057';

        if ((this.protocol === 'wss' && this.port !== '443') || (this.protocol === 'ws' && this.port !== '80')) {
            this.hostname += ':' + this.port;
        }

        this.url = this.protocol + '://' + this.hostname;

        this.url += '/websocket';
    }

    getNextRequestId() {
        this.requestId++;
        return this.requestId;
    }

    operate(action, data): Observable<any> {
        const request = new Subject<any>();
        const requestId = this.getNextRequestId();

        console.log(action, data, this.requests, requestId);

        this.requests[requestId] = request;

        data.req = requestId;

        const packet: any = {
            component: 'isomer.events.objectmanager',
            action: action,
            data: data
        };

        this.sendMessage(packet);

        return request.asObservable();
    }

    get(schema, uuid): Observable<any> {
        const data = {
            schema: schema,
            uuid: uuid
        };

        return this.operate('get', data);

    }

    put(schema, thing): Observable<any> {
        const data = {
            schema: schema,
            obj: thing
        };

        return this.operate('put', data);
    }

    post(schema, thing): Observable<any> {
        const data = {
            schema: schema,
            obj: thing
        };

        // TODO: Clearly define CRUD operations in @isomeric/isomer
        //  ui/objectmanager/crud.py
        return this.operate('put', data);
    }

    delete(schema, uuid): Observable<any> {
        const data = {
            schema: schema,
            uuid: uuid
        };

        return this.operate('delete', data);
    }

    search(schema, filter): Observable<any> {
        const data = {
            schema: schema,
            search: filter,
            fields: '*'
        };

        return this.operate('search', data);
    }

    subscribe(component) {
        console.log('Subscribing to:', component);
        const subject = new Subject<any>();
        this.observers[component] = subject;
        return subject;
    }

    sendMessage(message) {
        console.log('Socket sending!', message);
        this.socket.next(message);
    }

    ngOnDestroy() {
        console.log('Destroying socket service');
    }
}
