import { CarrinhoItem } from './../detalhes-restaurante/carrinho/carrinho';
import { Component, OnInit } from '@angular/core';
import { Radio } from '../shared/radio/radio';
import { PedidoService } from './pedido.service';
import { ItemPedido, Pedido } from './pedido';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'mt-pedido',
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css'
})
export class PedidoComponent implements OnInit{

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

  numeroPattern = /^[0-9]*$/

  pedidoForm !: FormGroup

  delivery: number = 8

  formasPagamento: Radio[] = [
    {label: 'Dinheiro', valor: 'Din'},
    {label: 'Cartão de Débito', valor: 'cardDeb'},
    {label: 'Cartão de Crédito', valor: 'cardCred'}

  ]

  constructor(private pedidoService: PedidoService,
    private http: HttpClient, private router: Router, private formBuilder: FormBuilder){}

    ngOnInit() {
      this.pedidoForm = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        emailConfirmado: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        endereco: ['', [Validators.required, Validators.minLength(5)]],
        numero: ['', [Validators.required, Validators.pattern(this.numeroPattern)]],
        complemento: [''],
        formaPagamento: ['', [Validators.required]]
      }, { validator: PedidoComponent.validarEmail });
    }


    static validarEmail(group: AbstractControl): { [key: string]: boolean } | null {
      const email = group.get('email');
      const emailConfirmado = group.get('emailConfirmado');

      if (email && emailConfirmado && email.value !== emailConfirmado.value) {
        return { emailNaoBate: true };
      }

      return null;
  }


  valorItem(): number{
    return this.pedidoService.valorItem()
  }

  carrinhoItem(): CarrinhoItem[]{
    return this.pedidoService.carrinhoItens()
  }

  addqntd(item: CarrinhoItem){
    this.pedidoService.addQntd(item)
  }

  subtrairQntd(item:CarrinhoItem){
    this.pedidoService.subtrairQntd(item)
  }

  removerItem(item:CarrinhoItem){
    this.pedidoService.removerItem(item)
  }

  checarPedido(pedido : Pedido){
    pedido.itemPedido = this.carrinhoItem().
    map((item: CarrinhoItem) => new ItemPedido(item.quantidade, item.menuItem.id))
    this.pedidoService.checarPedido(pedido).subscribe( (pedidoId: string) => {
      this.router.navigate(['pedido-concluido'])
      this.pedidoService.clear()
    })
    console.log(pedido)
  }
}
