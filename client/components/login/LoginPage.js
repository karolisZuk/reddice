import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    render(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}
}

export default LoginPage;