import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import PlanoG from './assets/planoG.png'
import PlanoM from './assets/planoM.png'
import PlanoP from './assets/planoP.png'

type Plano = {
  image: string
  nome: string
  descricao: string
  preco: string
  usuarios: number
  conexoes: number
  departamentos: number
  recursos: string[]
}

const planos: Plano[] = [
  {
    image: PlanoP,
    nome: "Plano Essencial",
    descricao: "Ideal para pequenos negócios",
    preco: "R$ 389,70/mês",
    usuarios: 2,
    conexoes: 1,
    departamentos: 2,
    recursos: [
      "Marcadores",
      "Atributos Personalizados",
      "Relatórios de Acompanhamento",
      "Automação e respostas automáticas",
    ],
  },
  {
    image: PlanoM,
    nome: "Plano Expert",
    descricao: "Ideal para Empresas de Médio Porte",
    preco: "R$ 849,99/mês",
    usuarios: 6,
    conexoes: 3,
    departamentos: 2,
    recursos: [
      "Marcadores",
      "Atributos Personalizados",
      "Relatórios de Acompanhamento",
      "Automação e respostas automáticas",
      "Transcrição de áudio - Privada",
      "Integrações via webhook",
    ],
  },
  {
    image: PlanoG,
    nome: "Plano Plus",
    descricao: "Ideal para Empresas de Grande Porte",
    preco: "R$ 1.599,90/mês",
    usuarios: 10,
    conexoes: 5,
    departamentos: 4,
    recursos: [
      "Marcadores",
      "Atributos Personalizados",
      "Relatórios de Acompanhamento",
      "Automação e respostas automáticas",
      "Transcrição de áudio - Privada",
      "Integrações via webhook",
      "Integrações via API",
      "Agente IA - Opcional",
    ],
  },
]

// helper para transformar o texto do preço em número (ex: "R$ 1.599,90/mês" -> 1599.9)
function parsePreco(preco: string) {
  const cleaned = preco.replace(/[^\d.,]/g, ""); // mantém dígitos, pontos e vírgulas
  const removedDots = cleaned.replace(/\./g, ""); // remove separador de milhar
  const normalized = removedDots.replace(",", "."); // transforma vírgula em ponto
  const n = Number(normalized);
  return Number.isNaN(n) ? 0 : n;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
}

export function OurPlans() {
  return (
    <div className="min-h-screen 2xl:min-h-[80vh] bg-gradient-to-br from-basecolor via-basecolor-second to-basecolor-third text-white p-3 md:px-6 py-14">
      <h1 className="text-4xl xl:text-5xl text-indigo-200 font-extrabold text-center mb-12 tracking-tight font-primary-font">
        Nossos Planos
      </h1>

      <div className="grid md:grid-cols-3 2xl:max-w-[1536px] 2xl:mx-auto gap-5 lg:gap-6 md:mx-2 lg:mx-8">
        {planos.map((plano, index) => (
          <motion.div
            key={plano.nome}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gradient-to-t from-neutral-950 via-neutral-700 to-neutral-800 relative overflow-hidden max-w-72 xl:max-w-[350px] mx-auto rounded-xl shadow-lg p-2 md:p-6 lg:hover:scale-[1.02] lg:hover:shadow-xl transition-transform duration-300"
          >
            <img src={plano.image} alt="" className="absolute w-full h-auto opacity-40 z-0 object-cover object-top top-0 left-0" />
            <h2 className="relative text-xl lg:text-3xl font-bold mb-2 lg:mb-3 xl:mb-5 text-indigo-50 z-10 font-primary-font">{plano.nome}</h2>
            <p className="relative font-semibold text-gray-300 mb-4 z-10 text-sm font-secondary-font">{plano.descricao}</p>
            <p className="text-3xl font-bold text-indigo-300 mb-4 font-tertiary-font">{plano.preco}</p>
            <ul className="text-sm text-gray-200 mb-6 space-y-1 font-secondary-font">
              <li>👥 {plano.usuarios} usuários</li>
              <li>💬 {plano.conexoes} conexão(ões) WhatsApp</li>
              <li>🏢 {plano.departamentos} departamentos</li>
              {plano.recursos.map((recurso, i) => (
                <li key={i}>✅ {recurso}</li>
              ))}
            </ul>

            {/* botão redireciona para /checkout passando name e price via state */}
            <Link
              to="/checkout"
              state={{ product: { name: plano.nome, price: parsePreco(plano.preco) } }}
              className="w-full inline-block text-center bg-emerald-600 hover:bg-emerald-700 object-bottom text-white font-primary-font py-2 rounded-lg font-medium transition-colors duration-300"
              aria-label={`Comprar ${plano.nome}`}
            >
              Comprar Agora
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center p-9">
        <p className="text-base text-gray-300 font-secondary-font">
          * Para grandes empresas que precisam de robustez, flexibilidade e máxima performance. Possuímos valres adicionais:

          <br />Conexão adicional: R$ 99,99

          <br />Usuário adicional: R$ 80,00
        </p>
      </div>
    </div>
  )
}


