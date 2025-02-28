import { HiDownload } from 'react-icons/hi' 

const Hero = () => {
  return (
    <section className="bg-gradient-to-tr from-black to-gray-700 text-white">
        <div className="container mx-auto max-w-4xl p-2 py-12 flex flex-col md:flex-row">

              <div className="basis-1/2">              
                <h1 className='mb-6'>
                    <span className='font-handwriting block text-3xl md:text-left'>Ola, me chamo</span>
                    <span className='font-headline text-5xl'>Mailon</span>
                    <span className='font-headline text-5xl font-light text-blue-500 ml-2'>Nemoto</span>
                </h1>
    
                <h2 className="font-semibold flex items-center gap-2">
                    <div className="h-1 w-12 roudned-full bg-blue-800"></div>
                    Desenvolvedor React.js Front-End
                </h2>
    
                <p className="text-gray-300 my-6">
                  Desenvolvedor Web cativado por criar experiencia de usuarios interativas e responsivas. Entregando com melhor qualidade servico.
                </p>
    
                <div className="flex items-center gap-2">
                  <a href="#" className="underline font-bold text-white">Fale Comigo!</a>
                  <span className="italic text-gray-500">ou</span>
                  <a href="#" className="button text-gray-500 hover:text-gray-950 flex items-center gap-3">
                    <HiDownload />
                    Baixe meu CV
                  </a>
                </div>
              </div>

              <div className="basis-1/2 text-white">
              
              </div>

        </div>
    </section>
  )
}

export default Hero