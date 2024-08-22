import heroImg from '../../assets/hero.svg';
import Type from './Type';
import Info from './Info';


const Hero = () => {
  return (
    <section id='hero' className='py-24 font-sans'>
      <div className='mt-12 align-element grid lg:grid-cols-2 items-center gap-10'>
        <article>
          <h1 className="pb-2 heading md:text-5xl text-4xl"
          >
            Hi There!{" "}
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
          </h1>
          <h1 className="mt-8 md:text-6xl text-5xl">
            I'M 
            <strong> RUXIN MA</strong>
          </h1>

          <div className='mt-12 lg:mt-20 text-4xl text-indigo-600 capitalize font-semibold'>
            <Type />
          </div>
        </article>
        
        <article className="flex justify-center lg:justify-start">
          <img 
            src={heroImg} 
            alt="Hero"
            className='h-80 md:h-80 object-contain'
          />
        </article>
      </div>
      <Info />
    </section>
  );
};

export default Hero;