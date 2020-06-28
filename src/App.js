import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import Login from './Auth/Login';
import Register from './Auth/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />

            }
          </Switch>
        </BrowserRouter>
      </div>
    );
  }


}

export default App;
