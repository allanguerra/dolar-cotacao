import { Injectable } from '@angular/core';

import { Secao } from '../../../../models/secao.model';

import { default as conteudo } from '../../../../../assets/conteudo/conteudo.json';

@Injectable({
  providedIn: 'root'
})
export class ArtigoService {

  constructor() { }

  public obterSecoes(): Secao[] {
    return conteudo;
  }
}
