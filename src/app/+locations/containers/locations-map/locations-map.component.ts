import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { LocationFacade } from '@residentialreporter/facades/location.facade';
import { Location } from '@residentialreporter/models/location';
import { UserService } from '@residentialreporter/services/user/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-locations-map',
    templateUrl: './locations-map.component.html',
    styleUrls: ['./locations-map.component.scss']
})
export class LocationsMapComponent implements OnInit {
    locations$: Observable<Location[]>;
    user$: UserService;
    private translate: TranslateService

    constructor(
        private router: Router,
        private locationFacade: LocationFacade,
        private user: UserService
    ) {
        this.user$ = user;
    }

    ngOnInit() {
        this.locationFacade.loadAll();
        this.locations$ = this.locationFacade.all$;
    }

    onDelete(location: Location) {
        this.locationFacade.delete(location);
    }

    onEdit(location: Location) {
        this.locationFacade.select(location);
        this.router.navigate(['locations', location.uuid]);
    }
}
