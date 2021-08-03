import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarSalaComponent } from './pages/reservar-sala/reservar-sala.component';
import { MostrarAgendaComponent } from './pages/mostrar-agenda/mostrar-agenda.component';
import { AgendaLoginComponent } from './pages/agenda-login/agenda-login.component';
import { AuthGuard } from './providers/auth-guard.provider';
import { AuthGuardProfesor } from './providers/auth-guard-profesor.provider';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuardAlumno } from './providers/auth-guard-alumno.provider';
import { AuthGuardAll } from './providers/auth-guard-all.provider';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate:[AuthGuardAll],
    children: [
      { path: 'reservar', component: ReservarSalaComponent,canActivate:[AuthGuardProfesor]},
      { path: 'agendas', component: MostrarAgendaComponent,canActivate:[AuthGuardAll]}]
  },
  { path: 'login', component: AgendaLoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
