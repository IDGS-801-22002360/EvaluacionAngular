import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private authService: AuthService) { }

  login(event?: Event) {
    if (event) event.preventDefault();
    if (this.authService.login(this.username, this.password)) {
      this.error = '';
      alert('Acceso permitido');
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }

  clear() {
    this.username = '';
    this.password = '';
    this.error = '';
  }
}
