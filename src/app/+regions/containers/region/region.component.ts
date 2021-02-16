import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';

import { RegionFacade } from '@residentialreporter/facades/region.facade';
import { Region } from '@residentialreporter/models/region';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-region',
    templateUrl: './region.component.html',
    styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {
    private translate: TranslateService;
    region: Observable<Region>;
    valid = false;



    private updatedRegion: Region;

    constructor(private activatedRoute: ActivatedRoute, private regionFacade: RegionFacade) {
    }

    ngOnInit() {
        this.region = this.activatedRoute.paramMap.pipe(
            filter(params => params.has('uuid')),
            map(params => {
                console.log('[REGION] Params:', params);
                const uuid = params.get('uuid');
                console.log('[REGION] UUID:', uuid);
                this.regionFacade.selectByKey(uuid);
                this.hasRegionWithIdInState(uuid)
                    .pipe(first())
                    .subscribe(exists => {
                        if (!exists) {
                            this.regionFacade.load(uuid);
                        }
                    });
            }),
            switchMap(() => this.regionFacade.current$)
        );
    }

    hasRegionWithIdInState(uuid: string): Observable<boolean> {
        return this.regionFacade.ids$.pipe(map((ids: string[]) => ids.indexOf(uuid) > -1));
    }

    onRegionChange(payload: { region: Region; valid: boolean }) {
        this.valid = payload.valid;
        if (this.valid) {
            this.updatedRegion = payload.region;
        }
    }

    onSave() {
        if (!this.valid) {
            return;
        }

        if (this.updatedRegion.uuid == null) {
            this.regionFacade.create(this.updatedRegion);
        } else {
            this.regionFacade.update(this.updatedRegion);
        }
    }
}
