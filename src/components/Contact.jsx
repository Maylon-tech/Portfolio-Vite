import { HiOutlineEnvelope, HiOutlineMapPin, HiCheckCircle } from "react-icons/hi2"
import { FaSpinner } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'

import { useRef, useState } from "react"
import emailjs from '@emailjs/browser'

const contacts = [
  {
    name: "WhatsApp",
    description: "+81 9988 7755",
    link: "",
    icon: <FaWhatsapp className="h-10 w-10" />,
  },
  {
    name: "Email",
    description: "Jose88apego@gmail.com",
    link: "",
    icon: <HiOutlineEnvelope className="h-10 w-10" />,
  },
  {
    name: "Sao Paulo",
    description: "Centro, 443",
    link: "",
    icon: <HiOutlineMapPin className="h-10 w-10" />,
  },
]



const Contact = () => {
  const form = useRef(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    if(!form.current) return
    setLoading(true)
    emailjs
      .sendForm(
        'service_t6wh83b', 
        'template_mwugqjh', 
        form.current, 
        'BjqqEP0Hvm1wuA12d'
        )
      .then((result) => {
          setSuccess(true)
          setLoading(false)
          console.log(result.text);
      }, (error) => {
          setError(true)
          setLoading(false)
          console.log(error.text);
      });
  };



  return (
    <section id="contact" className="bg-blue-500 text-white">
        <div className="container mx-auto max-w-4xl p-4 py-8">
          <div className="mb-6">
            <h2 className="z-50 mb-2">
              <span className="mr-2 font-headline text-4xl font-bold">
                Fale
              </span>
              <span className="font-handwriting text-5xl">Comigo</span>
            </h2>
            <p className="text-md">
              Entre em contato por formulario ou WhatsApp, como certeza irei te ajudar.
            </p>
          </div>

          <div className="flex flex-col gap-6 md:flex-row">
            <div className="basis-1/2">
              <form ref={form} onSubmit={sendEmail}> 

                <div className="mb-4">
                  <label 
                    htmlFor="message" 
                    className="mb-2 block ps-4 font-headline font-semibold"
                  >
                    Mensagem:
                  </label>
                  <textarea 
                    name="message" 
                    id="message" 
                    className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none"
                    required
                  />
                </div>

                <div className="mb-6 flex flex-col gap-4 md:flex-row">
                  <div className="flex-grow">
                    <label 
                      htmlFor="fullname" 
                      className="mb-2 block ps-4 font-headline font-semibold"
                    >
                      Seu nome:
                    </label>
                    <input 
                      type="text" 
                      className="w-fll rounded-lg border border-white bg-transparent p-2 outline-none"
                      name="fullname"
                      id="fullname"
                      required 
                    />
                  </div>

                  <div className="flex-grow">
                    <label 
                      htmlFor="email" 
                      className="mb-2 block ps-4 font-headline font-semibold"
                    >
                      Seu email:
                    </label>
                    <input 
                      type="email" 
                      className="w-fll rounded-lg border border-white bg-transparent p-2 outline-none"
                      name="email"
                      id="email"
                      required 
                    />
                  </div>
                </div>

                <div className="">
                  <button 
                  type="submit"
                  disabled={loading}
                  className="button flex items-center gap-2 text-blue-700 bg-white p-3"
                  >
                    {loading && <FaSpinner className="h-4 w-4 animate-spinn" />}
                    {success && <HiCheckCircle className="h-4 w-4" />}
                    Enviar Mensagem 
                  </button>
                  
                  {
                    error && (
                      <p className="mt-2">
                        Ocorreu um erro ao enviar a mensagem, tente novamente.
                      </p>
                    )
                  }
                </div>
              </form>.
            </div>

            <div className="basis-1/3">
              {
                contacts.map((contact, index) => (
                  <div 
                    className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
                    key={`contact-${index}`}
                    >
                    {contact.icon}
                    <div className="">
                      <p className="font-headline font-semibold">{contact.name}</p>
                      <a 
                      href={contact.link} 
                      className="text-gray-300 underline underline-offset-2"
                      target="_blank" 
                      rel="noreferrer"
                      >
                        {contact.description}
                      </a>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact