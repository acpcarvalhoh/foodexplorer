import Joi from "joi";

export const createDishFormSchema = Joi.object({
    name: Joi.string().required().messages({
      'string.empty': 'O campo Nome é obrigatório.',
    }),

    description: Joi.string().required().messages({
      'string.empty': 'O campo Descrição é obrigatório.',
    }),
       
    price: Joi.number().min(0).required().messages({
      'number.base': 'O preço deve ser um número',
      'number.min': 'Digite um preço válido, por exemplo, 29.90',
      'any.required': 'O preço é obrigatório',
    }),

    categories: Joi.string().required().messages({
      'any.required': 'Selecione uma categoria.'
    }),

  
  }).messages({
  'object.base': 'Preencha todos os campos corretamente.',
});