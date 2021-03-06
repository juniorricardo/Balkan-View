import React from "react"
import PropTypes from "prop-types"
import "./navbar.css"
import logo from "./../../img/icons/banco.svg"
import Auth from "./../../services/Auth"

const Navbar = (props) => {
  const [user, setUser] = React.useState({
    firstName: props.firstName,
    lastName: props.lastName,
    avatar: props.avatar,
    type: props.type,
  })

  const navLogout = () => {
    console.log("Navbar logout Button")
    Auth.logout(() => {
      sessionStorage.removeItem("user")
      setUser({
        firstName: "",
        lastName: "",
        type: "",
      })
    })
  }

  return (
    <nav className="navbar sticky-top navbar-light bg-light border-bottom rounded mb-4">
      <a className="navbar-brand" href="#">
        <img
          className="align-top"
          src={logo}
          width="30"
          height="30"
          alt="logo"
        />{" "}
        <h5 className="d-inline-block mt-1">Sucursal bancario</h5>
      </a>
      <div className="nav form-inline navbar-nav navbar-right d-inline-block my-1">
        <img
          className="shadow rounded-circle w-60 border border-primary d-inline mr-3"
          src={user.avatar}
          alt="Avatar"
        />
        <span className="navbar-text">
          {user.firstName} {user.lastName}
        </span>
        <button className="btn btn-dark ml-2" onClick={() => navLogout()}>
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  avatar: PropTypes.string,
  type: PropTypes.string,
}

export default Navbar
