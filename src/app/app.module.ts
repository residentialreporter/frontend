import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@residentialreporter/material.module';

import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { SocketClientService } from './services/socket-client/socket-client.service';
import { UserService } from './services/user/user.service';
import { EntityService } from '@residentialreporter/services/entity.service';

import { Location } from '@residentialreporter/models/location';
import { Region } from '@residentialreporter/models/region';
import { StateModule } from '@residentialreporter/state/state.module';

import { environment } from '../environments/environment';
import { CoreModule } from '@residentialreporter/core/core.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

import {MissingTranslationHandler, MissingTranslationHandlerParams} from '@ngx-translate/core';
import { MatTooltipModule } from '@angular/material/tooltip';

export class MyMissingTranslationHandler implements MissingTranslationHandler {
    handle(params: MissingTranslationHandlerParams) {
        console.log('[TRANSLATE] Params:', params);
        return '[[' + params.key + ']]';
    }
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    entryComponents: [],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        HttpClientModule,
        TranslateModule.forRoot({
            missingTranslationHandler: {
                provide: MissingTranslationHandler,
                useClass: MyMissingTranslationHandler
            },
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        BrowserAnimationsModule,
        MaterialModule,
        MaterialDesignFrameworkModule,
        IonicModule.forRoot(),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        StateModule.forRoot(),
        NgrxAutoEntityModule.forRoot(),
        CoreModule,
        MatTooltipModule,
    ],
    exports: [],
    providers: [
        SocketClientService,
        UserService,
        StatusBar,
        SplashScreen,
        TranslateModule,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: Location, useClass: EntityService},
        {provide: Region, useClass: EntityService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
