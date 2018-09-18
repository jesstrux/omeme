import React from 'react';
import './Login.css';
import logo from '../../logo.png';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as Actions from '../../actions';
import { Redirect } from "react-router-dom";

// components
import Header from "../../components/Header/Header";

const validate = values => {
    const errors = {};
  
    if (!values.email) {
      errors.email = "Username is required.";
    }
  
    if (!values.password) {
      errors.password = "Password is required.";
    }
  
    return errors;
};

class Login extends React.Component {
    handleFormSubmit = (values) => {
        // console.log(values);
        this.props.signUserIn(values);
    };

    inputChanged = (e) => {
        var input = e.target;

        this.setState( { [input.id] : input.value});

        console.log(this.state);
    }

    renderField = ({ input, label, type, meta: { touched, error } }) => (
        <div className="form-group" error={touched && error ? error : ''}>
            <label>{ label }:</label>
            <input {...input} placeholder={label} type={type} />
        </div>
    );

    render() { 
        if (this.props.authed === true) {
            return <Redirect to='/' />
        }
        return ( 
            <div id="Login">
                <Header hasback dark routerBack/>
    
                <div id="title">
                    <img src={logo} alt="logo" />
                    <h2>Omeme Login</h2>
                </div>
    
                <form id="form" onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
                    <Field component={this.renderField} label="username" name="username" type="text" placeholder="enter username here" />
                    
                    <Field component={this.renderField} label="password" name="password" type="password" placeholder="enter password here" />

                    <button action="submit">Sign In</button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      authed: state.auth.status,
    };
}
 
export default connect(mapStateToProps, Actions)(reduxForm({
    form: 'login',
    validate
})(Login));