import { RestaurantesService } from './restaurantes.service';
import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante';

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.css'
})
export class RestaurantesComponent implements OnInit {

  restaurantes? : Restaurante[] = []

  constructor(private restaurantesService: RestaurantesService) {}

  ngOnInit(): void {
    this.restaurantesService.restaurantes()
    .subscribe(restaurantes => this.restaurantes = restaurantes) //recebe a lista de restaurantes e pega o que foi recebido e passa para o valor da propriedade
  }

}
