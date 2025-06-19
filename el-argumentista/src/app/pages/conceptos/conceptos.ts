import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { ConceptosService, Concepto } from '../../services/conceptos.service';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Component({
  selector: 'app-conceptos',
  imports: [CommonModule, RouterLink],
  templateUrl: './conceptos.html',
  styleUrl: './conceptos.scss'
})
export class Conceptos {
  conceptos$: Observable<Concepto[]>;
  categorias$: Observable<string[]>;
  filtrados$: Observable<Concepto[]>;

  private categoriaSeleccionada$ = new BehaviorSubject<string>('Todas');

  constructor(private conceptosService: ConceptosService) {
    this.conceptos$ = this.conceptosService.obtenerConceptos();

    this.categorias$ = this.conceptos$.pipe(
      map((conceptos) => Array.from(new Set(conceptos.map((c) => c.categoria))))
    );

    this.filtrados$ = combineLatest([this.conceptos$, this.categoriaSeleccionada$]).pipe(
      map(([conceptos, cat]) =>
        cat === 'Todas' ? conceptos : conceptos.filter((c) => c.categoria === cat)
      )
    );
  }

  seleccionarCategoria(cat: string): void {
    this.categoriaSeleccionada$.next(cat);
  }
}
