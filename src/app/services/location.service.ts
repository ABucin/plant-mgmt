import {inject, Service} from "@angular/core";
import {BaseService} from './base.service';
import {HttpClient} from "@angular/common/http";
import {Location} from '../models/location.model';
import {BackendResponse} from '../models/utils.model';

@Service()
export class LocationService extends BaseService<Location> {
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<BackendResponse<Location>>(`${this.API}location`);
  }
}
