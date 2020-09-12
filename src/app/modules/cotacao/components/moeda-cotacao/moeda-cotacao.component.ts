import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-moeda-cotacao',
  templateUrl: './moeda-cotacao.component.html',
  styleUrls: ['./moeda-cotacao.component.scss']
})
export class MoedaCotacaoComponent implements OnInit {

  @Input()
  public moedaSimbolo: string = '';

  @Input()
  public moedaValor: string = '';

  @Input()
  public alinhar: string = '';

  @Input()
  public editavel: boolean = false;

  @Output()
  public valor: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public calcular(): void {
    this.valor.emit(this.moedaValor);
  }

}
