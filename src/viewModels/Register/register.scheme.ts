import * as yup from 'yup';

export const registerScheme = yup.object({
  name: yup
    .string()
    .min(4, 'O nome deve ter pelo menos 4 caracteres')
    .required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
  phone: yup
    .string()
    .required('Telefone é obrigatório')
    .matches(
      /^\(\d{2}\) \d{5}-\d{4}$/,
      'O telefone deve estar no formato (XX) XXXXX-XXXX'
    ),
});

export type RegisterFormData = yup.InferType<typeof registerScheme>;