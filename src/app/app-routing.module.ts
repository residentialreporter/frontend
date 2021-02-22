import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '@residentialreporter/auth-guard.service';

const routes: Routes = [
    // Pages
    {
        path: 'home',
        loadChildren: () => import('@residentialreporter/pages/home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'map',
        loadChildren: () => import('@residentialreporter/pages/map/map.module').then(m => m.MapPageModule),
    },
    {
        path: 'login',
        loadChildren: () => import('@residentialreporter/pages/login/login.module').then(m => m.LoginPageModule),
    },
    {
        path: 'register',
        loadChildren: () => import('@residentialreporter/pages/registration/registration.module').then(m => m.RegistrationPageModule),
    },
    {
        path: 'activation',
        loadChildren: () => import('@residentialreporter/pages/activation/activation.module').then(m => m.ActivationPageModule),
    },
    {
        path: 'password-reset',
        loadChildren: () => import('@residentialreporter/pages/password-reset/password-reset.module').then(m => m.PasswordResetPageModule),
    },
    {
        path: 'password-change',
        loadChildren: () => import('@residentialreporter/pages/password-change/password-change.module').then(m => m.PasswordChangePageModule),
    },
    // Development and debugging
    {
        path: 'editor',
        loadChildren: () => import('@residentialreporter/pages/editor/editor.module').then(m => m.EditorPageModule),
    },
    // Auto-entity views start here
    {
        path: 'regions',
        loadChildren: () => import('@residentialreporter/+regions/regions.module').then(m => m.RegionsModule),
    },
    {
        path: 'locations',
        loadChildren: () => import('@residentialreporter/+locations/locations.module').then(m => m.LocationsModule),
    },
    // Redirects
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
