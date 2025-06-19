import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';
import { ExternalApi } from '../../services/external-api';

@Component({
  selector: 'app-inicio',
  imports: [CommonModule],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit {

  citas$!: Observable<any[]>;

  constructor(private api: ExternalApi) {}

  ngOnInit(): void {
    // Obtenemos las citas y nos quedamos solo con el arreglo interno
    this.citas$ = this.api.obtenerCitasFilosoficas().pipe(
      map((resp) => resp.citas_filosoficas as any[])
    );
  }
}
