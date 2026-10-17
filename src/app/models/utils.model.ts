export interface BackendResponse<T> {
  data: T[];
  count: number;
}

export interface Entity {
    id: number;
}
