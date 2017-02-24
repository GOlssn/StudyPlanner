import React from 'react';

import InputField from './InputField';

export default class RegisterForm extends React.Component {
  render() {

    const buttonStyle = {
      width: '100%'
    }

    return(
      <form action={this.props.action} method={this.props.method}>
        <div class="row center-align">
          <h5 class="grey-text">New Account</h5>
        </div>
        <div class="row">
          <div class="col s12">
            <InputField labelText="Username" id="registerUsername" name="registerUsername" type="text" />
          </div>
          <div class="col s12">
            <InputField labelText="E-mail" id="registerEmail" name="registerEmail" type="email" />
          </div>
          <div class="col s12">
            <InputField labelText="Password" id="registerPassword" name="registerPassword" type="password" />
          </div>
          <div class="col s12">
            <InputField labelText="Confirm Password" id="registerConfirmPassword" name="registerConfirmPassword" type="password" />
          </div>
        </div>
        <div class="row">
          <div class="col s12">
            <button style={buttonStyle} class="btn" name="registerButton" type="submit">Register</button>
          </div>
        </div>
      </form>
    );
  }
}
