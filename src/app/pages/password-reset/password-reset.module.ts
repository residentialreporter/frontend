import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PasswordResetPageComponent } from './password-reset-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PasswordResetPageRoutingModule } from './password-reset-routing.module';
import { MatInputModule } from '@angular/material/input';
import { PasswordResetComponent } from '@residentialreporter/components/password-reset/password-reset.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        PasswordResetPageRoutingModule,
        TranslateModule
    ],
    declarations: [PasswordResetPageComponent, PasswordResetComponent]
})
export class PasswordResetPageModule {
}
