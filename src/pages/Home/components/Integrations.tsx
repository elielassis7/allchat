import { useEffect, useReducer, useRef } from 'react';
import ImageIntegration from '../assets/image-integrations.png';
import { initialState, reducer } from '../reducer/actionIntegration';
import { ButtonAction } from './ButtonAction';

export function Integrations() {
  const visualItems = [
    { position: 'right-[10%] top-[40%]', bgColor: 'bg-cyan-700', hover: 'hover:bg-cyan-700/80', animation: 'animate-site' },
    { position: 'left-[15%] top-[60%]', bgColor: 'bg-[#5FFC7B]', hover: 'hover:bg-[#5FFC7B]/80', animation: 'animate-zap' },
    { position: 'right-[35%] top-[65%]', bgColor: 'bg-[#E1306C]', hover: 'hover:bg-[#E1306C]/80', animation: 'animate-insta' },
    { position: 'left-[10%] top-[20%]', bgColor: 'bg-[#3b5998]', hover: 'hover:bg-[#3b5998]/80', animation: 'animate-face' },
    { position: 'right-[20%] top-[5%]', bgColor: 'bg-[#A334FA]', hover: 'hover:bg-[#A334FA]/80', animation: 'animate-msg' },
  ];

  const [state, dispatch] = useReducer(reducer, initialState);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        dispatch({ type: 'RESET' }); // desativa todos
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div>

      <div className="flex flex-row xl:justify-center max-w-screen h-[450px] lg:h-[600px] overflow-hidden bg-basecolor-fourth font-primary-font">


        <div className="w-1/2 md:w-1/3 px-3 md:px-6 py-6 md:py-8 lg:max-w-md">
          <div className="h-full w-full rounded-tr-[100px] rounded-br-[100px] shadow-md bg-basecolor-third flex flex-col items-center justify-center gap-6 transition duration-300">

            <h1 className="text-xl md:text-3xl lg:text-4xl -translate-x-3 font-bold text-transparent bg-gradient-to-r from-cyan-300 via-white to-cyan-200 bg-clip-text">
              Integrações
            </h1>

            <p className="text-center text-gray-200 text-sm md:text-base lg:text-lg font-medium max-w-[280px]">
              Nós integramos com as principais redes sociais
            </p>

            <img
              src={ImageIntegration}
              alt="Robô de integração"
              className="w-40 h-40 object-contain"
            />

            <div className='-translate-y-2 -translate-x-2 lg:-translate-y-0 lg:-translate-x-0'>
              <ButtonAction />
            </div>


          </div>
        </div>


        <div className="w-1/2 md:w-2/3 grid grid-cols-2 grid-rows-3 p-6 md:flex *:h-[70px] md:*:h-[90px] lg:*:h-[120px] *:w-[70px] md:*:w-[90px] lg:*:w-[120px] *:rounded-full *:flex *:items-center *:justify-center relative md:*:absolute *:px-3 *:text-xl *:hover:[animation-play-state:paused] lg:max-w-7xl">

          <img
            src="https://allchatbusiness.com.br/wp-content/uploads/2023/09/LOGO-VERTICAL.png"
            alt=""
            className="invisible md:visible left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-auto! h-[100px]! rounded-none! absolute! animate-pulsar"
          />
          <img
            src="https://allchatbusiness.com.br/wp-content/uploads/2023/09/LOGO-VERTICAL.png"
            alt=""
            className="invisible md:visible left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-auto! h-[100px]! rounded-none!"
          />

          {visualItems.map((item, index) => {
            const isActive = state[index].active;

            return (
              <div
                key={index}
                ref={containerRef}
                onClick={() => dispatch({ type: 'TOGGLE', index })}
                className={`transition-all duration-300 ease-out
                  ${item.position} ${item.bgColor} ${item.hover} text-gray-100 md:
                  ${item.animation} max-lg:animate-none
                  ${isActive ? 'absolute scale-105 rounded-md! w-[200px]! h-[200px]! z-30! animate-none!' : 'rounded-full! scale-100'}
                  col-span-1 row-span-1 md:flex items-center justify-center`
                }
              >
                {isActive ? (
                  <div className="p-4 text-center">
                    <strong >{state[index].title}</strong>
                    <p>{state[index].content}</p>
                  </div>
                ) : (
                  state[index].label
                )}
              </div>
            );
          })}


        </div>

      </div>
    </div>
  )
}
