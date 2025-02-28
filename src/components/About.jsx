

const About = () => {
  return (
    <section className="container mx-auto border-red-600 max-w-5xl p-4">
      <div className=" relative p-4 text-center">      
        <h2 className='text-blue-800 font-bold relative z-10'>
          <span className="mr-2 font-headline text-3xl">Sobre</span>
          <span className="font-handwriting text-4xl">Mim</span>
        </h2>
        <p className="relative text-sm text-gray-600">
          Tenho mais de 15 projetos  executados e gostaria que o proximo seja o seu.
        </p>

        <div className="absolute left-1/2 top-3 h-10 w-10 rounded-lg bg-blue-100/40"></div>
      </div>

      <div className="mx-auto mt-20 max-w-lg">
        <div className="relative w-full rounded-lg bg-blue-100 p-4 ps-20 md:h-64 md:ps-48">

          <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">
            <p className="font-handwriting text-lg font-bold">Hello,</p>
            <p className="">
              <span className="mr-1">Call me</span>
              <span className="font-headline font-bold uppercase text-blue-800">Mailon</span>
            </p>

            <table className="mt-4 w-full text-sm">
              <tbody>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Age:
                  </td>
                  <td>37</td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Phone:
                  </td>
                  <td>
                    <a href="tel+99 999 999999" className="underline hover:text-blue-700">
                      +81 70 8329 6520
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Email:
                  </td>
                  <td>
                    <a href="gmail: teckflow259@gmail.com" className="underline hover:text-blue-700">
                      techflow258@gmail.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Location:
                  </td>
                  <td>
                    <a href="#" className="underline hover:text-blue-700">
                      Hekinan, Aichi-ken 
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="font-headline font-bold uppercase text-blue-900">
                    Available:
                  </td>
                  <td>
                   <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                   </span>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

          <div className="absolute -left-2 -top-4 h-24 rounded-lg bg-gray-400 
            bg-[url(https://images.unsplash.com/photo-1583864697784-a0efc8379f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80
            )] bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56">
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About