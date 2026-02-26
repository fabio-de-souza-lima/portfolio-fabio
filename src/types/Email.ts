export type Email = {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof Email, string>>