import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Region } from '@residentialreporter/models/region';
import { SchemataService } from '../../../services/schemata/schemata.service';

@Component({
    selector: 'app-region-form',
    templateUrl: './region-form.component.html',
    styleUrls: ['./region-form.component.scss']
})
export class RegionFormComponent implements OnChanges, OnDestroy {
    /** The region */
    @Input() region: Region;

    /** Event emitter for a region change */
    @Output() regionChange = new EventEmitter<{ region: Region; valid: boolean }>();

    /** The region form */
    formGroup: FormGroup;
    schema: any;
    form: any;

    /** Subject to trigger unsubscribe */
    private unsubscribe$ = new Subject<void>();

    constructor(private formBuilder: FormBuilder, private schemaservice: SchemataService) {
        schemaservice.schemataUpdate.subscribe(schemata => {
            console.log(schemata)
            this.schema = schemata['region']['schema'];
            this.form = schemata['region']['form'];
        });
        this.buildForm();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.region && changes.region.currentValue) {
            this.formGroup.patchValue(this.region);
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

    private buildForm() {
        this.formGroup = this.formBuilder.group({
            name: [null, Validators.required],
            slug: [null, Validators.required],
            coordinate: [null],
            description: [null],
            active: [true]
        });

        this.formGroup.valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe(value => {
            this.regionChange.emit({
                region: {
                    ...this.region,
                    ...value
                },
                valid: this.formGroup.valid
            });
        });
    }
}
