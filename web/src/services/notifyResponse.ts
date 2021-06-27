import { toast } from 'react-toastify';

export default function notifyResponse(status: number, show = true, text?: string): void {
  if (show) {
    switch (status) {
      case 200: toast.success(text || 'Operação realizada com sucesso! ✨');
        break;

      case 201: toast.success(text || 'Cadastro realizado com sucesso! ✨');
        break;

      default:
        toast.error('Falha no servidor! Tente novamente mais tarde. 😢');
    }
  }
}
