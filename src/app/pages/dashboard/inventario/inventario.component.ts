import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.scss'
})
export class InventarioComponent {

  estadoFiltro: string = '';
  searchTerm: string = '';

  // Datos del inventario
  inventario = [
    { id: 1, numeroPedido: '12345', cliente: 'Juan Pérez', descripcion: 'Paquete mediano con ropa', estado: 'Disponible' },
    { id: 2, numeroPedido: '12346', cliente: 'María López', descripcion: 'Paquete grande con electrónica', estado: 'En tránsito' },
    { id: 3, numeroPedido: '12347', cliente: 'Carlos García', descripcion: 'Paquete pequeño con documentos', estado: 'Entregado' },
  ];

  // Filtrar inventario basado en el estado seleccionado y búsqueda
  get filteredInventario() {
    return this.inventario.filter((paquete) => {
      const matchesEstado = this.estadoFiltro ? paquete.estado === this.estadoFiltro : true;
      const matchesSearch =
        paquete.numeroPedido.includes(this.searchTerm) || paquete.cliente.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesEstado && matchesSearch;
    });
  }

}
