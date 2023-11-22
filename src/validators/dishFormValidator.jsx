import Joi from "joi";

export const createDishFormSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'O campo Nome é obrigatório.',
    }),

    description: Joi.string()
    .required()
    .min(20)
    .messages({
      'string.base': 'O campo Descrição deve ser uma string.',
      'string.empty': 'O campo Descrição é obrigatório.',
      'string.min': 'A Descrição deve ter pelo menos 10 caracteres.',
    }),
       
    price: Joi.number().positive().precision(2).required()
    .messages({
      'number.base': 'O preço deve ser um número ex: 29.90',
      'number.positive': 'O preço deve ser acima de 0 ex: 29.90',
      'number.precision': 'O preço deve ter no máximo duas casas decimais',
      'any.required': 'O preço é obrigatório',
    }),


    categories: Joi.string().required().messages({
      'any.required': 'Selecione uma categoria.'
    }),

  
  }).messages({
  'object.base': 'Preencha todos os campos corretamente.',
});