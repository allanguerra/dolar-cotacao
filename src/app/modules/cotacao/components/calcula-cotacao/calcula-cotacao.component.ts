import { Component, OnInit } from '@angular/core';

import { CotacaoService } from '../../services/cotacao-service/cotacao.service';
import { MoedaCotacao } from '../../models/moeda-cotacao.model';

@Component({
  selector: 'app-calcula-cotacao',
  templateUrl: './calcula-cotacao.component.html',
  styleUrls: ['./calcula-cotacao.component.scss']
})
export class CalculaCotacaoComponent implements OnInit {

  public simbolo: string = 'USD';
  public simboloReal: string = 'BRL';

  public valorReal: number = 1;
  public valorCotacao: number;

  private data: Date = new Date();
  private dataDia: string = '';
  private cotacao: number;

  constructor(
    private cotacaoService: CotacaoService
  ) { }

  ngOnInit(): void {
    this.construirDataDia();
    this.obterCotacao();
  }

  public calcularCotacao(): void {
    this.valorCotacao = this.valorReal * this.cotacao;
  }

  private obterCotacao(): void {
    this.cotacaoService.obterCotacao(this.simbolo, this.dataDia)
      .subscribe((cotacao: MoedaCotacao) => {
        this.cotacao = cotacao.value[0].cotacaoVenda;
        this.calcularCotacao();
      })
  }

  private construirDataDia(): void {
    this.dataDia = `${this.data.getMonth()}-${this.data.getDate()}-${this.data.getFullYear()}`;
  }

}
