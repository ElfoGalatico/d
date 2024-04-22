import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'mt-rating',
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent implements OnInit{

  constructor(){}

  @Output() avaliado = new EventEmitter<number>()

  estrelas: number[] = [1,2,3,4,5]

  avaliacao : number = 0

  preAvaliacao ?: number = 0

  ngOnInit(): void {

  }

  avaliar(estrela: number){
    this.avaliacao = estrela
    this.preAvaliacao = undefined
    this.avaliado.emit(this.avaliacao)
  }

  setPreAvaliacao(estrela: number){
    if(this.preAvaliacao === undefined){
      this.preAvaliacao = this.avaliacao
    }
    this.avaliacao = estrela
  }

  limparPreAvaliacao(){
    if(this.preAvaliacao !== undefined){
      this.avaliacao = this.preAvaliacao
      this.preAvaliacao = undefined
    }
  }

}
