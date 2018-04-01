import React from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { createEvent } from '../../actions/eventActions';
import { withRouter } from "react-router-dom";

class EventForm extends React.Component {
    constructor(props){
        super(props);
        this.state={
            title:'',
            errors:{},
            isLoading:false
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    render(){
        const {errors, title, isLoading } = this.state;
    return (
        <form onSubmit={this.onSubmit}>
            <h1>Create New Game Event</h1>

                <TextFieldGroup 
                    name="title"
                    field="title"
                    label="Title"
                    value={title}
                    onChange={this.onChange}
                    error={errors.title}
                />
                <button className="btn btn-primary btn-lg" disabled={isLoading}>Create</button>
        </form>
    );
}
}

EventForm.propTypes = {
    createEvent: PropTypes.func.isRequired
}

export default withRouter(connect(null, { createEvent })(EventForm));