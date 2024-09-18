export const validateEmail = (email:string)=>{
    let validation = ""
    const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    if(!regexEmail.test(email)) validation = "Debe ser un email válido"

    return validation
  }
 
export const validatePassword = (pass:string)=>{
    let validation = ""
    const regexPass = /.{4,}/
    if(!regexPass.test(pass)) validation = "El password debe contener al menos una mayúscula una minúscula, un número y un caracter especial"

    return validation
  }

export const validateAddress = (address:string)=>{
    let validation = ""
    const regexPass = /.{5,}/
    if(!regexPass.test(address)) validation = "La dirección debe contener al menos 5 caracteres"

    return validation
  }

export const validatePhone = (phone:string)=>{
    let validation = ""
    const regexPass = /^(?=.*\d)[\d]{6,}$/
    if(!regexPass.test(phone)) validation = "El teléfono debe contener al menos 6 dígitos"

    return validation
  }

  export const validateName = (name:string)=>{
    let validation = ""
    const regexPass = /.{3,}/
    if(!regexPass.test(name)) validation = "Ingresa por lo menos tres caracter"

    return validation
  }