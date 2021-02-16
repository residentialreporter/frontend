import { Component, Inject, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
    selector: 'app-object-editor',
    templateUrl: './objecteditor.component.html',
    styleUrls: ['./objecteditor.component.scss'],
})
export class ObjectEditorComponent implements OnInit {

    @Input() uuid: string;
    @Input() schema: string;

    user: UserService;
    editor_schema: object;

    constructor(@Inject(UserService) private user_service: UserService) {
        console.log('HELLO OE-VIEWER!');
        this.user = user_service;
        this.editor_schema = {
            'schema': {
                'id': '#region',
                'type': 'object',
                'name': 'region',
                'properties': {
                    'name': {
                        'type': 'string',
                        'description': 'Name of region'
                    },
                    'owner': {
                        'pattern': '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$',
                        'type': 'string',
                        'title': 'Unique Owner ID',
                        'description': 'Select an object'
                    },
                    'color': {
                        'type': 'string',
                        'format': 'colorpicker'
                    },
                    'uuid': {
                        'pattern': '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$',
                        'type': 'string',
                        'title': 'Unique region ID',
                        'description': 'Select an object',
                        'x-schema-form': {
                            'condition': 'false'
                        }
                    },
                    'title': {
                        'type': 'string'
                    },
                    'description': {
                        'type': 'string'
                    },
                    'zoom': {
                        'type': 'integer',
                        'max': 16,
                        'min': 5
                    },
                    'coordinate': {
                        'type': 'object',
                        'title': 'Coordinate',
                        'description': 'A coordinate',
                        'additionalProperties': false,
                        'properties': {
                            'lat': {
                                'type': 'string',
                                'pattern': '^[-+]?([1-8]?\\d(\\.\\d+)?|90(\\.0+)?)$',
                                'title': 'Latitude',
                                'description': 'From 90 Degrees North (+) to South (-)'
                            },
                            'lon': {
                                'type': 'string',
                                'pattern': '^[-+]?(180(\\.0+)?|((1[0-7]\\d)|([1-9]?\\d))(\\.\\d+)?)$',
                                'title': 'Longitude',
                                'description': 'From 180 Degrees East (+) to West (-)'
                            }
                        }
                    },
                    'moderators': {
                        'type': 'array',
                        'items': {
                            'pattern': '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$',
                            'type': 'string',
                            'title': 'user',
                            'description': 'Select an object'
                        }
                    },
                    'active': {
                        'type': 'boolean'
                    },
                    'hide': {
                        'type': 'boolean'
                    },
                    'hide_message': {
                        'type': 'string'
                    },
                    'slug': {
                        'type': 'string'
                    },
                    'slug_aliases': {
                        'type': 'string'
                    },
                    'created': {
                        'type': 'string',
                        'format': 'datetime'
                    },
                    'updated': {
                        'type': 'string',
                        'format': 'datetime'
                    }
                },
                'additionalProperties': false
            }
        };
    }

    ngOnInit() {
    }

    store(event) {
        console.log('[OBJECTEDITOR] Storing:', event);

    }

}
