import React from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import Navigation from './components/Navigation';
import './App.css';
import { isElementOfType } from 'react-dom/test-utils';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      objeto: "Hola",
    }
  }

  render(){
    return (
      <div className="App">
        <div className="wallpaper"></div>
        {/* <Navigation></Navigation> */}

        
        <Login></Login> 
  
      </div>
    );
  }
}

export default App;
