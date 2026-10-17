import { HttpClient } from '@angular/common/http'
import { Plant } from '../models/plant.model'
import { BackendResponse } from '../models/utils.model'
import { BaseService } from './base.service'
import { inject, Service } from '@angular/core'

@Service()
export class PlantService extends BaseService<Plant> {
    private readonly http = inject(HttpClient)

    getAll() {
        return this.http.get<BackendResponse<Plant>>(`${this.API}plant`)
    }
}
