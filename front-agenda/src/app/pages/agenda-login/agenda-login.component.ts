import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-login',
  templateUrl: './agenda-login.component.html',
  styleUrls: ['./agenda-login.component.sass']
})
export class AgendaLoginComponent implements OnInit {

  user: string = '';
  password: string = '';
  nivel: number =0;
  loginUserData: any;
  usuarioActual: any;
  traerToken: any;


  constructor(private reservas: ReservasService, public router: Router) { }

  ngOnInit(): void {
  }



  login() {
    const user = { user: this.user, password: this.password, nivel: this.nivel };
    this.reservas.obtenerLogin().subscribe((data) => {
      // console.log(res)
      this.loginUserData = data
      let traerToken = this.reservas.getToken();
      console.log(data);
      console.log(data.permiso);
      console.log(user.nivel)
    });
    this.usuarioActual = user;
    console.log(user);
    this.router.navigate(['/home']);
  }


}
