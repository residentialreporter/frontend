import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivationPageComponent } from './activation-page.component';

const routes: Routes = [
    {
        path: ':uuid',
        component: ActivationPageComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ActivationPageRoutingModule {
}
