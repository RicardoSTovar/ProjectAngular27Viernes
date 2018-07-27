import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { Servicio1Component } from './components/servicios/servicio1/servicio1.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { ServiciosCardsComponent } from './components/servicios-cards/servicios-cards.component';
import { ServiciosTrabajoComponent } from './components/servicios-trabajo/servicios-trabajo.component';
import { CompraComponent } from './components/compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ServiciosComponent,
    JumbotronComponent,
    Servicio1Component,
    CarruselComponent,
    ServiciosCardsComponent,
    ServiciosTrabajoComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
