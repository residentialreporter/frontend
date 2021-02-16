import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('UserService', () => {
    let service: UserService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [RouterTestingModule, MatSnackBarModule],
            providers: [
            ]
        });
        service = TestBed.inject(UserService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
