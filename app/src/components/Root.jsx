import React from 'react';
import { Router, Switch } from 'react-router-dom';
import LazyRoute from './Common/LazyRoute';
import history from '../history';

const Login = React.lazy(() => import("./Pages/Login"));

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <LazyRoute path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
