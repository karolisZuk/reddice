import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            identifier:'',
            password:'',
            errors:{},
            isLoading:false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid(){
        const { errors, isValid } = validateInput(this.state);

        if(!isValid) {
            this.setState({ errors });
        }
        return isValid;
    }

    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({errors:{}, isLoading:true})
            this.props.login(this.state).then(
                (res) => this.props.history.push('/'),
                (err) => {
                    this.setState({ errors: err.response.data.errors, isLoading:false })
                }
            );
        }
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){

        const {errors, identifier, password, isLoading } = this.state;
    return (
        <form onSubmit={this.onSubmit}>
            <h1>Login</h1>
            {errors.form && <div className="alert alert-danger">{ errors.form }</div>}
                <TextFieldGroup 
                    field="identifier"
                    label="Username / Email"
                    value={identifier}
                    onChange={this.onChange}
                    error={errors.identifier}
                />

                <TextFieldGroup 
                    field="password"
                    label="Password"
                    value={password}
                    onChange={this.onChange}
                    error={errors.password}
                    type="password"
                />
            <div className="form-group">
                <button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button>
            </div>
        </form>
    );
}
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired
}

export default withRouter(connect(null, { login })(LoginForm));