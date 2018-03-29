import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch   } from 'react-router-dom';

import App from './components/App';
import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import NavigationBar from './components/NavigationBar';

render(
<div>
<NavigationBar />
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/greet" component={Greetings} />
      <Route path="/signup" component={SignupPage} />
    </Switch>
</Router>
</div>
, document.getElementById('app'));