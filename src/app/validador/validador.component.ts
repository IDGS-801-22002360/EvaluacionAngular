import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-validador',
  templateUrl: './validador.component.html', // Asegúrate que coincide con el nombre real
  styleUrls: ['./validador.component.scss'] // Asegúrate que coincide con el nombre real
})
export class ValidadorComponent {
  curp: string = '';
  rfc: string = '';
  mensaje: string = '';

  validarCurp() {
    const curpRegex = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z0-9]\d$/i;
    this.mensaje = curpRegex.test(this.curp) ? 'CURP válida' : 'CURP inválida';
  }

  validarRfc() {
    const rfcRegex = /^[A-ZÑ&]{4}\d{6}[A-Z0-9]{3}$/i;
    this.mensaje = rfcRegex.test(this.rfc) ? 'RFC válido' : 'RFC inválido';
  }

  validarCoincidencia() {
    if (this.curp.length < 10 || this.rfc.length < 10) {
      this.mensaje = 'Ambos deben tener al menos 10 caracteres';
      return;
    }
    this.mensaje = this.curp.substring(0, 10).toUpperCase() === this.rfc.substring(0, 10).toUpperCase()
      ? 'Coinciden los primeros 10 caracteres'
      : 'No coinciden los primeros 10 caracteres';
  }
}
