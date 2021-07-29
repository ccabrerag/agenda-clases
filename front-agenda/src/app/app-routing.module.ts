import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarSalaComponent } from './reservar-sala/reservar-sala.component';
import { SeleccionarHorarioComponent } from './seleccionar-horario/seleccionar-horario.component';


const routes: Routes = [
  { path: 'reservar', component: ReservarSalaComponent},
  { path: 'horario', component: SeleccionarHorarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
