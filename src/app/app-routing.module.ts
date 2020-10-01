import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscarComponent } from './buscar/buscar.component';
import { CargarComponent } from './cargar/cargar.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
	{path:'home', component: HomeComponent },
	{path:'buscar', component: BuscarComponent },
	{path:'cargar', component: CargarComponent },
	{path:'estadisticas', component: EstadisticasComponent },
	{path:'modificar', component: ModificarComponent },
	{path: '**' , component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);