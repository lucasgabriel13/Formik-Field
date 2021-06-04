import * as Yup from 'yup';

export default Yup.object().shape({
  nome: Yup
    .string()
    .required('Este campo é obrigatório'),
  senha: Yup
    .string()
    .min(6, 'A senha deve conter no mínimo 6 caracteres')
    .required('Este campo é obrigatório'),
  email: Yup
    .string()
    .email('Digite um email válido')
    .required('Este campo é obrigatório'),
})