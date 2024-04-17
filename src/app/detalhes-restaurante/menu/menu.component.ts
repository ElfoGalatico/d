import { Review } from './../reviews/review/review';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { RestaurantesService } from './../../restaurantes/restaurantes.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../item-menu/item-menu';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  constructor(private restaurantesService: RestaurantesService, private route: ActivatedRoute) {}

  menu ?: any

  ngOnInit(): void {
   this.restaurantesService.menoDoRestaurante().subscribe(Menus => {
    this.menu = Menus.filter((review:any) => review.restaurantId === this.route.parent?.snapshot.params['id'])
   })
  }

  addMenuItem(Item: MenuItem){
    console.log(Item)
  }

}
