import { api } from '../lib/axios';

const res = await fetch(`${api}/content/paragraphs?locale=pt-BR`);
export const paragraphs = await res.json();
