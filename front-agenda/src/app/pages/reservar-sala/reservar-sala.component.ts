import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reservar-sala',
  templateUrl: './reservar-sala.component.html',
  styleUrls: ['./reservar-sala.component.sass'],
})
export class ReservarSalaComponent implements OnInit {
  fecha: Date;
  emailDocente: any;
  sala: any;

  salas = [1, 2, 3, 4, 5, 6];
  hour: any;
  hours = [
    { label: '9:00-10:00', start: 9, end: 10 },
    { label: '10:00-11:00', start: 10, end: 11 },
    { label: '11:00-12:00', start: 11, end: 12 },
    { label: '12:00-13:00', start: 12, end: 13 },
    { label: '13:00-14:00', start: 13, end: 14 },
    { label: '14:00-15:00', start: 14, end: 15 }];

  constructor(private reservas: ReservasService, private router: Router) {
    this.fecha = new Date();
    this.fecha.setHours(0,0,0,0);
    this.fecha.setHours(-4);
  }

  ngOnInit(): void {
   
  }

  reservar() {
    let inicio = new Date(this.fecha.setHours(this.hour.start));
    let fin = new Date(this.fecha.setHours(this.hour.end));
    let reserva = {
      fechaInicio: inicio,
      fechaFin: fin,
      emailProfesor: this.emailDocente,
      sala: this.sala,
    };
    console.log(reserva);
    this.reservas.generarReserva(reserva).subscribe((res)=> {

      console.log("Hora reservada: ",res);
      this.router.navigate(["/"]);

    });
  }
}
