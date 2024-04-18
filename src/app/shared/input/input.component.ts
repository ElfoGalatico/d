import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label ?: string

  @Input() mensagemErro ?: string

  @Input() mensagemOkay ?: string

  input : any

  @ContentChild(NgModel) model ?: NgModel

  constructor() {}

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usada com a diretiva NgModel')
    }
  }

  hasSucess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

}