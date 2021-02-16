import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';
import { EffectsModule } from '@ngrx/effects';
import { RouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';

import { appMetaReducers, appReducer } from './app.state';
import { CustomRouterStateSerializer } from './shared/utils';
import { AppEffects } from '@residentialreporter/state/app.effects';
import { RouterEffects } from '@residentialreporter/state/router/router.effects';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forRoot(appReducer, {
            metaReducers: appMetaReducers,
        }),
        EffectsModule.forRoot([AppEffects, RouterEffects]),
        StoreDevtoolsModule.instrument({logOnly: environment.production}),
        StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
        NgrxAutoEntityModule.forRoot()
    ]
})
export class StateModule {
    constructor(@Optional() @SkipSelf() parentModule: StateModule) {
        if (parentModule) {
            throw new Error('StateModule is already loaded. Import it in the AppModule only');
        }
    }

    static forRoot(): ModuleWithProviders<NgrxAutoEntityModule> {
        return {
            ngModule: StateModule,
            providers: [{provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}]
        };
    }
}
