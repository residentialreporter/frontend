import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ObjectEditorComponent } from './objecteditor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ObjectEditorComponent', () => {
    let component: ObjectEditorComponent;
    let fixture: ComponentFixture<ObjectEditorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ObjectEditorComponent],
            imports: [
                IonicModule.forRoot(),
                RouterTestingModule,
                MatSnackBarModule,
                NoopAnimationsModule
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(ObjectEditorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
