import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Review } from "./review/review";
import { MEAT_API } from "../../app.api";
import { Observable } from "rxjs";

@Injectable()
export class ReviewsService{

  constructor(private http: HttpClient) { }

  reviews(): Observable<Review[]> {
    return this.http.get<Review[]>(`${MEAT_API}/reviews`)
  }

  reviewsDoRestaurante(restaurantId: string): Observable<Review[]>{
    return this.http.get<Review[]>(`${MEAT_API}/reviews/${restaurantId}`)
  }
}
