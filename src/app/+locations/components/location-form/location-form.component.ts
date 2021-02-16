import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Location } from '@residentialreporter/models/location';
import { UserService } from '@residentialreporter/services/user/user.service';
import { SchemataService } from '../../../services/schemata/schemata.service';

@Component({
    selector: 'app-location-form',
    templateUrl: './location-form.component.html',
    styleUrls: ['./location-form.component.scss']
})
export class LocationFormComponent implements OnChanges, OnDestroy {
    /** The location */
    @Input() location: Location;

    /** Event emitter for a location change */
    @Output() locationChange = new EventEmitter<{ location: Location; valid: boolean }>();

    user$: UserService;
    /** The location form */
    formGroup: FormGroup;

    schema: any;
    form: any;

    types = ["repossession", "vacant", "defect", "other"];

    /** Subject to trigger unsubscribe */
    private unsubscribe$ = new Subject<void>();

    constructor(private formBuilder: FormBuilder,
                private user: UserService,
                private schemaservice: SchemataService) {
        console.log(schemaservice.schemata);
        this.user$ = user;
        schemaservice.schemataUpdate.subscribe(schemata => {
            console.log(schemata)
            this.schema = schemata['location']['schema'];
            this.form = schemata['location']['form'];
        });
        this.buildForm();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.location && changes.location.currentValue) {
            this.formGroup.patchValue(this.location);
        }
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    selectPlace(event) {
        console.log('[REGION-FORM] Selected Place:', event);

        this.formGroup.get('coordinate').setValue(
            {
                lat: event.coordinates[1].toString(),
                lon: event.coordinates[0].toString()
            });
        this.formGroup.get('name').setValue(event.viewValue);
    }

    updateType(event) {
        console.log("type changed")
    }

    private buildForm() {
        this.formGroup = this.formBuilder.group({
            name: [null, Validators.required],
            type: [null, Validators.required],
            slug: [null],
            coordinate: [null],
            since: [null],
            description: [null],
            active: [false]
        });

        this.formGroup.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
            this.locationChange.emit({
                location: {
                    ...this.location,
                    ...value
                },
                valid: this.formGroup.valid
            });
        });
    }
}
