import React, {Component} from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/maincomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="warning">
          <div className="font-weight-bold">
            <NavbarBrand href="/">the multiverse</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}


export default App;
