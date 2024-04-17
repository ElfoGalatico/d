import { ReviewsService } from './../reviews.service';
import { Component, Input, OnInit, input } from '@angular/core';
import { RestaurantesService } from '../../../restaurantes/restaurantes.service';
import { ActivatedRoute } from '@angular/router';
import { Review } from './review';

@Component({
  selector: 'mt-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  review ?: Review[] = []

  constructor(private reviewsService: ReviewsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.reviewsService.reviewsDoRestaurante(this.route.snapshot.params['restaurantId'])
    .subscribe(review => this.review = review)
  }

}
