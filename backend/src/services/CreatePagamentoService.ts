import database from "../database";

interface Pagamento {
  idPagamento: string;
  tipoPagamento?: string;
  pagamentoEfetuado?: boolean;
}

export class CreatePagamentoService {
  async execute(pagamento: Pagamento) {
    const pagamentoId = await database
      .clone()
      .insert(pagamento, "idPagamento")
      .into('Pagamento')

    return pagamentoId[0];
  }
}
