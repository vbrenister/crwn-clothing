import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        onChange={this.handleChange}
                        type="email" 
                        required 
                        name="email" 
                        value={this.state.email}
                        label="Email" />
                    <FormInput 
                        onChange={this.handleChange}
                        type="password" 
                        name="password" 
                        required 
                        value={this.state.password}
                        label="Password" />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }

}

export default SignIn;