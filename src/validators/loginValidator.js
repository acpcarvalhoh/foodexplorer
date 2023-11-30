import Joi from "joi";

const tldList = ['com', 'org', 'net']; 

export const createUserFormSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: tldList } }).required().messages({
      'string.empty': 'O campo E-mail é obrigatório.',
      'string.email': 'Formato de E-mail inválido.',
    }),

    password: Joi.string().min(6).required().messages({
      'string.empty': 'O campo Senha é obrigatório.',
      'string.min': 'A senha deve ter no mínimo {#limit} caracteres.',
    }),
    

  }).messages({
  'object.base': 'Preencha todos os campos corretamente.',

});