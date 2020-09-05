import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
