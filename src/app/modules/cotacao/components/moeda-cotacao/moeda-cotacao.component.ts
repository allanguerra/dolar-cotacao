import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MoedaSimbolo } from '../../models/enums/moeda-simbolo.enum';

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

  public mascara: any = {
    prefix: '',
    thousands: '.',
    decimal: ','
  }

  constructor() { }

  ngOnInit(): void {
    this.mascara.prefix = MoedaSimbolo[this.moedaSimbolo] || '';
  }

  public calcular(): void {
    this.valor.emit(this.moedaValor);
  }

}
