import Joi from 'joi';

export const loanRepaymentRequestValidation = Joi.object().keys({
    principal: Joi.number().default(100),
    tenure: Joi.number().default(10),
    rate: Joi.number().min(0).max(100).default(2)
});