import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProvider } from '../providers/http.provider';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  constructor(private http: HttpProvider, private cookies: CookieService) { }

  generarReserva(reserva: any): Observable<any> {
    return this.http.post('http://localhost:8080/agenda', reserva);
  }

  obtenerAgenda(): Observable<any> {
    return this.http.get('http://localhost:8080/agenda');
  }

  login(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/user", user);
  }

  obtenerLogin(): Observable<any> {
    return this.http.get("http://localhost:8080/user");
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }


}
