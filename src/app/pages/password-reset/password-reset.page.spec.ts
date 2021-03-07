import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PasswordResetPageComponent } from '@residentialreporter/pages/password-reset/password-reset-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';

describe('PasswordResetPageComponent', () => {
    let component: PasswordResetPageComponent;
    let fixture: ComponentFixture<PasswordResetPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PasswordResetPageComponent],
            imports: [
                IonicModule.forRoot(),
                TranslateModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
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

        fixture = TestBed.createComponent(PasswordResetPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
