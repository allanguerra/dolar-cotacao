export class MoedaCotacao {

  constructor (
    public code: string,
    public codein: string,
    public name: string,
    public high: number,
    public low: number,
    public varBid: number,
    public pctChange: number,
    public bid: number,
    public ask: number,
    public timestamp: Date,
    public create_date: Date
  ) {}
}
