
import { BiSolidConversation } from 'react-icons/bi';
import { BsClipboardCheck } from 'react-icons/bs';

export function Monitoring() {
  const items = [
    {
      id: 1,
      title: 'Monitoramento 2 VPS',
      qty: 2,
      tarifa: 250,
      taxa: '0%',
      quantia: 500,
      features: [
        'Monitoramento Contínuo de Recursos da VPS',
        'CPU: acompanhamento do uso e alertas sobre sobrecarga',
        'Memória RAM: monitoramento de consumo e performance',
        'Network: análise do tráfego de rede e identificação de anomalias',
        'Containers: verificação da saúde e disponibilidade dos serviços em containers',
        'HD/Disco: monitoramento do espaço e integridade do armazenamento',
        'Alertas Inteligentes via WhatsApp',
        'Apoio Técnico em Atualizações',
        'Manutenções Preventivas Agendadas',
      ],
    },
  ];

  const subtotal = items.reduce((s, it) => s + it.quantia, 0);

  return (
    <section className="w-full bg-basecolor text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <header className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-indigo-200">
            Monitoramento VPS
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            A AllChat oferece monitoramento contínuo e especializado para ambientes que exigem alta disponibilidade,
            estabilidade e segurança. Alertas instantâneos via WhatsApp e suporte técnico para atualizações e manutenções.
          </p>

          <p className="mt-4 text-sm text-gray-400 max-w-3xl mx-auto">
            Sob a liderança de Torres, especialista com mais de 20 anos de experiência em infraestrutura de TI, nossa equipe
            aplica boas práticas de monitoramento e gestão de ambientes produtivos.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: descrição e benefícios */}
          <div className="space-y-6">
            <div className="bg-basecolor-second rounded-lg p-6 shadow">
              <h2 className="text-xl font-semibold mb-3">O serviço inclui</h2>
              <ul className="list-disc list-inside text-gray-200 space-y-2">
                <li className="font-medium">Monitoramento Contínuo de Recursos da VPS</li>
                <li>CPU, Memória RAM, Network, Containers e HD/Disco com alertas e históricos</li>
                <li className="font-medium">Alertas Inteligentes via WhatsApp</li>
                <li>Suporte e orientação técnica para atualizações</li>
                <li>Manutenções preventivas agendadas para garantir estabilidade</li>
              </ul>
            </div>

            <div className="bg-basecolor-second rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold mb-2">Benefícios para sua empresa</h3>
              <ul className="text-gray-200 space-y-2">
                <li>✔️ Visibilidade total do ambiente em tempo real</li>
                <li>✔️ Atuação preventiva, evitando incidentes críticos</li>
                <li>✔️ Resposta rápida com alertas no WhatsApp</li>
                <li>✔️ Ambiente mais estável, seguro e eficiente</li>
              </ul>
            </div>

            <div className="bg-basecolor-second rounded-lg p-6 shadow">
              <h3 className="text-lg font-semibold mb-2">Observações</h3>
              <p className="text-gray-300">
                Não incluso correção de problema relacionado ao Setup Orion. Ativação do serviço em até 48 horas após contratação
                e liberação de acesso ao ambiente. Pacote mínimo de 3 meses.
              </p>
            </div>
          </div>

          {/* Right: tabela e CTA */}
          <aside className="bg-basecolor-third rounded-lg p-6 shadow space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-3">Proposta - Monitoramento VPS</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="text-sm text-gray-300 border-b border-gray-700">
                    <tr>
                      <th className="py-2 px-3">#</th>
                      <th className="py-2 px-3">Item</th>
                      <th className="py-2 px-3">Qtd</th>
                      <th className="py-2 px-3">Tarifa</th>
                      <th className="py-2 px-3">Taxa</th>
                      <th className="py-2 px-3 text-right">Quantia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((it) => (
                      <tr key={it.id} className="text-gray-200 border-b border-gray-800">
                        <td className="py-3 px-3">{it.id}</td>
                        <td className="py-3 px-3">{it.title}</td>
                        <td className="py-3 px-3">{it.qty} Unidade</td>
                        <td className="py-3 px-3">R$ {it.tarifa.toFixed(2)}</td>
                        <td className="py-3 px-3">{it.taxa}</td>
                        <td className="py-3 px-3 text-right">R$ {it.quantia.toFixed(2)}</td>
                      </tr>
                    ))}

                    <tr>
                      <td colSpan={5} className="py-3 px-3 text-gray-300 font-semibold text-right">Sub Total</td>
                      <td className="py-3 px-3 text-right text-gray-200">R$ {subtotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td colSpan={5} className="py-3 px-3 text-gray-300 font-semibold text-right">Total</td>
                      <td className="py-3 px-3 text-right text-indigo-300 font-bold">R$ {subtotal.toFixed(2)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-200 mb-2">Condições</h4>
              <p className="text-gray-300 text-sm">Sem taxa de setup. Forma de pagamento: PIX (CNPJ: 40.966.713/0001-29). Pagamento mensal. Pacote mínimo de 3 meses.</p>
            </div>

            <div className="flex flex-col gap-3">
              <a
                href="https://crm.allchat.com.br/proposal/25/eb85c28a510801a8153e67a069f32815"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-black px-5 py-3 rounded-full font-medium"
              >
                <BsClipboardCheck className="text-xl" /> Ver proposta completa
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-full font-medium"
              >
                <BiSolidConversation className="text-xl" /> Falar com especialista
              </a>
            </div>

            <div className="text-sm text-gray-400">
              <strong>Prazo de ativação:</strong> em até 48 horas após contratação e liberação de acesso ao ambiente.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
