import { Artigo } from "./artigo.model";

export class Secao {
  constructor (
    public titulo?: string,
    public descricao?: string,
    public artigos?: Artigo[]
  ) {}
}
