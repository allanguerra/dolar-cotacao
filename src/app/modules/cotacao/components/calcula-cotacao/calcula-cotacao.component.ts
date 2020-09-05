import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcula-cotacao',
  templateUrl: './calcula-cotacao.component.html',
  styleUrls: ['./calcula-cotacao.component.scss']
})
export class CalculaCotacaoComponent implements OnInit {

  public simbolo: string = 'USD';
  public simboloReal: string = 'BRL';

  public valor: number = 1;
  public valorReal: number = 5.30;

  constructor() { }

  ngOnInit(): void {
  }

}
