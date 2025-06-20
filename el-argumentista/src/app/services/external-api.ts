import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExternalApi {

  private apiUrl = 'assets/data/external-api.json';

  constructor(private http: HttpClient) {}

  obtenerCitasFilosoficas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
