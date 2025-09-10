import { BsClipboardCheck, BsPersonWorkspace } from "react-icons/bs";
export function Consultancy() {
  return (
    <section className="w-full bg-basecolor text-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 mt-5">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl  font-bold text-indigo-200">
            Consultoria
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Soluções seguras, eficientes e alinhadas às necessidades do seu negócio.
          </p>
        </header>


        {/* Descrição do Serviço + tabela */}
        <div className="bg-basecolor-third rounded-lg p-6 mb-6 shadow">
          <h2 className="text-2xl text-white font-semibold mb-4">Descrição do Serviço</h2>

          <div className="mb-4">
            <h3 className="font-semibold mb-2">Configuração da API Oficial do WhatsApp (Meta Business Platform)</h3>
            <p className="text-gray-200 leading-relaxed mb-3">
              Configuração inicial completa da API Oficial do WhatsApp, viabilizando o uso da conta comercial validada e
              homologada pela Meta. Processo obrigatório para operar com a API Oficial de forma segura e conforme as
              diretrizes da plataforma.
            </p>

            <h4 className="font-semibold mb-2">Etapas e Requisitos Técnicos</h4>
            <ul className="list-disc list-inside text-gray-200 mb-3 space-y-1">
              <li>
                <strong>Criação da Fan Page (Facebook Business)</strong> — criação e vínculo à empresa para verificação.
              </li>
              <li>
                <strong>Aprovação da Fan Page</strong> — configuração completa (logotipo, descrição, categoria, site e
                contatos) e submissão para análise pela Meta.
              </li>
              <li>
                <strong>Criação do App no Facebook Developers</strong> — app para geração de token e configuração de
                permissões (Business Management, WhatsApp Business API, Webhooks, etc.).
              </li>
              <li>
                <strong>Ativação de 1 número de WhatsApp</strong> — ativação e homologação do número. Obs: caso seja
                necessário mais números, adicionar R$ 500,00 por número.
              </li>
              <li>Todos os custos de disparo de mensagens são de responsabilidade da contratante.</li>
            </ul>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-gray-300 border-b border-gray-700">
                  <th className="py-2 px-3">#</th>
                  <th className="py-2 px-3">Item</th>
                  <th className="py-2 px-3">Qtd</th>
                  <th className="py-2 px-3">Tarifa</th>
                  <th className="py-2 px-3">Taxa</th>
                  <th className="py-2 px-3 text-right">Quantia</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-200 border-b border-gray-800">
                  <td className="py-3 px-3">1</td>
                  <td className="py-3 px-3">Configuração da API Oficial do WhatsApp</td>
                  <td className="py-3 px-3">1 Unidade</td>
                  <td className="py-3 px-3">R$ 3.500,00</td>
                  <td className="py-3 px-3">0%</td>
                  <td className="py-3 px-3 text-right">R$ 3.500,00</td>
                </tr>
                <tr>
                  <td colSpan={5} className="py-3 px-3 text-gray-300 font-semibold text-right">Sub Total</td>
                  <td className="py-3 px-3 text-right text-gray-200">R$ 3.500,00</td>
                </tr>
                <tr>
                  <td colSpan={5} className="py-3 px-3 text-gray-300 font-semibold text-right">Total</td>
                  <td className="py-3 px-3 text-right text-indigo-300 font-bold">R$ 3.500,00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Escopo do Serviço */}
        <div className="bg-basecolor-third rounded-lg p-6 mb-6 shadow">
          <h2 className="text-2xl text-white font-semibold mb-2">Escopo do Serviço</h2>
          <p className="text-gray-200 leading-relaxed mb-3">
            O serviço contempla a configuração inicial completa da API Oficial do WhatsApp, incluindo:
          </p>
          <ul className="list-disc list-inside text-gray-200 space-y-1 mb-3">
            <li>Criação e configuração da Fan Page no Facebook vinculada à empresa;</li>
            <li>Submissão da página para análise e aprovação pela Meta;</li>
            <li>Criação e configuração do aplicativo no Meta for Developers com permissões necessárias;</li>
            <li>Geração do token de acesso e vinculação ao número de telefone validado;</li>
            <li>Homologação final da conta para uso da API Oficial.</li>
          </ul>

          <p className="text-sm text-gray-400">
            Observações: este escopo não inclui integrações com plataformas externas, automações ou desenvolvimentos
            customizados, que serão tratados como serviços adicionais. Prazo médio estimado: 30 dias a contar do
            recebimento de todas as informações e acessos necessários.
          </p>
        </div>

        {/* Responsabilidades do Cliente */}
        <div className="bg-basecolor-third rounded-lg p-6 mb-6 shadow">
          <h2 className="text-2xl text-white font-semibold mb-2">Responsabilidades do Cliente</h2>
          <ul className="list-disc list-inside text-gray-200 space-y-1">
            <li>Disponibilizar acesso administrativo ao Facebook Business Manager;</li>
            <li>Fornecer CNPJ ativo e dados empresariais válidos;</li>
            <li>Disponibilizar e-mail corporativo vinculado ao domínio da empresa;</li>
            <li>Apresentar documento que comprove a propriedade do número de telefone a ser utilizado;</li>
            <li>Atender às solicitações de informações e documentos no prazo solicitado para não impactar o cronograma;</li>
            <li>Garantir que os dados fornecidos sejam corretos e atualizados.</li>
          </ul>
        </div>

        {/* Investimento */}
        <div className="bg-basecolor-third rounded-lg p-6 mb-6 shadow">
          <h2 className="text-2xl text-white font-semibold mb-2">Investimento</h2>
          <p className="text-gray-200 mb-2">
            <strong>Valor Total:</strong> R$ 3.500,00
          </p>
          <p className="text-gray-200 mb-2">
            <strong>Condições de Pagamento:</strong> 50% no início e 50% na entrega
          </p>
          <p className="text-gray-200">
            <strong>Formas de Pagamento:</strong> Pix ou Boleto
          </p>
        </div>

        {/* Prazo de Execução */}
        <div className="bg-basecolor-third rounded-lg p-6 mb-10 shadow">
          <h2 className="text-2xl text-white font-semibold mb-2">Prazo de Execução</h2>
          <p className="text-gray-200 leading-relaxed">
            Prazo estimado para conclusão: 30 a 45 dias conforme envio das informações. O prazo poderá ser ajustado em
            caso de necessidade técnica ou pendência de informações por parte do cliente.
          </p>
        </div>

        {/* CTA */}
        <div className="grid md:grid-cols-3 gap-4 items-center">
          <div className="flex items-start gap-4">
            <BsClipboardCheck className="text-3xl text-blue-300" />
            <div>
              <h3 className="font-semibold text-blue-100">Proposta Técnica Completa</h3>
              <p className="text-gray-300 text-sm">Inclui detalhamento das etapas e requisitos.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <BsPersonWorkspace className="text-3xl text-blue-300" />
            <div>
              <h3 className="font-semibold text-blue-100">Equipe Especializada</h3>
              <p className="text-gray-300 text-sm">Profissionais com experiência em integrações WhatsApp/Meta.</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <a
              href="https://crm.allchat.com.br/proposal/34/3ad794782b5226374f043dc357b2b6a5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-3 rounded-full font-medium"
            >
              Ver proposta completa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}