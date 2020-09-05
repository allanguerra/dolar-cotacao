export class Cotacao {
  constructor(
    public paridadeCompra?: number,
    public paridadeVenda?: number,
    public cotacaoCompra?: number,
    public cotacaoVenda?: number,
    public dataHoraCotacao?: string,
    public tipoBoletim?: string
  ) {}
}
