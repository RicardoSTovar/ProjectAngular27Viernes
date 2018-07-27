import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-trabajo',
  templateUrl: './servicios-trabajo.component.html',
  styleUrls: ['./servicios-trabajo.component.css']
})
export class ServiciosTrabajoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ServiciosWork = [
    {title:'Microsoft Teams',description:'Disfruta de un área de trabajo compartida para las conversaciones, los archivos y las aplicaciones de los equipos en el nuevo hub para trabajar en equipo.',link:'Empieza Gratis',image:'/../assets/imagenes/trabajo1.png'},
    {title:'Windows 10 Enterprise',description:'Descarga la evaluación gratuita de 90 días para profesionales de TI.',link:'Descargarlo Ahora',image:'/../assets/imagenes/trabajo2.png'},
    {title:'Visual Studio 2017',description:'Productividad para cualquier plataforma, aplicación y desarrollo.',link:'Descarga Visual Studio 2017',image:'/../assets/imagenes/trabajo3.png'},
    {title:'Microsoft Azure',description:'Deshazte de los servidores. Crea las aplicaciones más rápidamente sin necesidad administrar infraestructuras.',link:'Mas Informacion',image:'/../assets/imagenes/trabajo4.png'}
  ]

}
