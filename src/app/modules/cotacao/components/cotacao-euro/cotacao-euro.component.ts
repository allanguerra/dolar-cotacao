import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../services/artigo-service/artigo.service';
import { Secao } from '../../../../models/secao.model';

@Component({
  selector: 'app-cotacao-euro',
  templateUrl: './cotacao-euro.component.html',
  styleUrls: ['./cotacao-euro.component.scss']
})
export class CotacaoEuroComponent implements OnInit {

  public conteudo: Secao[] = [];

  constructor(
    private artigoService: ArtigoService
  ) { }

  ngOnInit(): void {
    this.conteudo = this.artigoService.obterSecoes();
  }

}
