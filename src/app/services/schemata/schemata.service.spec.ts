import { TestBed } from '@angular/core/testing';

import { SchemataService } from './schemata.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('UserService', () => {
    let service: SchemataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, MatSnackBarModule]
        });
        service = TestBed.inject(SchemataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
