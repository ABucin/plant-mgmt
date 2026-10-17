import { BaseService } from './base.service'
import { BackendResponse } from '../models/utils.model'
import { Room } from '../models/room.model'
import { inject, Service } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Service()
export class RoomService extends BaseService<Room> {
    private readonly http = inject(HttpClient)

    getAll() {
        return this.http.get<BackendResponse<Room>>(`${this.API}room`)
    }
}
