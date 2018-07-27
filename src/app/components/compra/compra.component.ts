import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  registroEquipos=[
    {nombre:'Ricardo Sauceda',email:'ricardo.sauceda95@gmail.com',nombrePelicula:'12 horas para sobrevivir'},
    {nombre:'Kristel',email:'kristel.sanchez@outlook.com',nombrePelicula:'Nemo'}
    ];

}
