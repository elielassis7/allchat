import { motion } from "framer-motion";
import { useState, type JSX } from "react";
import {
  FaBrain,
  FaChartLine, FaNetworkWired,
  FaPlug, FaRobot
} from "react-icons/fa";
import AutoImage from '../assets/AutomacaoImage.png';
import CrmImage from '../assets/CrmImage.png';
import FlexImage from '../assets/FlexImage.png';
import IaImage from '../assets/IaImage.png';
import RelatImage from '../assets/RelatorioImage.png';
import { ButtonAction } from "./ButtonAction";

type OptionKey = "crm" | "automation" | "reports" | "scalability" | "ai";

const options: { label: string; key: OptionKey; icon: JSX.Element; image: string }[] = [
  { label: "Integração com CRM e ERP", key: "crm", icon: <FaPlug />, image: CrmImage },
  { label: "Automação de Respostas", key: "automation", icon: <FaRobot />, image: AutoImage },
  { label: "Relatórios e Análises", key: "reports", icon: <FaChartLine />, image: RelatImage },
  { label: "Flexibilidade e Escalabilidade", key: "scalability", icon: <FaNetworkWired />, image: FlexImage },
  { label: "Atendimento com IA Avançada", key: "ai", icon: <FaBrain />, image: IaImage },
];


const contents = {
  crm: "Nosso chatbot se conecta facilmente aos principais sistemas CRM e ERP, garantindo que sua equipe tenha acesso a informações atualizadas e relevantes, a qualquer momento. Isso facilita o acompanhamento de leads, gestão de clientes e controle de estoque, entre outros processos críticos.",
  automation: "Com respostas automáticas e personalizadas, nosso chatbot pode lidar com consultas comuns de maneira instantânea. Isso não só melhora a experiência do cliente como também diminui a carga de trabalho da sua equipe de atendimento.",
  reports: "Nossos relatórios detalhados permitem que você acompanhe o desempenho do chatbot e identifique áreas de melhoria. Isso ajuda a tomar decisões informadas e otimizar continuamente os processos de comunicação.",
  scalability: "O Allchat Business oferece planos que se adaptam ao tamanho e às necessidades da sua empresa, desde pequenos negócios até grandes corporações. Você pode começar com um plano mais simples e escalar conforme seu negócio cresce.",
  ai: "Nosso sistema de automação integra a inteligência artificial mais avançada, como o ChatGPT, para oferecer respostas precisas, personalizadas e contextuais em tempo real. Com a IA, você não só automatiza tarefas repetitivas, mas também melhora a qualidade das interações com seus clientes, antecipando necessidades e oferecendo soluções de forma proativa",
};

export function OurOptions() {
  const [selected, setSelected] = useState<keyof typeof contents>("crm");


  return (
    <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-5 gap-4 px-4 py-5 h-[550px]">
      {/* Botões - Stack vertical no mobile */}
      <div className="flex flex-col col-span-1 gap-4">
        {options.map((item) => (
          <motion.div
            key={item.key}
            className={`flex items-center gap-2 px-4 py-6 rounded-xl cursor-pointer 
              transition-colors shadow-sm md:h-[100px] mt-4
              ${selected === item.key
                ? "bg-gradient-to-r from-indigo-500 to-emerald-500 text-white shadow-lg"
                : "bg-gray-100 text-gray-800 hover:bg-emerald-100 hover:text-indigo-800"
              }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSelected(item.key)}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-sm md:text-base font-semibold">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* Área do conteúdo */}
      <motion.div
        key={selected}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="col-span-1 md:col-span-3 grid grid-cols-3 row-span-5 bg-neutral-900 
          text-gray-100 rounded-xl p-6 shadow-md"
      >
        <div className="col-span-2 row-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl text-emerald-500">
              {options.find(o => o.key === selected)?.icon}
            </span>
            <h3 className="text-xl md:text-3xl font-bold">
              {options.find(o => o.key === selected)?.label}
            </h3>
          </div>
          <p className="text-base md:text-lg leading-relaxed tracking-wide pb-5">
            {contents[selected]}
          </p>
          <ButtonAction />
        </div>

        <div className="col-span-1 row-span-5">
          <img
            src={options.find(o => o.key === selected)?.image}
            alt="Imagem"
            className="h-[450px] object-cover"
          />
        </div>

      </motion.div>
    </div>
  );
}
