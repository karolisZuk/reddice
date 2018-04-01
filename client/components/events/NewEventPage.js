import React from 'react';
import EventForm from './EventForm';

class NewEventPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <EventForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default NewEventPage;