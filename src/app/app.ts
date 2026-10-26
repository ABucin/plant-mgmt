import { Component, inject, signal, Signal } from '@angular/core';
import { LocationService } from './services/location.service';
import { ILocation } from './models/location.model';
import { toSignal } from '@angular/core/rxjs-interop';
import { finalize, map } from 'rxjs';
import { PlantService } from './services/plant.service';
import { RoomService } from './services/room.service';
import { Room } from './models/room.model';
import { Plant } from './models/plant.model';
import { NzTableComponent } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { DatePipe } from '@angular/common';

@Component({
    imports: [NzTableComponent, NzSpinModule, DatePipe],
    selector: 'app-root',
    styleUrl: './app.scss',
    templateUrl: './app.html',
})
export class App {
    protected readonly homeService = inject(LocationService);
    protected readonly roomService = inject(RoomService);
    protected readonly plantService = inject(PlantService);

    public locations: Signal<ILocation[]> = toSignal(
        this.homeService.getAll().pipe(
            map((r) => r.data),
            finalize(() => this.isLoadingLocations.set(false))
        ),
        {
            initialValue: [],
        }
    );

    public rooms: Signal<Room[]> = toSignal(
        this.roomService.getAll().pipe(
            map((r) => r.data),
            finalize(() => this.isLoadingRooms.set(false))
        ),
        {
            initialValue: [],
        }
    );

    public plants: Signal<Plant[]> = toSignal(
        this.plantService.getAll().pipe(
            map((r) => r.data),
            finalize(() => this.isLoadingPlants.set(false))
        ),
        {
            initialValue: [],
        }
    );

    public isLoadingLocations = signal(true);
    public isLoadingRooms = signal(true);
    public isLoadingPlants = signal(true);
}
