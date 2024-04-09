import { Component } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model';
@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css'
})
export class RestaurantesComponent {
  restaurantes: Restaurante[] = []


}
