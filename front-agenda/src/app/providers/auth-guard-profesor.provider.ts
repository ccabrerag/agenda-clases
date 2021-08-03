import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AgendaLoginComponent } from "../pages/agenda-login/agenda-login.component";
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardProfesor implements CanActivate {
  activacion:any;
  constructor(public usuario: AgendaLoginComponent, private cookieService: CookieService ) { }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any {
    this.activacion = this.cookieService.get('nivel')
    if (this.activacion === '1'){
      return true;
    } else{

      return false;

    };
    
  }
}