import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nueva-comanda',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './nueva-comanda.component.html',
  styleUrl: './nueva-comanda.component.scss'
})
export class NuevaComandaComponent {
  // Variables para el formulario
  remitente: string = '';
  direccionRemitente: string = '';
  destinatario: string = '';
  direccionDestinatario: string = '';
  detalles: string = '';
  costoEnvio: string = '';

  // Estado de la comanda
  isComandaCreated: boolean = false;

  // Método para crear la comanda
  crearComanda(): void {
    // Aquí podrías agregar lógica adicional, como validaciones o envío al backend
    console.log('Comanda creada:', {
      remitente: this.remitente,
      direccionRemitente: this.direccionRemitente,
      destinatario: this.destinatario,
      direccionDestinatario: this.direccionDestinatario,
      detalles: this.detalles,
    });
    this.costoEnvio = '100.00';
    this.isComandaCreated = true;
  }
}
