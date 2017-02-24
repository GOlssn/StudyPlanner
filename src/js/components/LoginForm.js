import { Link } from 'react-router';
import React from 'react';

import InputField from './InputField';

export default class LoginForm extends React.Component {
  render() {

    const buttonStyle = {
      width: '100%'
    }

    return(
      <form action={this.props.action} method={this.props.method}>
        <div class="row center-align">
          <h5 class="grey-text">Sign In</h5>
        </div>
        <div class="row">
          <div class="col s12">
            <InputField labelText="Username" id="username" name="username" type="text" />
          </div>
          <div class="col s12">
            <InputField labelText="Password" id="password" name="password" type="password" />
          </div>
        </div>
        <div class="row">
          <div class="row">
            <div class="col s12">
              <button style={buttonStyle} class="btn" name="loginButton" type="submit">Sign In</button>
            </div>
          </div>
          <div class="row">
            <div class="col s4 center-align">
              <button style={buttonStyle} class="btn blue darken-4"><i class="icon ion-social-facebook"></i></button>
            </div>
            <div class="col s4 center-align">
              <button style={buttonStyle} class="btn red darken-2"><i class="icon ion-social-googleplus"></i></button>
            </div>
            <div class="col s4 center-align">
              <button style={buttonStyle} class="btn blue lighten-3"><i class="icon ion-social-twitter"></i></button>
            </div>
          </div>
          <div class="row">
            <div class="col s12 center-align">
              <Link to="/dashboard">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
