import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Admin from './components/Users/Admin'
import AccountManager from './components/Users/AccountManager'
import Client from './components/Users/Client'
import Login from './components/Login/Login'
import './App.css'

const App = () => {
  // FIXME: Validar login con REDUX
  // componentDidMount() {
  //   console.log('componentDidMount')
  //   sessionStorage.clear()
  //   console.log(Auth.isAuthenticated())
  // }
  const [userLogged, setUserLogged] = React.useState(false)

  const getRoute = () => {
    if (sessionStorage.getItem('nombre')) {
      console.log('No existe')
    } else {
      console.log(sessionStorage.getItem('nombre'))
    }
  }

  return (
    <div className='App'>
      <div className='bg-bank'></div>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/admin' component={Admin} />
          <Route path='/account-manager' component={AccountManager} />
          <Route path='/client' component={Client} />
          <Route path='*' component={() => '404 NOT FOUND'} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
