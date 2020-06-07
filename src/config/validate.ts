import { celebrate, Joi } from 'celebrate';

export default celebrate(
  {
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      whatsapp: Joi.number().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      state: Joi.string().required().required().max(2),
      city: Joi.string().required(),
      items: Joi.string().required(),
    }),
  },
  {
    abortEarly: false,
  },
);
