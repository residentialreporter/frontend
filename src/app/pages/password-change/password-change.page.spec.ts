import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PasswordChangePageComponent } from '@residentialreporter/pages/password-change/password-change-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('PasswordChangePageComponent', () => {
    let component: PasswordChangePageComponent;
    let fixture: ComponentFixture<PasswordChangePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PasswordChangePageComponent],
            imports: [
                IonicModule.forRoot(),
                TranslateModule.forRoot(),
                FormsModule,
                ReactiveFormsModule,
                RouterTestingModule,
                MatSnackBarModule,
                NoopAnimationsModule,
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

        fixture = TestBed.createComponent(PasswordChangePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
