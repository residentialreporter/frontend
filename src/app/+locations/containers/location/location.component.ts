import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';

import { LocationFacade } from '@residentialreporter/facades/location.facade';
import { Location } from '@residentialreporter/models/location';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '@residentialreporter/services/user/user.service';

@Component({
    selector: 'app-location',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
    private translate: TranslateService;
    public updatedLocation: Location;
    location: Observable<Location>;
    publishLabel = "Publish";
    valid = false;


    constructor(
        private activatedRoute: ActivatedRoute,
        private locationFacade: LocationFacade,
        public userService: UserService) {
    }

    ngOnInit() {
        this.location = this.activatedRoute.paramMap.pipe(
            filter(params => params.has('id')),
            map(params => +params.get('id')),
            tap(id => {
                this.locationFacade.selectByKey(id);
                this.hasLocationWithIdInState(id)
                    .pipe(first())
                    .subscribe(exists => {
                        if (!exists) {
                            this.locationFacade.load(id);
                        }
                    });
            }),
            switchMap(() => this.locationFacade.current$)
        );
    }

    hasLocationWithIdInState(id: number): Observable<boolean> {
        return this.locationFacade.ids$.pipe(map((ids: number[]) => ids.indexOf(id) > -1));
    }

    updateModerationButton() {
        this.publishLabel = this.updatedLocation.active ? "Withdraw" : "Publish";
    }

    onLocationChange(payload: { location: Location; valid: boolean }) {
        this.valid = payload.valid;
        if (this.valid) {
            this.updatedLocation = payload.location;
            this.updateModerationButton();
        }
    }

    onPublish() {
        this.updatedLocation.active = !this.updatedLocation.active;
        this.onSave();
    }

    onSave() {
        if (!this.valid) {
            return;
        }

        if (this.updatedLocation.uuid == null) {
            this.locationFacade.create(this.updatedLocation);
        } else {
            this.locationFacade.update(this.updatedLocation);
        }

        this.updateModerationButton();
    }
}
