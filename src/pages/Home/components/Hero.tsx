import HeroImg from '../assets/allchat-hero-desktop.png';
import { ButtonAction } from './ButtonAction';

export function Hero() {
  return (
    <section className="relative bg-basecolor text-white w-full flex items-center justify-center">
      <div className="container w-full ">
        <img src={HeroImg} alt="" className='w-full h-auto' />

        <div className='absolute bottom-0 md:bottom-[50px] lg:bottom-[60px] left-[20px] md:left-[50px] lg:left-[150px]'>
          <ButtonAction />
        </div>


      </div>
    </section>
  );
}
