import { Component, OnInit } from '@angular/core';

import { GridsterConfig, GridsterItem } from 'angular-gridster2';

@Component({
    selector: 'app-grid',
    templateUrl: 'grid-page.component.html',
    styleUrls: ['grid-page.component.scss'],
})
export class GridPageComponent implements OnInit {
    options: GridsterConfig;
    dashboard: Array<GridsterItem>;

    constructor() {
    }

    static itemChange(item, itemComponent) {
    }

    static itemResize(item, itemComponent) {
    }

    ngOnInit() {
        this.options = {
            // itemChangeCallback: this.itemChange,
            // itemResizeCallback: this.itemResize,
        };

        this.dashboard = [
            {cols: 2, rows: 1, y: 0, x: 0},
            {cols: 2, rows: 2, y: 0, x: 2}
        ];
    }

    changedOptions() {
        this.options.api.optionsChanged();
    }

    removeItem(item) {
        this.dashboard.splice(this.dashboard.indexOf(item), 1);
    }

    addItem() {
        // this.dashboard.push();
    }
}
