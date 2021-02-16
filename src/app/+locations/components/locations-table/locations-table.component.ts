import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { Location } from '@residentialreporter/models/location';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-locations-table',
    templateUrl: './locations-table.component.html',
    styleUrls: ['./locations-table.component.scss']
})
export class LocationsTableComponent implements OnChanges, OnInit {
    @Input() locations: Location[];
    @Output() delete = new EventEmitter<Location>();
    @Output() edit = new EventEmitter<Location>();

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

    columnsToDisplay = ['name', 'isActive', 'actions'];
    dataSource = new MatTableDataSource();

    constructor() {
    }

    applyFilter(filter: string) {
        this.dataSource.filter = filter.trim().toLowerCase();
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges.locations && simpleChanges.locations.currentValue) {
            this.dataSource.data = this.locations;
        }
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
