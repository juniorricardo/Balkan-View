import React from "react"
import PropTypes from "prop-types"
import "./login.css"
import imgLogin from "./../../img/image.jpg"
import Auth from "./../../services/Auth"

const Login = ({ history }) => {
  const [email, setEmail] = React.useState("")
  const [password, setPassword] = React.useState("")
  /*
-Client
clarissa.wallner@correo.com
dO6DNdgGbRmojdq
-Account-manager
jean.zeidler12@correo.com
i0cd62wD5_PCUeY
-Admin
leni.wiegelmann@correo.com
Kh5RPDNjPWl4E_i
*/
  const handleSubmit = (ev) => {
    ev.preventDefault()
    // Validar con base de datos. -> Https.status.OK
    console.log(`Logueando con: ${email} + ${password}`)

    const userLog = JSON.parse(localStorage.getItem("userList")).filter(
      (u) => u.login.email === email && u.login.password === password
    )
    if (userLog[0]) {
      Auth.login(() => {
        var userType = ""
        sessionStorage.setItem("user", JSON.stringify(userLog[0]))
        switch (userLog[0].userType) {
          case "client":
            userType = "/client"
            break
          case "account-manager":
            userType = "/account-manager"
            break
          case "admin":
            userType = "/admin"
            break
        }
        history.push(userType)
      })
    } else {
      console.log("Login. ERROR")
    }
    setEmail("")
    setPassword("")
  }

  return (
    <div className="card shadow width-1 mx-auto font-quicksand bg-light">
      <img className="card-img-top px-1 py-1" src={imgLogin} alt="Login" />
      <div className="card-body">
        <h2 className="card-title text-center mb-4">Iniciar sesion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail">Correo electronico</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              placeholder="Ingrese su correo"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-dark btn-lg btn-block mb-2 mt-2"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default Login
