import React from 'react'
import logo from './banco.svg'
import Login from './components/Login/Login'
import Navigation from './components/Navigation/Navigation'
import UserList from './components/UserList/UserList'
import Sucursal from './components/Sucursal/Sucursal'
import './App.css'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='wallpaper'></div>
        <Navigation logo={logo}></Navigation>

        {/* <Login /> */}
        {/* <UserList /> */}
        <Sucursal />
      </div>
    )
  }
}

export default App
