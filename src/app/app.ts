import { Component, inject, Signal } from '@angular/core';
import { LocationService } from './services/location.service';
import { Location } from './models/location.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { PlantService } from './services/plant.service';
import { RoomService } from './services/room.service';
import { Room } from './models/room.model';
import { Plant } from './models/plant.model';
import { NzTableComponent } from 'ng-zorro-antd/table';

@Component({
    imports: [
        NzTableComponent,
    ],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})
export class App {
    protected readonly homeService = inject(LocationService);
    protected readonly roomService = inject(RoomService);
    protected readonly plantService = inject(PlantService);

    public locations: Signal<Location[]> = toSignal(this.homeService.getAll().pipe(map((r) => r.data)), {
        initialValue: [],
    });

    public rooms: Signal<Room[]> = toSignal(this.roomService.getAll().pipe(map((r) => r.data)), {
        initialValue: [],
    });

    public plants: Signal<Plant[]> = toSignal(this.plantService.getAll().pipe(map((r) => r.data)), {
        initialValue: [],
    });
}
