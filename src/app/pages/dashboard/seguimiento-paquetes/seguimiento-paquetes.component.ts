import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seguimiento-paquetes',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './seguimiento-paquetes.component.html',
  styleUrl: './seguimiento-paquetes.component.scss'
})
export class SeguimientoPaquetesComponent {
  numeroPedido: string = ''; // Número de pedido ingresado por el usuario
  pedidoEncontrado: boolean = false; // Determina si el pedido fue encontrado
  estatusPedido: string = ''; // Estado actual del pedido

  // Estados del pedido en orden
  estadosPedido: string[] = [
    'Creado',
    'Recibido en sucursal / En proceso de recolección',
    'En camino de entrega',
    'Entregado',
  ];

  // Lógica para buscar un pedido (simulado)
  buscarPedido(): void {
    // Lógica simulada: si el número es #12345, lo encuentra
    if (this.numeroPedido === '12345') {
      this.pedidoEncontrado = true;
      this.estatusPedido = 'En camino de entrega'; // Estado inicial simulado
    } else {
      alert('Número de pedido no encontrado.');
    }
  }

  // Actualiza el estado cuando el cliente elige llevar a la sucursal
  setEntregaSucursal(): void {
    alert('Has elegido llevar el pedido a la sucursal.');
    this.estatusPedido = 'Recibido en sucursal / En proceso de recolección';
  }

  // Actualiza el estado cuando el cliente solicita recolección
  setEntregaDomicilio(): void {
    alert('Has solicitado recolección a domicilio.');
    this.estatusPedido = 'En proceso de recolección';
  }
}
