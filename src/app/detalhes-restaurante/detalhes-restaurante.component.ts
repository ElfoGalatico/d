import { ActivatedRoute } from '@angular/router';
import { Restaurante } from '../restaurantes/restaurante/restaurante';
import { RestaurantesService } from './../restaurantes/restaurantes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-detalhes-restaurante',
  templateUrl: './detalhes-restaurante.component.html',
  styleUrl: './detalhes-restaurante.component.css'
})
export class DetalhesRestauranteComponent implements OnInit{

  restaurante?: Restaurante

  constructor(private restaurantesService: RestaurantesService, private route: ActivatedRoute ) {}

  ngOnInit(): void {
    this.restaurantesService.restaurantesById(this.route.snapshot.params['id']).
    subscribe(restaurante => this.restaurante = restaurante )
  }

}
