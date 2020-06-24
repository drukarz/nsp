import React, {Component, useState} from 'react';
import {Button} from "primereact/button";
import {InputText} from 'primereact/inputtext';
import axios from "axios";
import {Card} from 'primereact/card';
import PropTypes from "prop-types";
import { withRouter } from 'react-router'

class Login extends Component
{
    constructor(props, context) {
        super(props, context);

        this.state = {
            login : "",
            password: "",
            error: ""
        }
    }

    static propTypes = {
        history: PropTypes.object.isRequired
    }

    onSetLogin = (e) => {
        this.setState({login: e.target.value, error: ""});
    }

    onSetPassword = (e) => {
        this.setState({password: e.target.value, error: ""});
    }

    onSetError = () => {
        this.setState({error: "brak autoryzacji"});
    }

    onSubmit = () => {

        console.log(this.state.login);
        console.log(this.props.history);
        axios.get('http://46.41.139.63:3010/login',
            {
                auth: {
                    username: this.state.login,
                    password: this.state.password}
            }).then( (response) => {

                console.log(response);
                this.props.history.push('/4e4aec82-944e-45a2-830a-fe21d503b83d');
            }).catch(function(error) {
            console.log(error);
        })
    }

    render() {

        return (
            <Card>
                <br/>
                <h3>login</h3>
                <InputText value={this.state.login} onChange={this.onSetLogin}/>
                <h3>hasło</h3>
                <InputText value={this.state.password} onChange={this.onSetPassword}/>
                <Button label="loguj" onClick={this.onSubmit}/>
                <br/>
                <h3>{this.state.error}</h3>
            </Card>
        );
    }

}

export default withRouter(Login)