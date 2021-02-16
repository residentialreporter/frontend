import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapPageComponent } from './map-page.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { StoreModule } from '@ngrx/store';

describe('MapPageComponent', () => {
    let component: MapPageComponent;
    let fixture: ComponentFixture<MapPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MapPageComponent],
            imports: [IonicModule.forRoot(),
                StoreModule.forRoot({} ),
            ],
            providers: [
                {
                    provide: ActivatedRoute,
                    useValue: {
                        params: of({id: 'test'})
                    }
                }
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MapPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
