import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { UserService } from './services/user/user.service';
import { SchemataService } from './services/schemata/schemata.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    title: String = 'ResidentialReporter';
    isAuthenticated = false;
    isOffline = false;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private userService: UserService,
        private schemataService: SchemataService,
        private translate: TranslateService
    ) {
        this.initializeApp();

        this.userService.isAuthenticated.subscribe(
            (isAuthenticated: boolean) => this.isAuthenticated = isAuthenticated
        );
        this.userService.isOffline.subscribe(
            (isOffline: boolean) => this.isOffline = isOffline
        );

    }

    initializeApp() {
        // TODO: Grab language from browser and check if it is supported, else
        //  fallback to 'de'?
        this.translate.setDefaultLang('de');
        this.translate.get('title').subscribe(
            value => {
                console.log('i18n:', value);
                this.title = value;
            }
        );
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

        });
    }


    async ngOnInit() {
        this.isAuthenticated = await this.userService.checkAuthenticated();
    }

    logout() {
        this.userService.logout('/');
    }
}
