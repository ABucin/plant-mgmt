import {inject, Service} from "@angular/core";
import {BaseService} from './base.service';
import {HttpClient} from "@angular/common/http";
import {House} from '../models/house.model';
import {BackendResponse} from '../models/utils.model';

@Service()
export class HouseService extends BaseService<House> {
  private readonly http = inject(HttpClient);

  getAll() {
    return this.http.get<BackendResponse<House>>(`${this.API}house`);
  }
}
