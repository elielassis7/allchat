import { API } from '../lib/axios';

const res = await fetch(`${API}/content/paragraphs?locale=pt-BR`);
export const paragraphs = await res.json();
