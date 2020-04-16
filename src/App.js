import React from 'react'
import Admin from './components/Users/Admin/Admin'
import AccountManager from './components/Users/AccountManager'
import Client from './components/Users/Client/Client'
import Login from './components/Login/Login'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import LoadListUser from './services/LoadListUser'
import Auth from './services/Auth'


class App extends React.Component {
  // constructor() {
  //   super()
  //   // if (typeof (Storage) !== 'undefined') {
  //   //   // Código cuando Storage es compatible
  //   //   console.log('vacio');
  //   // } else {
  //   //   // Código cuando Storage NO es compatible
  //   //   console.log('contiene datos');
  //   // }
  // }

  componentDidMount() {
    console.log('componentDidMount');
    LoadListUser()
    sessionStorage.clear()
    console.log(Auth.isAuthenticated())
    
    //const listaStorage = JSON.parse(localStorage.getItem('userList'))
  }

  getRoute() {
    if (sessionStorage.getItem('nombre')) {
      console.log('No existe');
    } else {
      console.log(sessionStorage.getItem('nombre'))
    }
  }
  render() {
    return (
      // <div className='App'>
      //   <div className='wallpaper'></div>
      //   <Navigation logo={logo}></Navigation>
      //    <UserList />
      // </div>
      <div className="App">
        <div className='bg-bank'></div>
        <Router>
          <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/admin' component={Admin} />
            <Route path='/account-manager' component={AccountManager} />
            <Route path='/client' component={Client} />
            <Route path='*' component={() => "404 NOT FOUND"} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
