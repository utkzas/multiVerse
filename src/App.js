import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="warning">
          <div className="font-weight-bold">
            <NavbarBrand href="/">the multiverse</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}


export default App;
