import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicio1',
  templateUrl: './servicio1.component.html',
  styleUrls: ['./servicio1.component.css']
})
export class Servicio1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Equipos = [
    {
      title: 'HP Envy Notebook 13',
      caracteristicas: 
      {so:'OS: Windows 10 Home',pantalla:'Pantalla: 13.3',pila:'Duración de la batería: Hasta 9 horas',memoria:'Memoria: Hasta 16 GB',alm:'Almacenamiento: Hasta 1 TB SSD'},
      image: '/../assets/imagenes/pc1.png'
    },
    {
      title: 'HP Envy Notebook 13',
      caracteristicas: 
      {so:'OS: Windows 10 Home',pantalla:'Pantalla: 13.3',pila:'Duración de la batería: Hasta 9 horas',memoria:'Memoria: Hasta 16 GB',alm:'Almacenamiento: Hasta 1 TB SSD'},
      image: '/../assets/imagenes/pc2.png'
    },
    {
      title: 'HP Envy Notebook 13',
      caracteristicas: 
      {so:'OS: Windows 10 Home',pantalla:'Pantalla: 13.3',pila:'Duración de la batería: Hasta 9 horas',memoria:'Memoria: Hasta 16 GB',alm:'Almacenamiento: Hasta 1 TB SSD'},
      image: '/../assets/imagenes/pc3.png'
    },
    {
      title: 'Acer Predator 17',
      caracteristicas: 
      {so:'OS: Windows 10 Home',pantalla:'Pantalla: 13.3',pila:'Duración de la batería: Hasta 9 horas',memoria:'Memoria: Hasta 16 GB',alm:'Almacenamiento: Hasta 1 TB SSD'},
      image: '/../assets/imagenes/pc4.png'
    },
    {
      title: 'HP OMEN 17',
      caracteristicas: 
      {so:'OS: Windows 10 Home',pantalla:'Pantalla: 13.3',pila:'Duración de la batería: Hasta 9 horas',memoria:'Memoria: Hasta 16 GB',alm:'Almacenamiento: Hasta 1 TB SSD'},
      image: '/../assets/imagenes/pc5.png'
    },
    {
      title: 'ASUS ROG Zephyrus',
      caracteristicas: 
      {so:'OS: Windows 10 Home',pantalla:'Pantalla: 13.3',pila:'Duración de la batería: Hasta 9 horas',memoria:'Memoria: Hasta 16 GB',alm:'Almacenamiento: Hasta 1 TB SSD'},
      image: '/../assets/imagenes/pc6.png'
    }
  ]

}
