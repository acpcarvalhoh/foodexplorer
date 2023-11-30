import Joi from "joi";


export const creditCardSchema = Joi.object({
  number: Joi.string()
  .creditCard()
  .required()
  .messages({
    'string.empty': 'Campo obrigatório.',
    'string.base': 'O número do cartão de crédito inválido',
    'string.creditCard': 'O número do cartão de crédito não é válido',
    'any.required': 'O número do cartão de crédito é obrigatório',
  }),
    
  expirationDate: Joi.string()
  .pattern(/^\d{2}\/\d{2}$/)
  .required()
  .messages({
    'string.empty': 'Campo obrigatório.',
    'string.base': 'Data inválida ex: 14/28',
    'string.pattern.base': 'Data inválida ex: 14/28',
    'any.required': 'Campo obrigatório.',
  }),


  cvc: Joi.string()
  .pattern(/^\d{3}$/)  
  .required()
  .messages({
    'string.empty': 'Campo obrigatório.',
    'string.base': 'CVC inválido',
    'string.pattern.base': 'CVC inválido',
    'any.required': 'Campo obrigatório.',
  }),



});


