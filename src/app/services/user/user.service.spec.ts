import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('UserService', () => {
    let service: UserService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                MatSnackBarModule,
                NoopAnimationsModule
            ],
            providers: [
            ]
        });
        service = TestBed.inject(UserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
