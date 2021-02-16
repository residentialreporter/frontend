import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { RegionFacade } from '@residentialreporter/facades/region.facade';
import { Region } from '@residentialreporter/models/region';
import { UserService } from '@residentialreporter/services/user/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-regions',
    templateUrl: './regions.component.html',
    styleUrls: ['./regions.component.scss']
})
export class RegionsComponent implements OnInit {
    regions$: Observable<Region[]>;
    user$: UserService;
    private translate: TranslateService


    constructor(
        private router: Router,
        private regionFacade: RegionFacade,
        private user: UserService) {
        this.user$ = user;
    }

    ngOnInit() {
        this.regionFacade.loadAll();
        this.regions$ = this.regionFacade.all$;
    }

    onDelete(region: Region) {
        this.regionFacade.delete(region);
    }

    onEdit(region: Region) {
        this.regionFacade.select(region);
        this.router.navigate(['regions', region.uuid]);
    }
}
