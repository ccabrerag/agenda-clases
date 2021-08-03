import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReservarSalaComponent } from './pages/reservar-sala/reservar-sala.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { MostrarAgendaComponent } from './pages/mostrar-agenda/mostrar-agenda.component';
import { AgendaLoginComponent } from './pages/agenda-login/agenda-login.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [AppComponent, ReservarSalaComponent, MostrarAgendaComponent, AgendaLoginComponent, HomeComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    MatGridListModule,
    AgGridModule.withComponents([]),
    MatTableModule
    ],
  providers: [CookieService,AgendaLoginComponent],
  entryComponents: [ReservarSalaComponent,AgendaLoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
