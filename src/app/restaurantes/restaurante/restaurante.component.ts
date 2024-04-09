import { Component, OnInit, Input } from '@angular/core';
import { RestaurantesComponent } from '../restaurantes.component';
import { Restaurante } from './restaurante.model';
@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css'
})
export class RestauranteComponent implements OnInit {

  @Input() restaurante: Restaurante



  constructor() {}

  ngOnInit(): void {

  }

}
