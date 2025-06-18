import { Component, OnInit } from '@angular/core';
import { ExternalApi } from '../../services/external-api';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})
export class Inicio implements OnInit {

  constructor(private api: ExternalApi) {}

  ngOnInit(): void {
    this.api.obtenerCitasFilosoficas().subscribe(data => {
      console.log('Citas filosoficas:', data);
    });
  }
}
