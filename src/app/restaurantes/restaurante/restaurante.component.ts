import { Component, OnInit, Input, input } from '@angular/core';
import { Restaurante } from './restaurante';


@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css'
})
export class RestauranteComponent implements OnInit {

 @Input() restaurante?: Restaurante


  constructor() {}

  ngOnInit(): void {

  }

}
