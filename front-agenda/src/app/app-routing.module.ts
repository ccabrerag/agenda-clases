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


const routes: Routes = [
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'reservar', component: ReservarSalaComponent},
      { path: 'agendas', component: MostrarAgendaComponent}]
  },
  { path: 'login', component: AgendaLoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
