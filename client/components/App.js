import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greetings from './Greetings';
import SignupPage from './signup/SignupPage';
import NavigationBar from './NavigationBar';
import LoginPage from './login/LoginPage';

class App extends React.Component {
//npm run server
    render (){
        return (
            <Router>
                <div>
                <NavigationBar />
                  <Route exact path="/" component={Greetings} />
                  <Route path="/signup" component={SignupPage} />
                  <Route path="/login" component={LoginPage} />
                </div>
            </Router> );
    }
    
}

export default App;