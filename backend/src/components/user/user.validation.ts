import Joi from 'joi';
import { ValidationSchema } from '@core/interfaces/validationSchema';

const linkUserTwitterValidation: ValidationSchema = {
  body: Joi.object().keys({
    address: Joi.string().required(),
    signature: Joi.string().required(),
    userId: Joi.string().required(),
  }),
};

export default linkUserTwitterValidation;
