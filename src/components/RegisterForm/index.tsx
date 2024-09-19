"use client"

import { useEffect, useState } from "react"
import Button from "../Button"
import { validateEmail, validateAddress, validatePhone, validateName, validatePassword } from "@/helpers/validation"
import { IRegisterForm } from "@/interfaces/forms"
import { registerService } from "@/services/authServices"
import { useRouter } from "next/navigation"

const RegisterForm = () => {
  const router = useRouter()
  const initialData:IRegisterForm = { name:"", address:"", phone: "", email: "", password: ""}
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState(initialData)
  const [touched, setTouched] = useState({name: false, address:false, phone:false, email:false, password: false})

  const handleSubmit = async() => {
    const url = process.env.NEXT_PUBLIC_API_URL
    const response = await registerService(url+"/users/register", data)
    if (!response.message){
      alert("Te registraste correctamente")
      router.back()
    } else {
      alert(response.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setData({...data, [e.target.name]: e.target.value})
  } 
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => { 
    setTouched({...touched, [e.target.name]: e.target.value})
  } 

  useEffect(()=> {
    setErrors({
      name: validateName(data.name),
      address: validateAddress(data.address),
      phone: validatePhone(data.phone),
      email: validateEmail(data.email),
      password: validatePassword(data.password)
    })
  }, [data])

  return (
    <form 
      className="flex flex-col w-2/3 md:w-1/2 mx-auto pt-8 gap-2">

      <label htmlFor="name">Nombre</label>
      <input 
        type="name" 
        id="name" 
        name="name" 
        value={data.name} 
        placeholder="" 
        className="rounded-md p-1"
        onChange={handleChange}
        onBlur={handleBlur} 
        />
      {touched.name?<p className="text-red-600 text-xs">{errors.name}</p>: null}
      
      <label htmlFor="address">Dirección</label>
      <input 
        type="address" 
        id="address" 
        name="address" 
        value={data.address} 
        placeholder="Debe contener al menos 5 caracteres" 
        className="rounded-md p-1"
        onChange={handleChange}
        onBlur={handleBlur} 
        />
      {touched.address?<p className="text-red-600 text-xs">{errors.address}</p>: null}
      
      <label htmlFor="phone">Teléfono</label>
      <input 
        type="phone" 
        id="phone" 
        name="phone" 
        value={data.phone} 
        placeholder="Ingresa tu número telefónico" 
        className="rounded-md p-1"
        onChange={handleChange}
        onBlur={handleBlur} 
        />
      {touched.phone?<p className="text-red-600 text-xs">{errors.phone}</p>: null}
      
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={data.email} 
        placeholder="mail@gmail.com" 
        className="rounded-md p-1"
        onChange={handleChange}
        onBlur={handleBlur} 
        />
      {touched.email?<p className="text-red-600 text-xs">{errors.email}</p>: null}
      <label htmlFor="password">Password</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        value={data.password} 
        placeholder="Por lo menos 5 caracteres" 
        className="rounded-md p-1"
        onChange={handleChange} 
        onBlur={handleBlur} 
        />
      {touched.password?<p className="text-red-600 text-xs">{errors.password}</p>: null}
      <Button classname="text-primary my-4 md:w-1/5" onClick={handleSubmit} >Registrarme</Button>
    </form>
  )
}

export default RegisterForm