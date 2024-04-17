import { Component, OnInit,Input, EventEmitter, Output} from '@angular/core';
import { MenuItem } from './item-menu';

@Component({
  selector: 'mt-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrl: './item-menu.component.css'
})
export class ItemMenuComponent implements OnInit {

 @Input() menuItem !: MenuItem
 @Output() add = new EventEmitter()

  constructor() {}

  ngOnInit(): void {

  }
  emitAddEvent(){
    this.add.emit(this.menuItem)
  }

}
