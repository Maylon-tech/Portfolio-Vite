import { HiAcademicCap, HiCodeBracketSquare } from 'react-icons/hi2'

const educations = [
  {
    name: "Curso Formacao FullStack Javascript | Thiago Medeiros",
  },
  {
    name: "Curso de Web Moderno | Udemy - Leitao",
  },
]

const skills = [
  {
    name: "HTML5/CSS3",
    icon: "images/html.svg",
    level: 80,
  },
  {
    name: "Javascript",
    icon: "images/javascript.svg",
    level: 65,
  },
  {
    name: "React.js",
    icon: "images/react.svg",
    level: 50,
  },
  {
    name: "Node.js",
    icon: "images/node.svg",
    level: 30,
  },
]



const Skills = () => {
  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
      
        <div className="relative p-4 mb-4 text-center">
          <h2 className='relative z-50 mb-2 text-white text-center'>
            <span className="mr-2 font-headline text-4xl font-bold">
              Educacao &
            </span>
            <span className="font-handwriting text-5xl">Skills</span>
          </h2>
          <p className="relative text-md text-gray-700">
            Front-End Developer | React.js | React Native | Node.js | Javascript
          </p>    

          <div className="absolute left-1/2 top-3 h-10 w-10 rounded-lg bg-blue-100/40"></div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row">

          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-extrabold text-gray-700">
              <HiAcademicCap className='h-8 w-8 text-blue-600' />
              Educacao
            </h3>

            {
              educations.map((education, index) => (
                <div 
                  key={`education-${index}`} 
                  className="mb-6 rounded-lg bg-white p-4 text-md font-semibold"
                >
                  {education.name}
                </div>
              ))
            }
          </div>

          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-2xl font-extrabold text-gray-700">
              <HiCodeBracketSquare className='h-8 w-8 text-blue-600' />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {
                skills.map((skill, index) => (
                  <div 
                    key={`skill-${index}`} 
                    className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className='h-10 w-10 rounded'
                      />
                    </div>
                    <div className="w-full flex-grow">
                      <h4 className="font-headline text-gray-900">
                        {skill.name}
                      </h4>
                      <div className="h-2.5 w-full rounded-full bg-white">
                        <div className="h-2.5 rounded-full bg-blue-600" style={{ width: `${skill.level}%`}}></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

      </div>
        
    </section>
  )
}

export default Skills