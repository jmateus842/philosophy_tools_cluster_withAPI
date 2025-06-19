import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Concepto {
  id: number;
  titulo: string;
  categoria: string;
  definicion: string;
  ejemplo: string;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConceptosService {
  private readonly dataUrl = 'assets/data/conceptos.json';

  constructor(private http: HttpClient) {}

  obtenerConceptos(): Observable<Concepto[]> {
    return this.http.get<Concepto[]>(this.dataUrl);
  }

  obtenerConceptoPorId(id: number): Observable<Concepto | undefined> {
    return this.obtenerConceptos().pipe(
      map((conceptos) => conceptos.find((c) => c.id === id))
    );
  }
} 