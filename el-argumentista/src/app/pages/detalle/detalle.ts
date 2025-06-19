import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ConceptosService, Concepto } from '../../services/conceptos.service';

@Component({
  selector: 'app-detalle',
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle.html',
  styleUrl: './detalle.scss'
})
export class Detalle {
  concepto$: Observable<Concepto | undefined>;

  constructor(private route: ActivatedRoute, private conceptosService: ConceptosService) {
    this.concepto$ = this.route.paramMap.pipe(
      map((params) => Number(params.get('id'))),
      switchMap((id) => this.conceptosService.obtenerConceptoPorId(id))
    );
  }
}
