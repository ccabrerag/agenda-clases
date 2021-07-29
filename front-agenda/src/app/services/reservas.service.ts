import { Injectable } from '@angular/core';
import { HttpProvider } from '../providers/http.provider';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  constructor(private http: HttpProvider) {}

  generarReserva(reserva: any) {
    this.http.post('http://localhost:8080/agenda', reserva).subscribe((res) => {
      console.log('RES: ', res);
    });
  }
}
