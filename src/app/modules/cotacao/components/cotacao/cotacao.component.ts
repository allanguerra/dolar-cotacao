import { Component, OnInit } from '@angular/core';
import { ArtigoService } from '../../services/artigo-service/artigo.service';
import { Secao } from '../../models/secao.model';

@Component({
  selector: 'app-cotacao',
  templateUrl: './cotacao.component.html',
  styleUrls: ['./cotacao.component.scss']
})
export class CotacaoComponent implements OnInit {

  public conteudo: Secao[] = [];

  constructor(
    private artigoService: ArtigoService
  ) { }

  ngOnInit(): void {
    this.conteudo = this.artigoService.obterSecoes();
  }

}
