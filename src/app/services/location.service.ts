import {inject, Service} from "@angular/core";
import {BaseService} from './base.service';
import {HttpClient} from "@angular/common/http";
import { ILocation } from '../models/location.model';
import {BackendResponse} from '../models/utils.model';

@Service()
export class LocationService extends BaseService<ILocation> {
    private readonly http = inject(HttpClient);

    getAll() {
        return this.http.get<BackendResponse<ILocation>>(`${this.API}location`);
    }
}
