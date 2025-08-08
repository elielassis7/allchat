import { motion } from "framer-motion"

type Plano = {
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
    <div className="min-h-screen bg-gradient-to-br from-basecolor via-basecolor-second to-basecolor-third font-primary-font text-white p-6 py-14">
      <h1 className="text-4xl font-extrabold text-center mb-12 tracking-tight">
        Nossos Planos
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {planos.map((plano, index) => (
          <motion.div
            key={plano.nome}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-[1.02] hover:shadow-xl transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2 text-blue-400">{plano.nome}</h2>
            <p className="text-gray-300 mb-4">{plano.descricao}</p>
            <p className="text-3xl font-bold text-blue-500 mb-4">{plano.preco}</p>
            <ul className="text-sm text-gray-200 mb-6 space-y-1">
              <li>👥 {plano.usuarios} usuários</li>
              <li>💬 {plano.conexoes} conexão(ões) WhatsApp</li>
              <li>🏢 {plano.departamentos} departamentos</li>
              {plano.recursos.map((recurso, i) => (
                <li key={i}>✅ {recurso}</li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors duration-300">
              Comprar Agora
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


