import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  return (
    <section className="container mx-auto max-w-4xl p-4 py-8">

      <div className="relative p-4 mb-4 text-center">
        <h2 className='relative z-50 mb-2 font-bold'>
          <span className="mr-2 font-headline text-4xl text-gray-800">
            Depoimento de
          </span>
          <span className="font-handwriting text-5xl text-blue-800">Clientes</span>
        </h2>
        <div className="absolute left-1/2 z-0 top-3 h-10 w-10 rounded-lg bg-blue-400/10"></div>
      </div>

      <figure>
        <FaQuoteLeft className='h-8 w-8 text-gray-600' />
        <blockquote className='mb-6'>
          <p className="text-2xl text-gray-900">
            Ze do Bar entrogou um projeto no praze e executando corretamente conforme combinado no nosso contrato.
            Recomento do trabalho dele para todos que desejam um trabalho serio.
          </p>
        </blockquote>

        <figcaption className='flex items-center justify-center gap-2'>
          <img 
            className='h-10 w-10 rounded-full'
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            alt='Joao ze'
          />

          <div className="flex items-center divide-x-2 divide-gray-200">
            Joao da SIlva sauro
          </div>
          <div className="pl-3 text-sm font-light text-gray-500">
            | Empresa.com
          </div>

        </figcaption>
      </figure>
    </section>
  )
}

export default Testimonials