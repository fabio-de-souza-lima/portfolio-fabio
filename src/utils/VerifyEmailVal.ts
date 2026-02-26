import type { Email, FormErrors } from "../types/Email";


export function validate(values: Email): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = "O campo nome é obrigatório"
  }

  if (!values.email) {
    errors.email = "O campo e-mail é obrigatório"
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "E-mail inválido"
  }

  if (!values.subject.trim()) {
    errors.subject = "O campo assunto é obrigatório"
  }

  if (!values.message.trim()) {
    errors.message = "A mensagem não pode estar vazia"
  } else if (values.message.length <= 5) {
    errors.message = "A mensagem deve ter no mínimo 5 caracteres"
  }

  return errors
}