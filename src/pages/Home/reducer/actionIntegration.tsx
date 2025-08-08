import type { JSX } from "react";
import { FaFacebook, FaFacebookMessenger, FaGlobe, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export type ItemState = {
  label: JSX.Element;
  active: boolean;
  title: string;
  content: string;
};

export type Action =
  | { type: 'TOGGLE'; index: number }
  | { type: 'RESET' };

export const initialState: ItemState[] = [
  { label: <FaGlobe size={50} />, active: false, title: "Site", content: "Informações sobre o item aqui..." },
  { label: <FaWhatsapp size={50} />, active: false, title: "Whatsapp", content: "Informações sobre o item aqui..." },
  { label: <FaInstagram size={50} />, active: false, title: "Instagram", content: "Informações sobre o item aqui..." },
  { label: <FaFacebook size={50} />, active: false, title: "Facebook", content: "Informações sobre o item aqui..." },
  { label: <FaFacebookMessenger size={50} />, active: false, title: "Messenger", content: "Informações sobre o item aqui..." },
];

export const reducer = (state: ItemState[], action: Action): ItemState[] => {
  switch (action.type) {
    case 'TOGGLE':
      return state.map((item, i) => ({
        ...item,
        active: i === action.index,
      }));
    case 'RESET':
      return state.map(item => ({ ...item, active: false }));
    default:
      return state;
  }
};
