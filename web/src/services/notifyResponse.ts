import { toast } from 'react-toastify';

export default function notifyResponse(status: number, show = true, text?: string): void {
  if (show) {
    switch (status) {
      case 200: toast.success(text || 'Operação realizada com sucesso! ✨');
        break;

      case 201: toast.success(text || 'Cadastro realizado com sucesso! ✨');
        break;

      case 400: toast.error(text || 'Email e/ou senha inválidos! 😢'); break;

      case 401: toast.error(text || 'Sua sessão expirou, faça o login novamente! 😢'); break;

      default:
        toast.error('Falha no servidor! Tente novamente mais tarde. 😢');
    }
  }
}
