import React from 'react'
import Navbar from '../../Navbar'
import UserList from '../../Shareded/UserList'

class Admin extends React.Component {
  // constructor debe tomar datos del usuario logeado
  // y al component 'Navbar' recive dicho usuario
  
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <UserList />
      </React.Fragment>
    )
  }
}

export default Admin