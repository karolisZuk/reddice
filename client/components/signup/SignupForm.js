import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
            isLoading:false
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        this.setState({ errors:{},isLoading:true });
        e.preventDefault();
        this.props.userSignupRequest(this.state).then(
            ()=>{

            },
            (err) => this.setState({ errors: err.response.data, isLoading:false })
        );
    }

    render(){
        const { errors } = this.state;
        const options = map(timezones,(val, key)=>
            <option key={val} value={val}>{key}</option>);
    return (
        <form onSubmit={this.onSubmit} >
            <h1>Join our community!</h1>

            <div className="form-group" >
                <label className="control-label">Username</label>
               <input 
                value={this.state.username}
                onChange={this.onChange}
                type="text"
                name="username"
                className={classnames("form-control", { 'is-invalid': errors.username })} />
            {errors.username && <span className="help-block">{errors.username}</span>} 
            </div>

            <div className="form-group">
            <label className="control-label">Email</label>
            <input 
                value={this.state.email}
                onChange={this.onChange}
                type="text"
                name="email"
                className={classnames("form-control", { 'is-invalid': errors.email })} />
                {errors.email && <span className="help-block">{errors.email}</span>} 
             </div>

             <div className="form-group">
            <label className="control-label">Password</label>
            <input 
                value={this.state.password}
                onChange={this.onChange}
                type="password"
                name="password"
                className={classnames("form-control", { 'is-invalid': errors.password })} />
                {errors.password && <span className="help-block">{errors.password}</span>} 
             </div>

             <div className="form-group">
             <label className="control-label">Password Confirmation</label>
             <input 
                 value={this.state.passwordConfirmation}
                 onChange={this.onChange}
                 type="password"
                 name="passwordConfirmation"
                 className={classnames("form-control", { 'is-invalid': errors.passwordConfirmation })} />
                 {errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>} 
              </div>

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

            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign up</button>
        </form>
    );
}
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;