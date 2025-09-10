import { Mail, MapPinned, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import FaceLogo from '../assets/Facebook_Logo_Primary.png';
import InstaLogo from '../assets/Instagram_Glyph_Gradient.svg';
import LinkedinLogo from '../assets/LI-In-Bug.png';


const contactInfo = [
  {
    icon: <MapPinned color="#fff" className="size-5 lg:size-7 xl:size-8" />,
    title: "AllChat",
    text: "Atendemos em todo Brasil",
  },
  {
    icon: <Mail color="#fff" className="size-5 lg:size-7 xl:size-8" />,
    title: "E-mail",
    text: "contato@allchat.com.br",
  },
  {
    icon: <Phone color="#fff" className="size-5 lg:size-7 xl:size-8" />,
    title: "Telefone",
    text: "(44) 3220-2120",
  },
];


const socialLinks = [
  {
    to: "https://www.facebook.com/towers.tec.br/",
    src: FaceLogo,
    alt: "Facebook",
    label: "facebook.com/towers.tec.br",
  },
  {
    to: "https://www.instagram.com/allchat.solutions",
    src: InstaLogo,
    alt: "Instagram",
    label: "instagram.com/allchat.solutions",
  },
  {
    to: "https://www.linkedin.com/company/allchat-solu%C3%A7%C3%A3o-omnichannel/",
    src: LinkedinLogo,
    alt: "LinkedIn",
    label: "linkedin.com/company/allchat-solução-omnichannel",
  },
];


export function Footer() {
  return (
    <div className="bg-basecolor w-full xl:max-w-7xl 2xl:max-w-[96rem] xl:mx-auto h-60 flex flex-col lg:flex-row font-primary-font pt-5">

      <div className="flex-1 flex flex-col justify-evenly">
        {contactInfo.map((item, idx) => (
          <div key={idx} className="flex flex-row gap-3 text-white items-center pl-8 lg:pl-24 xl:pl-40">
            {item.icon}
            <div>
              <h3 className="hidden lg:block font-semibold">{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 flex flex-row max-sm:max-w-screen lg:flex-col py-5 lg:py-0 items-center justify-around">
        <img
          src="https://allchatbusiness.com.br/wp-content/uploads/2024/07/512px-logo-towers-300x151.png"
          alt="Logo da Towers"
          className="w-24 md:w-48 lg:w-32 h-auto object-contain pl-4 md:pl-8 lg:pl-0"
        />

        <img
          src="https://allchatbusiness.com.br/wp-content/uploads/2024/07/LOGO-V_branca-1.png"
          alt="Logo AllChat"
          className="w-24 md:w-48 lg:w-32 h-auto object-contain pl-4 md:pl-8 lg:pl-0"
        />

        <p className="text-white font-primary-font hidden lg:flex lg:p-5 text-center">
          Copyright © 2025 AllChat. Todos os direitos reservados.
        </p>


      </div>

      <div className="flex-1 flex flex-col justify-evenly items-start gap-4 lg:gap-0 pl-8 lg:pl-0">

        {socialLinks.map((link, idx) => (
          <Link key={idx} to={link.to} target="_blank" className="flex flex-row items-center gap-1 ">
            <img src={link.src} alt={link.alt} className="h-6 lg:h-9 w-auto" />
            <span className="text-white font-semibold flex items-end max-md:text-sm">{link.label}</span>
          </Link>
        ))}

      </div>

      <p className="text-white text-center font-primary-font lg:hidden mt-5">
        Copyright © 2025 AllChat. Todos os direitos reservados.
      </p>
    </div>
  )
}
