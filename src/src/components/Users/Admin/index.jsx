import React from 'react'
import { useSelector } from 'react-redux'
import NavB from './../../Navbar'
import UserList from './UserList'
import Branch from './Branch'

const Admin = () => {
  // constructor debe tomar datos del usuario logeado
  // const [userLogged, setUserLogged] = React.useState(
  //   JSON.parse(sessionStorage.getItem('user'))
  // )
  // const userLogged = {
  //   userid: 'NoHCSThMFj',
  //   personalInfo: {
  //     firstName: 'Leni',
  //     lastName: 'Wiegelmann',
  //     document: 40493669,
  //     jobTitle: 'Corporate Integration Coordinator',
  //     birthday: '2000-06-16',
  //     phoneNumber: '+49-7842-32834099'
  //   },
  //   userType: 'admin',
  //   addres: {
  //     street: {
  //       number: '2398 Lorenz Lodge',
  //       name: 'Nick Manors'
  //     },
  //     city: 'Ost Svenja',
  //     state: 'Brandenburg',
  //     country: 'Sambia',
  //     countryCode: 'HR'
  //   },
  //   login: {
  //     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/kohette/128.jpg',
  //     email: 'leni.wiegelmann@correo.com',
  //     userName: 'Giuliana.Thimm',
  //     password: 'Kh5RPDNjPWl4E_i'
  //   }
  // }

  const userLogged = useSelector(state => state.userSession)
  const [isVisibleBranch, setVisibleBranch] = React.useState(false)

  React.useEffect(() => {
    console.log('ADMIN. usuario logueado',userLogged)
    console.log(isVisibleBranch)
  })

  return (
    // <div className='container-fluid bg-primary min-vh-100 min-vw-100 mb-4'>
    //   <Navbar
    //     firstName={userLogged.name.firstName}
    //     lastName={userLogged.name.lastName}
    //     avatar={userLogged.avatar}
    //     type='admin'
    //     actionShowBranch={setVisibleBranch}
    //   />
    //   <div className='card p-4 bg-light border border-primary text-center'>
    //     {!isVisibleBranch ? (
    //       <UserList userDocument={userLogged.document} type='admin' />
    //     ) : (
    //       <Branch userDocument={userLogged.document} />
    //     )}
    //   </div>
    // </div>
    <React.Fragment>
      <NavB actionShowBranch={setVisibleBranch} />
      <div className='p-4 bg-admin text-center content-page'>
        {!isVisibleBranch ? (
          <UserList />
        ) : (
          <Branch />
        )}
      </div>
    </React.Fragment>
  )
}

export default Admin
