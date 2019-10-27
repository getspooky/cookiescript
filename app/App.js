import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import PrivateRoute from './guards';
import Navbar from './layouts/navbar';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import Profile from './pages/profile';
import Forgot from './pages/auth/passwords/forgot';
import Reset from './pages/auth/passwords/reset';
import Welcome from './pages/welcome';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="container ui">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/password/forgot/" exact component={Forgot} />
            <Route path="/password/reset/:token" exact component={Reset} />
            <PrivateRoute path="/profile" exact component={Profile} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
