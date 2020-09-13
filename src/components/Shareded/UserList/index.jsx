import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./userlist.css"
import ListView from "./ListView"

const UserList = (props) => {
  // const { re_userList } = useSelector(state => ({
  //   re_userList: state.userList
  // }))
  const dispatch = useDispatch()

  const [userList, setUserList] = React.useState([])

  // React.useEffect(() => {
  //   const obtenerLista = () => {
  //     const lista = JSON.parse(localStorage.getItem('userList')).filter(
  //       u => u.document !== props.document
  //     )
  //     setUserList(lista)
  //   }
  //   obtenerLista()
  // }, [])

  // const showList = () => {
  //   var valueOfType = { color: '', type: '' }
  //   const getColorOfType = type => {
  //     if (type === 'client') {
  //       valueOfType.color = 'primary'
  //       valueOfType.type = 'Cliente'
  //     } else if (type === 'account-manager') {
  //       valueOfType.color = 'success'
  //       valueOfType.type = 'Agente de cuentas'
  //     } else {
  //       valueOfType.color = 'dark'
  //       valueOfType.type = 'Administrador'
  //     }
  //     return valueOfType
  //   }
  //   const list = re_userList.map(
  //     i => console.log(i)

  //     //   (user, index) => (
  //     //   <tr className='align-middle' key={index}>
  //     //     <td className='d-flex align-items-center'>
  //     //       <img
  //     //         className='shadow rounded-circle w-60 border border-secondary d-block'
  //     //         src={user.avatar}
  //     //         alt='Avatar'
  //     //       />
  //     //       <div className='ml-3 align-middle text-left'>
  //     //         <h6 className='my-0' onClick={() => seleccionUsuario(index)}>
  //     //           {user.name.firstName} {user.name.lastName}
  //     //         </h6>
  //     //         <small className='text-muted d-none d-lg-block'>
  //     //           {user.name.jobTitle}
  //     //         </small>
  //     //       </div>
  //     //     </td>
  //     //     <td className='align-middle'>
  //     //       <span
  //     //         className={`badge text-wrap badge-${
  //     //           getColorOfType(user.userType).color
  //     //         }`}
  //     //       >
  //     //         {valueOfType.type}
  //     //       </span>
  //     //     </td>
  //     //     <td className='align-middle'>{user.document}</td>
  //     //     <td className='align-middle'>{user.login.email}</td>
  //     //     <td className='align-middle'>
  //     //       <div className="btn-group">
  //     //         <button className='btn btn-warning mr-1'>
  //     //           <i className='fas fa-user-edit fa-sm'></i>
  //     //         </button>
  //     //         <button className='btn btn-danger'
  //     //         onClick={()=>{console.log(index)}}>
  //     //           <i className='fas fa-user-minus fa-sm'></i>
  //     //         </button>
  //     //       </div>
  //     //     </td>
  //     //   </tr>
  //     // )
  //   )
  //   return list
  // }
  const showOptions = () => {
    const options = (
      <div className="d-flex justify-content-between my-2">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark mr-1"
            onClick={() => showAdmins(this)}
          >
            Administradores
            <span className="badge badge-light contador ml-1 align-middle badge-pill">
              {userList.filter((e) => e.userType === "admin").length}
            </span>
          </button>
          <button
            type="button"
            className="btn btn-dark mr-1"
            onClick={() => showAccountManagers()}
          >
            Agente de cuantas
            <span className="badge badge-light contador ml-1 align-middle badge-pill">
              {userList.filter((e) => e.userType === "account-manager").length}
            </span>
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={() => showClients()}
          >
            Clientes
            <span className="badge badge-light contador ml-2 align-middle badge-pill">
              {userList.filter((e) => e.userType === "client").length}
            </span>
          </button>
        </div>
        <button className="btn btn-success my-1">
          <i className="fas fa-user-plus"></i> Nuevo usuario
        </button>
      </div>
    )
    return options
  }

  const seleccionUsuario = (id) => {
    console.log(id)
  }

  const showAdmins = (ev) => {
    console.log("Mostrando Administradores")
  }
  const showAccountManagers = (ev) => {
    console.log("Mostrando Agente de cuentas")
  }
  const showClients = (ev) => {
    console.log("Mostrando Clientes")
  }

  return (
    <div className="container card px-4 bg-light border border-primary text-center">
      {showOptions()}
      <div className="table-responsive">
        <table className="table table-borderless table-hover">
          <thead className="bg-dark text-light">
            <tr>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Documento</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          {
            // showList() re_userList.map((u, index) => console.log(u, index))
          }
          <ListView />
        </table>
      </div>
    </div>
  )
}

export default UserList
