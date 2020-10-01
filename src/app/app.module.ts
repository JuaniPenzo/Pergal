import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app-routing.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargarComponent } from './cargar/cargar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { BuscarComponent } from './buscar/buscar.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    ModificarComponent,
    BuscarComponent,
    EstadisticasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
