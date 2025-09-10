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
    <section className="py-16 bg-gradient-to-b from-0% from-basecolor to-60% to-basecolor-fourth">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-[40px] xl:text-6xl text-blue-100 font-bold font-primary-font text-center mb-6">Por que utilizar a Allchat é fundamental?</h2>
        <p className="text-lg md:text-3xl xl:text-5xl text-blue-300 font-medium font-secondary-font text-center mb-12">Aumente a Produtividade</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:hover:*:opacity-40">
          {features.map((feature, index) => (
            <div key={index} className="bg-gradient-to-b from-basecolor-third to-basecolor p-6 rounded-lg shadow-md transition md:hover:opacity-100! md:hover:-translate-y-4 md:hover:scale-110 duration-500 ease-in-out md:group md:hover:from-white! md:hover:to-blue-100!  md:hover:shadow-md">
              <h2 className="text-4xl md:text-6xl text-blue-100 mb-4 font-bold md:group-hover:text-basecolor-third font-tertiary-font">{feature.icon}</h2>
              <h3 className="text-xl lg:text-2xl xl:text-3xl text-blue-100 font-bold mb-2 md:group-hover:text-basecolor-third font-primary-font">{feature.title}</h3>
              <p className="text-gray-200 md:group-hover:text-gray-700 font-secondary-font">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
