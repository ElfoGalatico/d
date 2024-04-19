import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { Radio } from './radio';
import { ControlValueAccessor } from '@angular/forms';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()=>RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input() options : Radio[] = []

  valor : any

  onChange : any


  constructor(){}

  ngOnInit(): void {

  }

  setValor(valor:any){
    this.valor = valor
    this.onChange(this.valor)
  }

  writeValue(objeto: any): void{
    this.valor = objeto
  } //chamadas pelas diretivas quando querem passar o valor para seu componente

  registerOnChange(fn: any): void{
    this.onChange = fn
  }//sempre que o valor interno do componente mudar se chama essa func


  registerOnTouched(fn: any): void{

  }//se quiser registrar que o usuario entrou no teu componente


  setDisabledState?(isDisabled: boolean): void;

}
