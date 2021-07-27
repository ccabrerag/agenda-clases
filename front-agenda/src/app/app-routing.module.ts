import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservarSalaComponent } from './reservar-sala/reservar-sala.component';

const routes: Routes = [
  { path: 'reservar', component: ReservarSalaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
