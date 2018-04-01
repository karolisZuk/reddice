import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Greetings from './Greetings';
import SignupPage from './signup/SignupPage';
import NavigationBar from './NavigationBar';
import LoginPage from './login/LoginPage';
import NewEventPage from './events/NewEventPage';
import FlashMessagesList from './flash/FlashMessagesList';

class App extends React.Component {
    render (){
        return (
            <Router>
                <div>
                <NavigationBar />
                <FlashMessagesList />
                  <Route exact path="/" component={Greetings} />
                  <Route path="/signup" component={SignupPage} />
                  <Route path="/login" component={LoginPage} />
                  <Route path="/new-event" component={NewEventPage} />
                </div>
            </Router> );
    }
    
}

export default App;