import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditorPageComponent } from './editor-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('EditorPageComponent', () => {
    let component: EditorPageComponent;
    let fixture: ComponentFixture<EditorPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [EditorPageComponent],
            imports: [IonicModule.forRoot(), MatSnackBarModule]
        }).compileComponents();

        fixture = TestBed.createComponent(EditorPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
