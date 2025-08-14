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
    height: "h-[50px]"
  },
  {
    title: "Consumidores que compram via apps",
    color: "bg-[#10b981]",
    percentage: "74%",
    height: "h-[74px]"
  },
  {
    title: "Empresas que usam chatbots",
    color: "bg-[#8b5cf6]",
    percentage: "80%",
    height: "h-[80px]"
  },
  {
    title: "Chatbots melhoram experiência",
    color: "bg-[#f59e0b]",
    percentage: "60%",
    height: "h-[60px]"
  },
  {
    title: "IA com conhecimento interno",
    color: "bg-[#ef4444]",
    percentage: "70%",
    height: "h-[70px]"
  }
]


export function AboutMarket() {
  return (
    <div className="bg-neutral-900 p-6 rounded-lg shadow-md max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-100 mb-4">📈 Panorama do Mercado: WhatsApp & Automação</h2>


      <div className="bg-gradient-to-t from-neutral-800 via-neutral-600 to-neutral-700 text-gray-300 p-4 h-[200px] flex flex-row justify-around items-end rounded-lg shadow mb-8">
        {/* <MarketChart />*/}

        {charts.map((item, index) => (
          <div key={index} className="flex flex-col w-20 justify-center items-center">
            <span>{item.percentage}</span>
            <div className={`w-6 ${item.height} ${item.color}  shadow-md`} />
            <p className="text-center">{item.title}</p>
          </div>
        ))}




      </div>

      {/* Métricas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-b from-neutral-700 to-neutral-800 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">🏢 Empresas e Comércio</h3>
          <p className="text-gray-200">
            O WhatsApp Business tem sido amplamente adotado por empresas no Brasil, desde pequenas empresas até grandes corporações. A plataforma facilita a comunicação direta com clientes e a gestão de pedidos, agendamentos e suporte ao cliente.
          </p>
        </div>
        <div className="bg-gradient-to-b from-neutral-700 to-neutral-800 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">🎧 Atendimento ao Cliente</h3>
          <p className="text-gray-200">
            Muitas empresas utilizam o WhatsApp para oferecer suporte ao cliente em tempo real, respondendo perguntas, resolvendo problemas e fornecendo informações sobre produtos e serviços.
          </p>
        </div>
        <div className="bg-gradient-to-b from-neutral-700 to-neutral-800 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-gray-100 mb-2">🛒 Vendas e Comércio</h3>
          <p className="text-gray-200">
            Restaurantes, lojas e serviços frequentemente utilizam o WhatsApp para receber pedidos, reservas e agendamentos, facilitando a gestão de vendas e a comunicação com clientes.
          </p>
        </div>
      </div>

      {/* Notícias */}
      <div>
        <h3 className="text-2xl font-bold text-gray-100 mb-4">📰 Notícias Relacionadas</h3>
        <ul className="space-y-4 flex flex-row gap-5">
          {newsData.map((item, index) => (
            <li key={index} className="bg-white p-4 h-[300px]  rounded-lg shadow hover:shadow-md transition">
              <a href={item.url} title={item.title} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-blue-700 hover:underline">
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


