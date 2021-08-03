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

  register(user: any): Observable<any> {
    return this.http.post("http://localhost:8080/user", user);
  }

  login(user:any): Observable<any> {
    return this.http.post("http://localhost:8080/login", user);
  }

  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }


}
