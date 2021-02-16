import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { GridPageComponent } from './grid-page.component';

import { GridPageRoutingModule } from './grid-routing.module';

import { GridsterModule } from 'angular-gridster2';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GridPageRoutingModule,
        GridsterModule
    ],
    declarations: [GridPageComponent]
})
export class GridPageModule {
}
