import { Entity } from './utils.model';

export interface Room extends Entity {
    name: string;
    humidity: number;
    temperature: number;
}
