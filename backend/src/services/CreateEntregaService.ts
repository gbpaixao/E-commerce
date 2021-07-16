import database from "../database";

interface Entrega {
  valorFrete: number;
  previsaoEntrega: Date;
  codigoRastreio: string;
  formaEnvio: string;
  status: string;
}

export class CreateEntregaService {
  async execute(item: Entrega) {
    const entregaId = await database
      .clone()
      .insert(item, "idEntrega")
      .into('Entrega')

    return entregaId[0];
  }
}
