import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef, useState } from "react"
import "./Contact.css"
import type { FormErrors, Email } from "../../types/Email"
import { validate } from "../../utils/VerifyEmailVal"
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { FaEnvelope } from "react-icons/fa";
import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"

function Contact() {
  // Estados e Referências
  const [capValue, setCapValue] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const [errors, setErrors] = useState<FormErrors>({})
  const [emailValues, setEmailValues] = useState<Email>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setEmailValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validate(emailValues)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/lima-f@outlook.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(emailValues)
      });

      if (response.ok) {
        setSuccess(true);
        setEmailValues({ name: '', email: '', subject: '', message: '' });
        setCapValue(null);
        recaptchaRef.current?.reset();
        setTimeout(() => setSuccess(false), 8000);
      }
    } catch (error) {
      console.error("Erro no envio:", error);
    }
  }

  return (
    <div className="flex container mx-auto justify-center py-24 px-5 flex-col gap-20 select-none" id="contact">
      <AnimatedFadeIn>
        <div className="w-full bg-(--card-background) shadow-lg/40 rounded-2xl p-8 text-white select-none">
          <h2 className="pb-6 text-[2.438rem] font-medium select-none">Contato</h2>

          <form className="flex flex-col gap-4 select-none" onSubmit={handleSubmit}>
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full">
              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="name" className="select-none">Nome</label>
                <input id="name" type="text" name="name" placeholder="Digite aqui seu nome"
                  onChange={handleChange} value={emailValues.name}
                  className={errors.name ? "input-error select-none" : "select-none"}
                />
                {errors.name && <span className="text-red-500 text-sm select-none">{errors.name}</span>}
              </div>

              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="email" className="select-none">E-mail</label>
                <input id="email" type="text" name="email" placeholder="Digite aqui seu e-mail"
                  onChange={handleChange} value={emailValues.email}
                  className={errors.email ? "input-error select-none" : "select-none"}
                />
                {errors.email && <span className="text-red-500 text-sm select-none">{errors.email}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="select-none">Assunto</label>
              <input id="subject" type="text" name="subject" placeholder="Digite aqui o assunto"
                onChange={handleChange} value={emailValues.subject}
                className={errors.subject ? "input-error select-none" : "select-none"}
              />
              {errors.subject && <span className="text-red-500 text-sm select-none">{errors.subject}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="select-none">Mensagem</label>
              <textarea id="message" name="message" placeholder="Digite aqui sua mensagem"
                onChange={handleChange} value={emailValues.message}
                className={errors.message ? "input-error select-none" : "select-none"}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm select-none">{errors.message}</span>}
            </div>

            <ReCAPTCHA
              ref={recaptchaRef}
              className="mx-auto my-3 g-recaptcha select-none"
              theme="dark"
              sitekey="6LcMAHksAAAAAE-PuzqJvQli5ZsHYCKrQzIRRPQk"
              onChange={(value) => setCapValue(value)}
            />

            <button className="py-3 px-16 mx-auto bg-(--blue) rounded-lg hover:scale-105 transition duration-200 
              hover:bg-(--dark-blue) cursor-pointer disabled:cursor-auto disabled:scale-100 disabled:bg-gray-900 select-none"
              type="submit" disabled={!capValue}>Enviar</button>
          </form>

          {success && (
            <div className="toast-success select-none">
              ✔️ Mensagem enviada com sucesso!
            </div>
          )}
        </div>
      </AnimatedFadeIn>

      {/* Opções de Contato */}
      <AnimatedFadeIn>
        <div className="flex flex-col md:flex-row justify-center gap-11 select-none">
          <a href="mailto:lima-f@outlook.com">
            <div className="contact-option select-none">
              <FaEnvelope size={64} className="pointer-events-none select-none" />
              <h3 className="select-none">E-mail</h3>
              <p className="select-none">lima-f@outlook.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/souzal-fabio/" target="_blank" rel="noreferrer">
            <div className="contact-option select-none">
              <SiLinkedin size={64} className="pointer-events-none select-none" />
              <h3 className="select-none">LinkedIn</h3>
              <p className="select-none">Fabio de Souza Lima</p>
            </div>
          </a>
          <a href="https://github.com/fabio-de-souza-lima" target="_blank" rel="noreferrer">
            <div className="contact-option select-none">
              <SiGithub size={64} className="pointer-events-none select-none" />
              <h3 className="select-none">GitHub</h3>
              <p className="select-none">fabio-de-souza-lima</p>
            </div>
          </a>
          <a href="https://wa.me/5511945295086?text=Olá" target="_blank" rel="noreferrer">
            <div className="contact-option select-none">
              <SiWhatsapp size={64} className="pointer-events-none select-none" />
              <h3 className="select-none">WhatsApp</h3>
              <p className="select-none">Conversar agora</p>
            </div>
          </a>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}

export default Contact;
