import { api } from '../lib/axios';

const username = ''
const password = ''

const res = await fetch(`${api}/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username, password
  })
});
export const { loginUrl } = await res.json();
window.location.href = loginUrl;
