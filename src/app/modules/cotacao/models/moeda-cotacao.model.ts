import { Cotacao } from './cotacao.model';

export class MoedaCotacao {

  constructor (
    public context?: string,
    public value?: Cotacao[]
  ) {}
}
