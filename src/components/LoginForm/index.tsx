"use client"

import { useContext, useEffect, useState } from "react"
import Button from "../Button"
import { validateEmail, validatePassword } from "@/helpers/validation"
import { ILoginForm } from "@/interfaces/forms"
import { loginService } from "@/services/authServices"
import { useRouter } from "next/navigation"
import { AuthContext } from "@/contexts/authContext"


const LoginForm = () => {
  const { setUser } = useContext(AuthContext)
  const router = useRouter()
  const initialData: ILoginForm = { email: "", password: ""}
  const [data, setData] = useState(initialData)
  const [errors, setErrors] = useState(initialData)
  const [touched, setTouched] = useState({email: false, password: false})

  const handleSubmit = async() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const response = await loginService(apiUrl + "/users/login", data)
    if (response.login){
      alert("login exitoso")
      setUser(response)
      router.back()
    } else {
      alert("Usuario o contraseña incorrecta")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setData({...data, [e.target.name]: e.target.value})
  } 
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => { 
    setTouched({...touched, [e.target.name]: true })
  } 

  useEffect(()=> {
    setErrors({
      email: validateEmail(data.email),
      password: validatePassword(data.password)
    });
  }, [data])

  return (
    <form 
      className="flex flex-col w-2/3 md:w-1/2 mx-auto pt-8 gap-2">
      <label htmlFor="email">Email</label>
      <input 
        type="email" 
        id="email" 
        name="email" 
        value={data.email} 
        placeholder="mail@gmail.com" 
        className="rounded-md p-1 focus:outline-none"
        onChange={handleChange}
        onBlur={handleBlur} 
        />
      {touched.email?<p className="text-red-600 text-xs">{errors.email}</p>: null}
      <label htmlFor="password" className="mt-4">password</label>
      <input 
        type="password" 
        id="password" 
        name="password" 
        value={data.password} 
        placeholder="Por lo menos 5 caracteres" 
        className="rounded-md p-1 focus:outline-none"
        onChange={handleChange} 
        onBlur={handleBlur} 
        />
      {touched.password?<p className="text-red-600 text-xs">{errors.password}</p>: null}
      <Button classname="text-primary mt-4 md:w-1/5" onClick={handleSubmit} >Login</Button>
    </form>
  )
}

export default LoginForm