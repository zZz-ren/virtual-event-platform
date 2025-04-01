import Joi from "joi";

export const loginBody = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
export const registerBody = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(30).required(),
});
