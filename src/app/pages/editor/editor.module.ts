import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EditorPageComponent } from './editor-page.component';

import { EditorPageRoutingModule } from './editor-routing.module';

import { MaterialDesignFrameworkModule } from '@ajsf/material';
import { MatButtonModule } from '@angular/material/button';
import { ObjectEditorComponent } from '@residentialreporter/components/objecteditor/objecteditor.component';
import { CoreModule } from '@residentialreporter/core/core.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        EditorPageRoutingModule,
        MaterialDesignFrameworkModule,
        MatButtonModule,
        CoreModule
    ],
    exports: [],
    declarations: [EditorPageComponent]
})
export class EditorPageModule {
}
