import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {

  isSidebarOpen = false; // Controla el estado del menú lateral

  // Alterna el estado del menú lateral
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Cierra el menú lateral
  closeSidebar(): void {
    this.isSidebarOpen = false;
  }


}
