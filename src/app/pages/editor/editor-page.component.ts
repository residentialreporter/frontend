import { Component, Inject } from '@angular/core';
import { SocketClientService } from '@residentialreporter/services/socket-client/socket-client.service';

@Component({
    selector: 'app-editor',
    templateUrl: 'editor-page.component.html',
    styleUrls: ['editor-page.component.scss'],
})
export class EditorPageComponent {

    socket: SocketClientService;

    constructor(@Inject(SocketClientService) private socket_service: SocketClientService) {
        this.socket = socket_service;
    }

    pressMe() {
        console.log('I got pressed!');
        this.socket.sendMessage('Foobar!');
    }

}
