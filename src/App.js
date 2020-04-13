import React from 'react'
import Admin from './components/User/Admin/Admin'
import Agent from './components/User/Agent/Agent'
import Client from './components/User/Client/Client'
import logo from './banco.svg'
import Navigation from './components/Navigation/Navigation'
import UserList from './components/General/UserList/UserList'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(){
    super()
    // sessionStorage.setItem('nombre', 'Junior')
    this.getRoute()
  }


  getRoute() {
    if(sessionStorage.getItem('nombre') == null){
      console.log('No existe');
    } else{
      console.log(sessionStorage.getItem('nombre'))
    }
  }
  render() {
    return (
      // <div className='App'>
      //   <div className='wallpaper'></div>
      //   <Navigation logo={logo}></Navigation>
      // </div>
      <div className='App'>
        <Navigation logo={logo}></Navigation>
        <UserList />
      </div>
      // <Router>
      //   <Switch>
      //     <Route path='/admin'>
      //       <Admin />
      //     </Route>
      //     <Route path='/agent'>
      //       <Agent />
      //     </Route>
      //     <Route path='/client'>
      //       <Client />
      //     </Route>
      //   </Switch>
      // </Router>
    )
  }
}

export default App
