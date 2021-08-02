import { Component, OnInit } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TransferState } from '@angular/platform-browser';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-reservar-sala',
  templateUrl: './reservar-sala.component.html',
  styleUrls: ['./reservar-sala.component.sass'],
})
export class ReservarSalaComponent implements OnInit {
  fecha: Date;
  emailDocente: any;
  sala: any;
  view: string = 'form';
  agenda: any[] = [];
  salas = [1, 2, 3, 4, 5, 6];
  hour: any;
  hours = [
    { label: '9:00-10:00', start: 9, end: 10, enabled: true },
    { label: '10:00-11:00', start: 10, end: 11, enabled: true },
    { label: '11:00-12:00', start: 11, end: 12, enabled: true },
    { label: '12:00-13:00', start: 12, end: 13, enabled: true },
    { label: '13:00-14:00', start: 13, end: 14, enabled: true },
    { label: '14:00-15:00', start: 14, end: 15, enabled: true }];

  curso: any;
  cursos = ['GPSW1','GPSW2','THD1','THD2'];


  constructor(private reservas: ReservasService, private router: Router) {
    this.fecha = new Date();
    this.fecha.setHours(0, 0, 0, 0);
    this.fecha.setHours(-4);
  }

  ngOnInit(): void {
    this.obtenerAgenda();
  }

  reservar() {
    let inicio = new Date(this.fecha.setHours(this.hour.start));
    let fin = new Date(this.fecha.setHours(this.hour.end));
    let reserva = {
      fechaInicio: inicio,
      fechaFin: fin,
      emailProfesor: this.emailDocente,
      sala: this.sala,
      curso: this.curso
    };

    console.log(reserva);
    this.reservas.generarReserva(reserva).subscribe((res) => {
      console.log("Hora reservada: ", res);
      this.view = 'success';
    }, (error) => {
      this.view = 'error'
    });
  }


  obtenerAgenda() {
    this.reservas.obtenerAgenda().subscribe((res) => {
      // console.log(res)
      this.agenda = res;
    }, (error) => {
      console.log('error: ', error)
    });
  }

  changeDia(event: any) {
    this.filtrarHoras(event, this.sala);
  }
  changeSala(event: any) {
    this.filtrarHoras(this.fecha, event)
  }


  filtrarHoras(dia: Date, sala: number) {
    this.hours.forEach((h) => {
      h.enabled = true;
    })
    console.log(this.hours)
    this.hour = undefined;
    const diaSeleccionado = dia.toLocaleDateString();
    //console.log(this.agenda);
    console.log(diaSeleccionado);
    this.agenda.forEach(reserva => {
      let fecha = new Date(reserva.fechaInicio);
      let hora = fecha.getHours();
      let dia = fecha.toLocaleDateString();
      //console.log({dia,diaSeleccionado});

      if (dia === diaSeleccionado && reserva.sala === sala) {
        this.hours.forEach((h) => {
          if (h.start === hora) {
            h.enabled = false;
          }
        })
      }
    });

  }

  backtoHome() {
    this.router.navigate(['/']);
  }


}


