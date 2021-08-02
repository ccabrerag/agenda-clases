import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ReservasService } from '../../services/reservas.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { analyzeAndValidateNgModules, findNode } from '@angular/compiler';
import { findLast } from '@angular/compiler/src/directive_resolver';





@Component({
  selector: 'app-mostrar-agenda',
  templateUrl: './mostrar-agenda.component.html',
  styleUrls: ['./mostrar-agenda.component.sass']
})

export class MostrarAgendaComponent implements OnInit {

  prueba: any;
  algo2: any;
  algo: any;
  fecha: Date;
  emailDocente: any;
  sala: any;
  agenda: any;
  dataSource: any;

  constructor(private reservas: ReservasService, private router: Router) {
    this.fecha = new Date();
    this.fecha.setHours(0, 0, 0, 0);
    this.fecha.setHours(-4);
  }

  displayedColumns: string[] = ['curso', 'fecha', 'sala', 'emailProfe'];



  ngOnInit(): void {

    this.obtenerAgenda();
  }

  changeDia(event: any) {

    this.filtrarHoras(event);
  }

  filtrarHoras(dia: Date) {

    const diaSeleccionado = dia.toLocaleDateString();
    //console.log(this.agenda);
    this.algo = this.agenda.filter((reserva:any) => diaSeleccionado === new Date (reserva.fechaInicio).toLocaleDateString());
  }

  obtenerAgenda() {

    this.reservas.obtenerAgenda().subscribe((res) => {
      console.log(res);
      this.agenda = res;
      console.log(this.agenda);
      console.log(res);
    });


  }

}