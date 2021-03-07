import { TestBed } from '@angular/core/testing';

import { AuthGuardService } from './auth-guard.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthGuardService', () => {
    let service: AuthGuardService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatSnackBarModule,
                NoopAnimationsModule
            ]
        });
        service = TestBed.inject(AuthGuardService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
