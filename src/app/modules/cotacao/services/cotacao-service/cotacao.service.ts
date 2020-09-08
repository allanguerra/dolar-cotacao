import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MoedaCotacao } from '../../models/moeda-cotacao.model'

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  private readonly BASE_URL: string = 'https://economia.awesomeapi.com.br/json';
  private readonly BRL: string = '-BRL';

  constructor(
    private http: HttpClient
  ) { }

  public obterCotacao(moeda: string): Observable<MoedaCotacao[]> {
    return this.http.get<MoedaCotacao[]>(`${this.BASE_URL}/${moeda}${this.BRL}`);
  }
}
