import Joi from '@hapi/joi';

export const authSchema_signin = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
})

export const authSchema_register = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(2).required(),
  name:Joi.string().min(2).required(),

})

export const authSchema_add_product = Joi.object({
  name:Joi.string().min(2).required(),
  description:Joi.string().min(2).required(),
  price:Joi.number().required(),
  rating:Joi.number().required(),
  numReviews:Joi.number().integer().required(),
  countInStock:Joi.number().integer().required(),
})