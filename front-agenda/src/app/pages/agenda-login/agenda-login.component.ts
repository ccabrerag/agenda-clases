import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-agenda-login',
  templateUrl: './agenda-login.component.html',
  styleUrls: ['./agenda-login.component.sass']
})
export class AgendaLoginComponent implements OnInit {

  user: string = '';
  password: string = '';
  nivel: number = 0;
  usuarioActual: any;


  constructor(private reservas: ReservasService, public router: Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  }



  login() {
    const user = { user: this.user, password: this.password, nivel: this.nivel };
    this.reservas.login(user).subscribe((data) => {
      // console.log(res)
      console.log(data);
      console.log(user);
      this.cookieService.set('nivel', data.nivel);
      console.log(this.cookieService.get('nivel'));
      let traerToken = this.reservas.getToken();
      console.log();
      this.router.navigate(['/home']);
      });
  }


}
