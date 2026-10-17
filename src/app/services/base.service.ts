import { Observable } from "rxjs";
import {BackendResponse} from '../models/utils.model';

export abstract class BaseService<T> {
  protected API = `http://localhost:3000/api/v1/`;

  protected abstract getAll(): Observable<BackendResponse<T>>;
}
