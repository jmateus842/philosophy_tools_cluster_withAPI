import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Conceptos } from './pages/conceptos/conceptos';
import { Detalle } from './pages/detalle/detalle';
import { AcercaDe } from './pages/acerca-de/acerca-de';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'conceptos', component: Conceptos },
  { path: 'detalle/:id', component: Detalle },
  { path: 'acerca-de', component: AcercaDe },
  { path: '**', redirectTo: '' }
];
