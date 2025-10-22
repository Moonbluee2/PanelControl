import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { ArtistasComponent } from './pages/artistas/artistas.component';

export const appRoutes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'artistas', component: ArtistasComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
