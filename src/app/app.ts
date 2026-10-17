import { Component, inject, Signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { HouseService } from './services/house.service'
import { House } from './models/house.model'
import { toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs'
import { PlantService } from './services/plant.service'
import { RoomService } from './services/room.service'
import { Room } from './models/room.model'
import { Plant } from './models/plant.model'

@Component({
    imports: [RouterOutlet],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})
export class App {
    protected readonly homeService = inject(HouseService);
    protected readonly roomService = inject(RoomService);
    protected readonly plantService = inject(PlantService);

    public houses: Signal<House[]> = toSignal(this.homeService.getAll().pipe(map((r) => r.data)), {
        initialValue: [],
    });

    public rooms: Signal<Room[]> = toSignal(this.roomService.getAll().pipe(map((r) => r.data)), {
        initialValue: [],
    });

    public plants: Signal<Plant[]> = toSignal(this.plantService.getAll().pipe(map((r) => r.data)), {
        initialValue: [],
    });
}
