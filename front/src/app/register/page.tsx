import RegisterForm from "@/components/RegisterForm"

const register = () => {
  return (
    <main className="container flex flex-col justify-center">
      <h1 className="m-auto mt-10 mx-auto">Regístrate</h1>
      <RegisterForm/>
    </main>
  )
}

export default register