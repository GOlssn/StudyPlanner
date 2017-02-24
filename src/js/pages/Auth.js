import React from 'react';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default class Auth extends React.Component {
  render(){

    const divStyle = {
      marginTop: '10%'
    };

    return (
      <div>
        <div class="row" style={divStyle}>
          <div class="col s12 center-align">
            <img src="../../img/logo-teal.png" alt="STDY" />
          </div>
        </div>
        <div class="row">
          <div class="col m4 offset-m1">
            <RegisterForm />
          </div>
          <div class="col m2">
            &nbsp;
          </div>
          <div class="col m4">
            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}
