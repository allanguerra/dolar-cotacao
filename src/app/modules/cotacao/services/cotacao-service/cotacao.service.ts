import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MoedaCotacao } from '../../models/moeda-cotacao.model'

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  private readonly BASE_URL: string = 'https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?';
  private readonly MOEDA: string = '@moeda=';
  private readonly DATA_COTACAO: string = '@dataCotacao=';
  private readonly FORMATO: string = 'format=json';
  private readonly AND = '&';

  constructor(
    private http: HttpClient
  ) { }

  public obterCotacao(moeda: string, dataCotacao: string): Observable<MoedaCotacao> {
    return this.http.get<MoedaCotacao>(`${this.BASE_URL}${this.MOEDA}'${moeda}'${this.AND}${this.DATA_COTACAO}'${dataCotacao}'${this.AND}${this.FORMATO}`);
  }
}
