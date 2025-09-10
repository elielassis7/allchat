import { api } from '../lib/axios';

const name = ''
const email = '';
const cpfCnpj = '';
const phone = '';

const res = await fetch(`${api}/checkout`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name, email, cpfCnpj, phone,
    amount: 199.90,
    description: 'Assinatura Plano X'
  })
});
export const { checkoutUrl } = await res.json();
window.location.href = checkoutUrl;
