import ReCAPTCHA from "react-google-recaptcha"
import React, { useRef, useState } from "react"
import "./Contact.css"
import type { FormErrors, Email } from "../../types/Email"
import { validate } from "../../utils/VerifyEmailVal"
import { SiGithub, SiLinkedin, SiWhatsapp } from "react-icons/si"
import { FaEnvelope } from "react-icons/fa";
import { AnimatedFadeIn } from "../../components/fadeIn/AnimatedFadeIn"

function Contact() {
  // 1. Estados e Referências
  const [capValue, setCapValue] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null) // Referência para resetar o visual do Captcha

  const [errors, setErrors] = useState<FormErrors>({})
  const [emailValues, setEmailValues] = useState<Email>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [success, setSuccess] = useState(false);

  // 2. Manipulador de Mudança nos Inputs
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    // Atualiza o valor do campo no estado
    setEmailValues((prev) => ({ ...prev, [name]: value }))
    // Limpa o erro do campo enquanto o usuário digita
    setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  // 3. Função de Envio (Definitiva)
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault() // Impede o recarregamento da página

    // Validação dos campos
    const validationErrors = validate(emailValues)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    try {
      // Envio via fetch (AJAX) para o FormSubmit não sair da página
      const response = await fetch("https://formsubmit.co/ajax/lima-f@outlook.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json' 
        },
        body: JSON.stringify(emailValues)
      });

      if (response.ok) {
        // Ações após sucesso:
        setSuccess(true); // Mostra o Toast azul
        
        // Limpa todos os campos de texto do formulário
        setEmailValues({ name: '', email: '', subject: '', message: '' });
        
        // Reseta o ReCAPTCHA (tira o check verde)
        setCapValue(null);
        recaptchaRef.current?.reset();

        // Esconde o Toast após 8 segundos (conforme seu CSS)
        setTimeout(() => setSuccess(false), 8000);
      }
    } catch (error) {
      console.error("Erro no envio:", error);
    }
  }

  return (
    <div className="flex container mx-auto justify-center py-24 px-5 flex-col gap-20" id="contact">
      <AnimatedFadeIn>
        <div className="w-full bg-(--card-background) shadow-lg/40 rounded-2xl p-8 text-white">
          <h2 className="pb-6 text-[2.438rem] font-medium">Contato</h2>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Configurações ocultas do FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />

            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 w-full">
              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="name">Nome</label>
                <input id="name" type="text" name="name" placeholder="Digite aqui seu nome"
                  onChange={handleChange} value={emailValues.name}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
              </div>

              <div className="flex flex-col w-full gap-1.5">
                <label htmlFor="email">E-mail</label>
                <input id="email" type="text" name="email" placeholder="Digite aqui seu e-mail"
                  onChange={handleChange} value={emailValues.email}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject">Assunto</label>
              <input id="subject" type="text" name="subject" placeholder="Digite aqui o assunto"
                onChange={handleChange} value={emailValues.subject}
                className={errors.subject ? "input-error" : ""}
              />
              {errors.subject && <span className="text-red-500 text-sm">{errors.subject}</span>}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" name="message" placeholder="Digite aqui sua mensagem"
                onChange={handleChange} value={emailValues.message}
                className={errors.message ? "input-error" : ""}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>

            <ReCAPTCHA
              ref={recaptchaRef} // Conecta a referência para podermos resetar
              className="mx-auto my-3 g-recaptcha"
              theme="dark"
              sitekey="6LcMAHksAAAAAE-PuzqJvQli5ZsHYCKrQzIRRPQk"
              onChange={(value) => setCapValue(value)}
            />

            <button className="py-3 px-16 mx-auto bg-(--blue) rounded-lg hover:scale-105 transition duration-200 
              hover:bg-(--dark-blue) cursor-pointer disabled:cursor-auto disabled:scale-100 disabled:bg-gray-900"
              type="submit" disabled={!capValue}>Enviar</button>
          </form>

          {success && (
            <div className="toast-success">
              ✔️ Mensagem enviada com sucesso!
            </div>
          )}
        </div>
      </AnimatedFadeIn>

      {/* Opções de Contato (LinkedIn, GitHub, etc) */}
      <AnimatedFadeIn>
        <div className="flex flex-col md:flex-row justify-center gap-11">
          <a href="mailto:lima-f@outlook.com">
            <div className="contact-option">
              <FaEnvelope size={64} />
              <h3>E-mail</h3>
              <p>lima-f@outlook.com</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/souzal-fabio/" target="_blank" rel="noreferrer">
            <div className="contact-option">
              <SiLinkedin size={64} />
              <h3>LinkedIn</h3>
              <p>Fabio de Souza Lima</p>
            </div>
          </a>
          <a href="https://github.com/fabio-de-souza-lima" target="_blank" rel="noreferrer">
            <div className="contact-option">
              <SiGithub size={64} />
              <h3>GitHub</h3>
              <p>fabio-de-souza-lima</p>
            </div>
          </a>
          <a href="https://wa.me/5511945295086?text=Olá" target="_blank" rel="noreferrer">
            <div className="contact-option">
              <SiWhatsapp size={64} />
              <h3>WhatsApp</h3>
              <p>Conversar agora</p>
            </div>
          </a>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}

export default Contact;