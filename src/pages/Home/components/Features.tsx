export function Features() {
  const features = [
    {
      title: "Aumente a Produtividade",
      description: "Ao automatizar tarefas repetitivas, seus colaboradores podem se concentrar em atividades estratégicas e de maior valor agregado. Nosso chatbot lida com consultas frequentes e tarefas administrativas, liberando tempo para sua equipe se dedicar ao que realmente importa.",
      icon: "1"
    },
    {
      title: "Melhore a Eficiência",
      description: "Nossos chatbots são capazes de integrar diretamente com sistemas CRM e ERP, garantindo que as informações sejam atualizadas em tempo real e acessíveis para toda a equipe. Isso reduz erros, evita retrabalho e acelera os processos internos",
      icon: "2"
    },
    {
      title: "Atendimento 24/7",
      description: "Os chatbots oferecem suporte contínuo aos seus clientes, independentemente do horário. Isso significa que as demandas são atendidas rapidamente, melhorando a satisfação do cliente e garantindo que sua equipe receba apenas as questões mais complexas.",
      icon: "3"
    },
    {
      title: "Reduza Custos Operacionais",
      description: "Automatizar a comunicação e processos internos ajuda a reduzir custos operacionais. Com o Allchat Business, sua empresa economiza tempo e recursos, enquanto mantém um alto nível de eficiência e produtividade.",
      icon: "4"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-0% from-basecolor to-60% to-basecolor-fourth font-primary-font">
      <div className="container mx-auto px-4">
        <h2 className="text-[40px] text-blue-100 font-bold text-center mb-6">Por que utilizar a Allchat é fundamental?</h2>
        <p className="text-3xl text-blue-300 font-medium text-center mb-12">Aumente a Produtividade</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 hover:*:opacity-40">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-b from-basecolor-third to-basecolor p-6 rounded-lg shadow-md transition hover:opacity-100! hover:-translate-y-4 hover:scale-110 duration-500 ease-in-out group hover:from-white! hover:to-blue-100!  hover:shadow-md">
              <h2 className="text-6xl text-blue-100 mb-4 font-bold group-hover:text-basecolor-third">{feature.icon}</h2>
              <h3 className="text-xl text-blue-100 font-bold mb-2 group-hover:text-basecolor-third">{feature.title}</h3>
              <p className="text-gray-200 group-hover:text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
