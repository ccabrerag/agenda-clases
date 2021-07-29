import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reservar-sala',
  templateUrl: './reservar-sala.component.html',
  styleUrls: ['./reservar-sala.component.sass']
})
export class ReservarSalaComponent implements OnInit {
  
  fecha: Date;
  emailDocente: any;
  sala: any;

  salas=['a1','a2','a3','b1','b2','b3']
  hour: any;
  hours = [{label:"9:00-10:00",start:9,end:10}] 

  constructor() {

    this.fecha =new Date();
   }


  ngOnInit(): void {
  }

  
    
  reservar(){

    let inicio= new Date(this.fecha.setHours(this.hour.start));
    let fin= new Date(this.fecha.setHours(this.hour.end));
   let reserva = {starTime:inicio,endTime:fin,emailDocente:this.emailDocente,sala:this.sala}
    console.log(reserva);
    
  }

}


