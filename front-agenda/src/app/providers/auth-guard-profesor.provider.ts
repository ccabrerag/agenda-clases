import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AgendaLoginComponent } from "../pages/agenda-login/agenda-login.component";


@Injectable({
  providedIn: 'root'
})
export class AuthGuardProfesor implements CanActivate {
  constructor(public usuario: AgendaLoginComponent) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    const permiso = this.usuario.nivel;
    console.log(this.usuario.nivel);
    if (this.usuario.usuarioActual.filter((usuario: any) => permiso === 2)) { 
     }
        else {
      //navegar a un componente de error
    }

  }
}