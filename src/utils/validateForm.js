import { object, string, mixed } from "yup"

let userSchema = object({
  fullname: string().required(),
  phone: mixed().required(),
  email: string().email("el campo email no tiene el formato correcto").required()
})

const validateForm = async(dataForm) => {

  try{
    await userSchema.validate(dataForm)
    return { status: "success" }
  }catch(error){
    return { status: "error", message: error.message }
  }

}

export default validateForm