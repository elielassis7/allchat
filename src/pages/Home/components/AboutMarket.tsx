import News01 from "../assets/news01.png";
import News02 from "../assets/news02.webp";
import { ButtonAction } from "./ButtonAction";


type NewsItem = {
  title: string;
  url: string;
  image: string;
};

type ItemsChart = {
  title: string;
  color: string
  percentage: string
  height: string
}

const newsData: NewsItem[] = [
  {
    title: "WhatsApp e chatbot na automação de vendas",
    url: "https://g1.globo.com/pr/parana/especial-publicitario/bw8/nova-economia/noticia/2023/04/04/whatsapp-e-chatbot-na-automacao-de-vendas.ghtml",
    image: News01
  },
  {
    title: "WhatsApp Business: vendas na palma das mãos em 2024",
    url: "https://noticias.gs1br.org/business-vendas-na-palma-da-mao-whatsapp/",
    image: News02
  },
];


const charts: ItemsChart[] = [
  {
    title: "Empresas que usam WhatsApp",
    color: "bg-[#3b82f6]",
    percentage: "50%",
    height: "h-[50px] xl:h-[100px]"
  },
  {
    title: "Consumidores que compram via apps",
    color: "bg-[#10b981]",
    percentage: "74%",
    height: "h-[74px] xl:h-[148px]"
  },
  {
    title: "Empresas que usam chatbots",
    color: "bg-[#8b5cf6]",
    percentage: "80%",
    height: "h-[80px] xl:h-[160px]"
  },
  {
    title: "Chatbots melhoram experiência",
    color: "bg-[#f59e0b]",
    percentage: "60%",
    height: "h-[60px] xl:h-[120px]"
  },
  {
    title: "IA com conhecimento interno",
    color: "bg-[#ef4444]",
    percentage: "70%",
    height: "h-[70px] xl:h-[140px]"
  }
]

const metrics = [
  {
    icon: "🏢",
    title: "Empresas e Comércio",
    description:
      "O WhatsApp Business tem sido amplamente adotado por empresas no Brasil, desde pequenas empresas até grandes corporações. A plataforma facilita a comunicação direta com clientes e a gestão de pedidos, agendamentos e suporte ao cliente.",
  },
  {
    icon: "🎧",
    title: "Atendimento ao Cliente",
    description:
      "Muitas empresas utilizam o WhatsApp para oferecer suporte ao cliente em tempo real, respondendo perguntas, resolvendo problemas e fornecendo informações sobre produtos e serviços.",
  },
  {
    icon: "🛒",
    title: "Vendas e Comércio",
    description:
      "Restaurantes, lojas e serviços frequentemente utilizam o WhatsApp para receber pedidos, reservas e agendamentos, facilitando a gestão de vendas e a comunicação com clientes.",
  },
];


export function AboutMarket() {
  return (
    <div className="bg-neutral-900 p-2 md:p-6 rounded-lg shadow-md max-w-6xl 2xl:max-w-[96rem] mx-auto">
      <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold text-gray-100 mb-4">📈 Panorama do Mercado: WhatsApp & Automação</h2>


      <div className="bg-gradient-to-t from-neutral-800 via-neutral-600 to-neutral-700 text-gray-300 p-0.5 md:p-4 gap-1 h-[200px] md:h-[250px] lg:h-[300px] 2xl:h-[30vh] overflow-hidden flex flex-row justify-around items-end rounded-lg shadow mb-8">
        {/* <MarketChart />*/}

        {charts.map((item, index) => (
          <div key={index} className="flex flex-col w-20 xl:w-52 justify-center items-center">
            <span className="font-primary-font font-semibold text-sm md:text-lg xl:text-xl 2xl:text-3xl">{item.percentage}</span>
            <div className={`w-3 md:w-6 xl:w-10 2xl:w-15 ${item.height} ${item.color}  shadow-md`} />
            <p className="text-[9px] md:text-sm md:font-semibold lg:text-lg xl:text-xl 2xl:text-3xl text-center font-primary-font">{item.title}</p>
          </div>
        ))}




      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-b from-neutral-700 to-neutral-800 p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-100 mb-2">
              {item.icon} {item.title}
            </h3>
            <p className="text-gray-200 text-sm lg:text-base xl:text-xl 2xl:text-2xl">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Notícias */}
      <div>
        <h3 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-100 mb-4">📰 Notícias Relacionadas</h3>
        <ul className="space-y-4 flex flex-col md:flex-row gap-5 xl:gap-8 justify-center 2xl:justify-evenly">
          {newsData.map((item, index) => (
            <li key={index} className="bg-white p-4 h-44 md:h-72  rounded-lg shadow hover:shadow-md transition">
              <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer" className="flex justify-center size-full">
                <img src={item.image} alt="" title={item.title} className="object-cover" />
              </a>

            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center py-7">
        <ButtonAction />
      </div>
    </div>
  );
};


