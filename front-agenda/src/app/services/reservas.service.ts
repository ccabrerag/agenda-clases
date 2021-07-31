import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpProvider } from '../providers/http.provider';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  constructor(private http: HttpProvider) {}

  generarReserva(reserva: any):Observable<any> {
    return this.http.post('http://localhost:8080/agenda', reserva);
  }

  obtenerAgenda():Observable<any>{
    return this.http.get('http://localhost:8080/agenda');
  }


}
