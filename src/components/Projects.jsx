import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2'

const projects = [
  {
    title: "Project 1",
    description: "Descricao do projeto 1",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    link: "#",
    colSpan: "col-span-1",
  },
  {
    title: "Project 2",
    description: "Descricao do projeto 2",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN5c3RlbSUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    link: "#",
    colSpan: "col-span-1 md:col-span-2",
  },
  {
    title: "Project 3",
    description: "Descricao do projeto 3",
    image: "https://images.unsplash.com/file-1662566326028-7013d2f857a6image?dpr=2&auto=format&fit=crop&w=416&q=60",
    link: "#",
    colSpan: "col-span-1",
  },
  {
    title: "Project 4",
    description: "Descricao do projeto 4",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHN5c3RlbSUyMGNvbXB1dGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    link: "#",
    colSpan: "col-span-1",
  },
  {
    title: "Project 4",
    description: "Descricao do projeto 4",
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxzeXN0ZW0lMjBjb21wdXRlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    link: "#",
    colSpan: "col-span-1",
  },
]

const Projects = () => {
  return (
    <section  className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className='relative z-50 mb-2 text-white text-center'>
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfolio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que ja realizei ao longo da trajetoria como Programador Front-End 
            </p>    

            <div className="absolute left-1/2 top-3 h-10 w-10 rounded-lg bg-blue-100/40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {
              projects.map((project, index) => (
                <div 
                  key={`project-${index}`} 
                  className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                  style={{ backgroundImage: `url('${project.image}')`}}
                >
                  <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 
                    transition-opacity group-hover:opacity-100">

                    <h4 className="font-headline text-lg font-semibold">{project.title}</h4>
                    <p className="mb-4 text-sm">{project.description}</p>

                    <a href={project.link} target='_blank' rel="noreferrer">
                      <HiOutlineArrowTopRightOnSquare className="h-6 w-6" />
                    </a>

                  </div>

                </div>
              ))
            }
          </div>
        </div>
    </section>
  )
}

export default Projects