import { Injectable } from '@angular/core';

import { Secao } from '../../../models/secao.model';
import { Artigo } from '../../../models/artigo.model';

import { default as conteudo } from '../../../../assets/conteudo/conteudo.json';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  private secoes: Secao[];

  constructor() {
    this.secoes = conteudo as Secao[];
  }

  public obterSecoes(): Secao[] {
    return conteudo;
  }

  public obterArtigo(artigoID: string): Artigo {
    let secao: Secao = this.secoes
      .find((secao: Secao) => secao.artigos
        .find((artigo: Artigo) => artigo.id === artigoID));

    return secao.artigos
      .find((artigo: Artigo) => artigo.id === artigoID);
  }
}
