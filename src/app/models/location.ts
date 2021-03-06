import { Entity, Key } from '@briebug/ngrx-auto-entity';
/* tslint:disable */
/**
 * This file was automatically generated by Isomer's command line tool using:
 * 'iso dev export-schemata -f typescript' - using json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source isomer object file,
 * and run the iso tool schemata exporter again, to regenerate this file.
 */

/**
 * Select an object
 */
export type UniqueOwnerID = string;
/**
 * Select an object
 */
export type UniqueLocationID = string;
/**
 * From 90 Degrees North (+) to South (-)
 */
export type Latitude = string;
/**
 * From 180 Degrees East (+) to West (-)
 */
export type Longitude = string;
/**
 * Select an object
 */
export type Region = string;

@Entity({modelName: 'location', uriName: 'locations'})
export class Location {
    /**
     * Name of location
     */
    name?: string;
    owner?: UniqueOwnerID;
    color?: string;
    @Key uuid?: UniqueLocationID;
    title?: string;
    description?: string;
    type: string;
    degree?: string;
    since?: string;
    buildingType?: string;
    reporter?: string;
    street?: string;
    city?: string;
    postcode?: string;
    coordinate?: Coordinate;
    region?: Region;
    active?: boolean;
    demolished?: boolean;
    demolish_rumor?: boolean;
    slug?: string;
    slug_aliases?: string;
    created?: string;
    updated?: string;
}

/**
 * A coordinate
 */
export class Coordinate {
    lat?: Latitude;
    lon?: Longitude;
}
