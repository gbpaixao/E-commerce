export interface PedidoMetadados{
  idPedido: string;
  nomeCamisa: string;
  previsaoEntrega: string;
  valor: string;
}
export interface Pedido extends PedidoMetadados{
  // status: enum (loja, correios, entregue);
  status: string;
  codigoRastreio: string;
  dataCompra: string;
 }
