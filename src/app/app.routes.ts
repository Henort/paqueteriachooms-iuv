import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/dashboard/layout/layout.component';
import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
import { NuevaComandaComponent } from './pages/dashboard/nueva-comanda/nueva-comanda.component';
import { SeguimientoPaquetesComponent } from './pages/dashboard/seguimiento-paquetes/seguimiento-paquetes.component';
import { InventarioComponent } from './pages/dashboard/inventario/inventario.component';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      { path: 'inicio', component: InicioComponent },
      { path: 'nueva-comanda', component: NuevaComandaComponent },
      { path: 'seguimiento-paquetes', component: SeguimientoPaquetesComponent },
      { path: 'inventario', component: InventarioComponent },
      { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' } // Ruta para manejar rutas no existentes
];
