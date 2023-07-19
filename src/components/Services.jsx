import { HiComputerDesktop, HiCommandLine, HiDevicePhoneMobile } from 'react-icons/hi2'


const services = [
  {
    title: "Web",
    description: 
    "Desenvolvimento de sites e sistemas web estaticos e dinamicos como React.js, Next.js, HTML5 CSS3, Bootstrap5",
    icon: <HiComputerDesktop className="h-12 w-12" />,
  },
  {
    title: "Sistemas",
    description: 
    "Desenvolvimento de sistemas e APIs REST com Node.js e GraphQL",
    icon: <HiCommandLine className="h-12 w-12" />,
  },
  {
    title: "Mobile",
    description: 
    "Desenvolvimento de aplicativos Android e iOS",
    icon: <HiDevicePhoneMobile className="h-12 w-12" />,
  },
]

const Services = () => {
  return (
    <section className="container mx-auto my-12 max-w-4xl p-4">
      <div className="p-4 text-center">
        <p className="text-sm font-semibold uppercase text-blue-900">
          O que faco de Melhor
        </p>

        <h2 className='mb-2 font-bold text-blue-900'>
          <span className="mr-2 font-headline text-3xl">Meus</span>
          <span className="font-handwriting text-4xl">Servicos</span>
        </h2>

        <p className="text-sm text-gray-600">
          Posso atender uma gama completa de servicos, do front-end ao back-end com banco de dados e sistemas.
        </p>
      </div>

      <div className="mt-6 flex flex-col gap-2 md:flex-row">
        {
          services.map((service, index) => (

            <div key={`service-${index}`}  className="basis-1/3 rounded-lg bg-blue-500 p-4 text-white">

              <div className="mb-2">{service.icon}</div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="text-sm">{service.description}</p>

            </div>

          ))
        }
      </div>

    </section>
  )
}

export default Services