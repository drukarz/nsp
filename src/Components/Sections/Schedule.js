import React, {Component} from "react";
import {Button} from "primereact/button";
import PropTypes from "prop-types";
import { withRouter } from 'react-router'

class Schedule extends Component
{
    constructor(props, context) {
        super(props, context);
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    }

    redirectToSchedule = () => {

        this.props.history.push('/schedule');
    }

    render() {
        return (
            <div>
                <Button label="przegląd kursów" onClick={this.redirectToSchedule}/>
            </div>
        );
    }
}

export default withRouter(Schedule)