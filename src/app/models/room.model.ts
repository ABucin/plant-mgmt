import { Entity } from './utils.model';
import { ILocation } from './location.model';

export enum Orientation {
    NORTH = 'NORTH',
    NORTHEAST = 'NORTHEAST',
    NORTHWEST = 'NORTHWEST',
    SOUTH = 'SOUTH',
    SOUTHEAST = 'SOUTHEAST',
    SOUTHWEST = 'SOUTHWEST',
    EAST = 'EAST',
    WEST = 'WEST',
}

export interface Room extends Entity {
    name: string;
    humidity: number;
    temperature: number;
    orientation: Orientation;
    location: ILocation;
}
