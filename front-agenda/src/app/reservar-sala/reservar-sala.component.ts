import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reservar-sala',
  templateUrl: './reservar-sala.component.html',
  styleUrls: ['./reservar-sala.component.sass']
})
export class ReservarSalaComponent implements OnInit {
  
  startTime: any;
  endTime: any;
  emailDocente: any;
  sala: any;

  salas=['a1','a2','a3','b1','b2','b3']


  constructor() { }

  ngOnInit(): void {
  }

  reservar(){
    let reserva = {starTime:this.startTime,endTime:this.endTime,emailDocente:this.emailDocente,sala:this.sala}
    console.log(reserva);
  }

}


