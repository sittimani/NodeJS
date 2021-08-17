const Joi = require('joi')

const schema = Joi.object({
    name: Joi.string().min(5).required()
})
const{error, value} = schema.validate({ name: "manikandan"})

if(error){
    console.log(error.message);
}else{
    console.log(value)
}