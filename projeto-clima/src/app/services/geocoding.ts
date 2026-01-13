import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GeocodingResult {
  name: string;
  latitude: number;
  longitude: number;
  country: string;
  state?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeocodingService {

  private readonly API_URL =
    'https://geocoding-api.open-meteo.com/v1/search';

  constructor(private http: HttpClient) {}

  buscarCidade(cidade: string): Observable<{ results: GeocodingResult[] }> {
    return this.http.get<{ results: GeocodingResult[] }>(
      `${this.API_URL}?name=${cidade}&count=1&language=pt&format=json`
    );
  }

}
