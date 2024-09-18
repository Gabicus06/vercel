import LoginForm from "@/components/LoginForm"

const login = () => {
  return (
    <main className="container flex flex-col justify-center">
      <h1 className="m-auto mt-10 mx-auto">Login</h1>
      <LoginForm/>
    </main>
  )
}

export default login