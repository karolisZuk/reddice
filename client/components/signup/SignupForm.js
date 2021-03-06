import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username:'',
            email:'',
            password:'',
            passwordConfirmation:'',
            timezone:'',
            errors:{},
            isLoading:false,
            ivalid:false
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        this.checkUserExists=this.checkUserExists.bind(this);
    }

    checkUserExists(e){
        const field = e.target.name;
        const val = e.target.value;
        if(val !== ''){
            this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let invalid;
        if(res.data.user){
            errors[field ]= 'There is user with such ' + field;
            invalid = true;
        } else {
            errors[field] = '';
            invalid = false;
        }
        this.setState({ errors, invalid });
            });
        }
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    isValid(){
        const {errors, isValid } = validateInput(this.state);
        if(!isValid){
            this.setState({ errors });
        }
        return isValid;
    }
    
    onSubmit(e){
        e.preventDefault();
        if(this.isValid()){
            this.setState({ errors:{},isLoading:true });
            this.props.userSignupRequest(this.state).then(
                ()=>{
                    this.props.addFlashMessage({
                        type:'success',
                        text:'You have signed up successfully. Welcome!'
                    }); 
                    this.props.history.push('/');
                },
            (err) => this.setState({ errors: err.response.data, isLoading:false })
        ); 
        this.setState({ isLoading:false });
        }
    }

    render(){
        const { errors } = this.state;
        const options = map(timezones,(val, key)=>
            <option key={val} value={val}>{key}</option>);
    return (
        <form onSubmit={this.onSubmit} >
            <h1>Join our community!</h1>

        <TextFieldGroup 
            error={errors.username}
            label="Username"
            onChange={this.onChange}
            value={this.state.username}
            checkUserExists={this.checkUserExists}
            field="username"
        />

        <TextFieldGroup 
            error={errors.email}
            label="Email"
            onChange={this.onChange}
            checkUserExists={this.checkUserExists}
            value={this.state.email}
            field="email"
        />

        <TextFieldGroup 
            error={errors.password}
            label="Password"
            onChange={this.onChange}
            value={this.state.password}
            field="password"
            type="password"
        />

        <TextFieldGroup 
            error={errors.passwordConfirmation}
            label="Password Confirmation"
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
            type="password"
        />

              <div className="form-group">
              <label className="control-label">Timezone</label>
              <select 
                  value={this.state.timezone} 
                  onChange={this.onChange}
                  name="timezone"
                  className={classnames("form-control", { 'is-invalid': errors.timezone })} >
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                  </select>
                  {errors.timezone && <span className="help-block">{errors.timezone}</span>} 
               </div>

            <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">Sign up</button>
        </form>
    );
}
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

export default withRouter(SignupForm);