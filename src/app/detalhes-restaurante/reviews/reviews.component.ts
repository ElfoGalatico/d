import { Component, Input, OnInit } from '@angular/core';
import { Review } from './review/review';
import { ReviewsService } from './reviews.service';
import { RestaurantesService } from '../../restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent implements OnInit{

  @Input() reviews: any;

  constructor( private restaurantService: RestaurantesService, private route: ActivatedRoute) {}

  ngOnInit(): void{
    this.restaurantService.reviewsDoRestaurante().subscribe(Reviews => {
      this.reviews = Reviews.filter((review : any) => review.restaurantId === this.route.parent?.snapshot.params['id'])
    })
  }

}
