const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    createUserValidator: celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().alphanum().min(3).max(30).required(),
            email: Joi.string().email().required(),
            last_name: Joi.string().alphanum().min(3).max(30).required(),
            phone: Joi.string().length(10),
            password: Joi.string().required(),
            rol: Joi.string().valid('guest','admin','owner').required(),
            description: Joi.string()
        })
    })
}