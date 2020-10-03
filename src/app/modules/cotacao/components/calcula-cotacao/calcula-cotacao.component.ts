import { Component, OnInit, Input } from '@angular/core';

import { CotacaoService } from '../../services/cotacao-service/cotacao.service';
import { MoedaCotacao } from '../../../../models/moeda-cotacao.model';

@Component({
  selector: 'app-calcula-cotacao',
  templateUrl: './calcula-cotacao.component.html',
  styleUrls: ['./calcula-cotacao.component.scss']
})
export class CalculaCotacaoComponent implements OnInit {

  @Input()
  public imagem: string;
  @Input()
  public simbolo: string;

  public simboloReal: string = 'BRL';

  public valor: number = 1;
  public valorCotacao: number;

  private cotacao: number;

  constructor(
    private cotacaoService: CotacaoService
  ) { }

  ngOnInit(): void {
    this.obterCotacao();
  }

  public calcularCotacao(event?: string): void {
    if(event) {
      this.valor = Number.parseFloat(event);
    }
    this.valorCotacao = this.valor * this.cotacao;
  }

  private obterCotacao(): void {
    this.cotacaoService.obterCotacao(this.simbolo)
      .subscribe((cotacao: MoedaCotacao[]) => {
        this.cotacao = cotacao[0].bid;
        this.calcularCotacao();
      })
  }
}
