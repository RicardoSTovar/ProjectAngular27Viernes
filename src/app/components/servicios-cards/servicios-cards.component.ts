import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-cards',
  templateUrl: './servicios-cards.component.html',
  styleUrls: ['./servicios-cards.component.css']
})
export class ServiciosCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Servicios = [
    {title:'PC Windows',description:'Windows cobra vida en estos equipos de gama alta.',link:'Obten mas Informacion',image:'/../assets/imagenes/servicios1.png'},
    {title:'Actualización de Windows 10',description:'Aprovecha todas las nuevas características disponibles en la actualización de abril..',link:'Adquierela ahora',image:'/../assets/imagenes/servicios2.png'},
    {title:'Outlook',description:'Aprovecha todas las nuevas características disponibles en la actualización de abril.',link:'Dercargarlo ahora',image:'/../assets/imagenes/servicios3.png'},
    {title:'Grandes Descuentos',description:'Únete hoy a Xbox Game Pass a un precio especial.',link:'Compra Ahora',image:'/../assets/imagenes/servicios.png'}
  ]

}
