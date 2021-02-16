import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';

import { MaterialModule } from './../material.module';
import { RegionFormComponent } from './components/region-form/region-form.component';
import { RegionsTableComponent } from './components/regions-table/regions-table.component';
import { RegionComponent } from './containers/region/region.component';
import { RegionsComponent } from './containers/regions/regions.component';
import { routes } from './regions.routing';
import { CoreModule } from '@residentialreporter/core/core.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FlexLayoutModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        NgrxAutoEntityModule.forFeature(),
        CoreModule,
        TranslateModule
    ],
    declarations: [RegionComponent, RegionFormComponent, RegionsComponent, RegionsTableComponent]
})
export class RegionsModule {
}
