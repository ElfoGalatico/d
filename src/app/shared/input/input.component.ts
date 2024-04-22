import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { FormControlName, FormGroup, NgModel } from '@angular/forms';

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
  @ContentChild(FormControlName) control!: FormControlName;



  constructor() {}

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.input = this.model || this.control
    if(this.input === undefined){
      throw new Error('Esse componente precisa ser usada com a diretiva NgModel ou formControlName')
    }
  }

  hasSucess(): boolean{
    return this.input.valid && (this.input.dirty || this.input.touched)
  }

  hasError(): boolean{
    return !this.input.valid && (this.input.dirty || this.input.touched)
  }

}
