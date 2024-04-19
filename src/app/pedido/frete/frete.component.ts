import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mt-frete',
  templateUrl: './frete.component.html',
  styleUrl: './frete.component.css'
})
export class FreteComponent implements OnInit {

  @Input() delivery : number = 0
  @Input() valorItem : number = 0

  constructor() {}

  ngOnInit(): void {

  }

  valorTotal(): number{
    return this.delivery + this.valorItem
  }

}
