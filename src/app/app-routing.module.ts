import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Servicio1Component } from './components/servicios/servicio1/servicio1.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CompraComponent } from './components/compra/compra.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path:'compra',component:CompraComponent},
  {
    path: 'servicios', component: ServiciosComponent,
    children: [
      {path: 'servicio1',component: Servicio1Component},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
