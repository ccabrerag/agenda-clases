import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  user: string='';
  password: string='';
  confirmPassword: string ='';
  nivel:Number=1;
  niveles = ['1','2'];

  constructor(private reservas: ReservasService, public router: Router) { }

  ngOnInit(): void {
  }

  register() {
    const user = { user: this.user, password: this.password, nivel:this.nivel };
    this.reservas.register(user).subscribe(data => {
      console.log(data);
    });
    this.router.navigate(['/login']);
  }
}
