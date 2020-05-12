import React from 'react'
import Navbar from '../Navbar'
import UserList from '../Shareded/UserList'
import Branch from './../Shareded/Branch'

const Admin = () => {
  // constructor debe tomar datos del usuario logeado
  // const [userLogged, setUserLogged] = React.useState(
  //   JSON.parse(sessionStorage.getItem('user'))
  // )
  const userLogged = {
    name: {
      firstName: 'Leni',
      lastName: 'Wiegelmann',
      jobTitle: 'Corporate Integration Coordinator'
    },
    userType: 'admin',
    document: 40493669,
    birthday: '2000-06-16T01:15:49.801Z',
    addres: {
      street: {
        number: '2398 Lorenz Lodge',
        name: 'Nick Manors'
      },
      city: 'Ost Svenja',
      state: 'Brandenburg',
      county: 'Avon',
      country: 'Sambia',
      countryCode: 'HR'
    },
    phoneNumber: '+49-7842-32834099',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kohette/128.jpg',
    login: {
      email: 'leni.wiegelmann@correo.com',
      userName: 'Giuliana.Thimm',
      password: 'Kh5RPDNjPWl4E_i'
    }
  }
  const [isVisibleBranch, setVisibleBranch] = React.useState(false)

  React.useEffect(() => {
    console.log(userLogged)
  }, [])

  return (
    <React.Fragment>
      <Navbar
        firstName={userLogged.name.firstName}
        lastName={userLogged.name.lastName}
        avatar={userLogged.avatar}
        type='admin'
        actionShowBranch={setVisibleBranch}
      />
      <div className='card p-4 bg-light border border-primary text-center'>
        {!isVisibleBranch ? (
          <UserList userDocument={userLogged.document} type='admin' />
        ) : (
          /* mostrar crud sucursales*/
          <Branch userDocument={userLogged.document} />
        )}
      </div>
    </React.Fragment>
  )
}

export default Admin
