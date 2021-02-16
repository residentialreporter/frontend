import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

import { Region } from '@residentialreporter/models/region';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'app-regions-table',
    templateUrl: './regions-table.component.html',
    styleUrls: ['./regions-table.component.scss']
})
export class RegionsTableComponent implements OnChanges, OnInit {
    @Input() regions: Region[];
    @Output() delete = new EventEmitter<Region>();
    @Output() edit = new EventEmitter<Region>();

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

    columnsToDisplay = ['name', 'slug', 'active', 'actions'];
    dataSource = new MatTableDataSource();

    constructor() {
    }

    applyFilter(filter: string) {
        this.dataSource.filter = filter.trim().toLowerCase();
    }

    ngOnChanges(simpleChanges: SimpleChanges) {
        if (simpleChanges.regions && simpleChanges.regions.currentValue) {
            this.dataSource.data = this.regions;
        }
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }
}
