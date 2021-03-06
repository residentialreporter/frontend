import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivationPageComponent } from '@residentialreporter/pages/activation/activation-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ActivationPageComponent', () => {
    let component: ActivationPageComponent;
    let fixture: ComponentFixture<ActivationPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ActivationPageComponent],
            imports: [
                IonicModule.forRoot(),
                TranslateModule.forRoot(),
                RouterTestingModule,
                MatSnackBarModule,
                NoopAnimationsModule
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                            queryParams: {
                                returnUrl: 'foo',
                            },
                        },
                    },
                },
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ActivationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
